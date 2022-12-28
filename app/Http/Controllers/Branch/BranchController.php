<?php

namespace App\Http\Controllers\Branch;

use App\Http\Controllers\Controller;
use App\Http\Requests\Branch\CreateBranchRequest;
use App\Http\Requests\Branch\EditBranchRequest;
use App\Http\Resources\Branch\BranchResource;
use App\Repositories\Branch\BranchRepositoryInterface;
use Illuminate\Http\Request;

class BranchController extends Controller
{
    public $repository;
    public $resource = BranchResource::class;
    public function __construct(BranchRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \response
     */
    public function index(Request $request)
    {

        if (count($_GET) > 0) {
            cacheForget('branches');
        }
        $branches = cacheGet('branches');
        if ($request->search || $request->is_active) {
            cacheForget('branches');
            $branches = $this->repository->getAllBranches($request);
        }
        if (!$branches) {
            $branches = $this->repository->getAllBranches($request);
            cachePut('branches', $branches);
        }

        return responseJson(200, 'success', ($this->resource)::collection($branches['data']), $branches['paginate'] ? getPaginates($branches['data']) : null);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \response
     */
    public function store(CreateBranchRequest $request)
    {
        try {

            $this->repository->create($request->validated());
            return responseJson(200, __('done'));
        } catch (Exception $exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return \response
     */
    public function show($id)
    {
        if ($branch = $this->repository->find($id)) {
            return responseJson(200, __('Done'), new $this->resource($branch), 200);
        }
        return responseJson(404, __('not found'));
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {

    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return \response
     */
    public function update(EditBranchRequest $request, $id)
    {
        $data = [];
        $data['company_id'] = $request->company_id;
        if ($request->name) {
            $data['name'] = $request->name;
        }
        if ($request->name_e) {
            $data['name_e'] = $request->name_e;
        }
        if ($request->is_active) {
            $data['is_active'] = $request->is_active;
        }
        try {
            $this->repository->update($data, $id);
            return responseJson(200, __('updated'));
        } catch (\Exception$exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
    }

    public function logs($id)
    {
        $model = $this->repository->find($id);

        if (!$model) {
            return responseJson(404, __('not found'));
        }
        $logs = $this->repository->logs($id);
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));

    }
    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \response
     */
    public function destroy($id)
    {
        $model = $this->repository->find($id);
        if (!$model) {
            return responseJson(404, __('not found'));
        }
        if ($model->hasChildren()) {
            return responseJson(400, __("this item has children and can't be deleted remove it's children first"));
        }
        $this->repository->delete($id);
        return responseJson(200, __('deleted'));
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $model = $this->repository->find($id);
            $arr = [];
            if ($model->hasChildren()) {
                $arr[] = $id;
                continue;
            }
            $this->repository->delete($id);
        }
        if (count($arr) > 0) {
            return responseJson(400, __('some items has relation cant delete'));
        }
        return responseJson(200, __('Done'));
    }
}
