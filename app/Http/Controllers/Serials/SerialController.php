<?php

namespace App\Http\Controllers\Serials;

use App\Http\Controllers\Controller;
use App\Http\Requests\Serial\CreateSerialRequest;
use App\Http\Requests\Serial\EditSerialRequest;
use App\Http\Resources\Serials\SerialResource;
use App\Repositories\Serial\SerialRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SerialController extends Controller
{
    public $repository;
    public $resource = SerialResource::class;
    public function __construct(SerialRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \response
     */
    public function index(Request $request)
    {

        if(count($_GET) > 0){
            cacheForget('serials');
        }
        $serials = cacheGet('serials');
        if ($request->search || $request->is_active) {
            cacheForget('serials');
            $serials = $this->repository->getAll($request);
        }
        if (!$serials) {
            $serials = $this->repository->getAll($request);
            cachePut('serials', $serials);
        }

        return responseJson(200, 'success', ($this->resource)::collection($serials['data']), $serials['paginate'] ? getPaginates($serials['data']) : null);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \response
     */
    public function store(CreateSerialRequest $request)
    {
        try {
            // if (!DB::table('companies')->find($request->company_id)) {
            //     return responseJson(404, __('company does\'t exist'));
            // }
            // if (!DB::table('branches')->find($request->branch_id)) {
            //     return responseJson(404, __('branch does\'t exist'));
            // }
            // if (!DB::table('stores')->find($request->store_id)) {
            //     return responseJson(404, __('store does\'t exist'));
            // }
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
        if ($serial = $this->repository->find($id)) {
            return responseJson(200, __('Done'), new $this->resource($serial), 200);
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
    public function update(EditSerialRequest $request, $id)
    {
        $data = [];
        if ($request->company_id) {
            if (!DB::table('companies')->find($request->company_id)) {
                return responseJson(422, __('company does\'t exist'));
            }
            $data['company_id'] = $request->company_id;
        }
        if ($request->branch_id) {
            if (!DB::table('branches')->find($request->branch_id)) {
                return responseJson(422, __('branch does\'t exist'));
            }
            $data['branch_id'] = $request->branch_id;
        }
        if ($request->store_id) {
            if (!DB::table('stores')->find($request->store_id)) {
                return responseJson(422, __('branch does\'t exist'));
            }
            $data['store_id'] = $request->store_id;
        }
        if ($request->start_no) {
            $data['start_no'] = $request->start_no;
        }
        if ($request->perfix) {
            $data['perfix'] = $request->perfix;
        }
        if ($request->suffix) {
            $data['suffix'] = $request->suffix;
        }
        if ($request->restart_period) {
            $data['restart_period'] = $request->restart_period;
        }
        if ($request->is_default) {
            $data['is_default'] = $request->is_default;
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
            return responseJson(404, __('message.data not found'));
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
        $this->repository->delete($id);
        return responseJson(200, __('deleted'));
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $this->repository->delete($id);
        }
        return responseJson(200, __('Done'));
    }
}
