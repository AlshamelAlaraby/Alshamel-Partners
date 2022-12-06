<?php

namespace App\Http\Controllers\Serials;

use App\Http\Controllers\ResponseController;
use App\Http\Requests\Serial\CreateSerialRequest;
use App\Http\Requests\Serial\EditSerialRequest;
use App\Http\Resources\Roles\RoleResource;
use App\Repositories\Role\RoleRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RoleController extends ResponseController
{
    public $repository;
    public $resource = RoleResource::class;
    public function __construct(RoleRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \response
     */
    public function index(Request $request)
    {

        $data = cacheGet('roles');
        if ($request->search || $request->roletype_id) {
            cacheForget('roles');
            $data = $this->repository->getAll($request);
        }
        if (!$data) {
            $data = $this->repository->getAll($request);
            cachePut('roles', $data);
        }

        return responseJson(200, 'success', ($this->resource)::collection($data['data']), $data['paginate'] ? getPaginates($data['data']) : null);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateSerialRequest $request)
    {
        try {
            if (!DB::table('role_types')->find($request->roletype_id)) {
                return $this->errorResponse(__('role_type does\'t exist'), 422);
            }
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
        if ($data = $this->repository->find($id)) {
            return responseJson(200, __('Done'), new $this->resource($data), 200);
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
        if ($request->roletype_id) {
            if (!DB::table('role_types')->find($request->roletype_id)) {
                return responseJson(422, __('role_type does\'t exist'));
            }
            $data['roletype_id'] = $request->roletype_id;
        }

        try {
            $this->repository->update($data, $id);
            return responseJson(200, __('updated'));
        } catch (\Exception$exception) {
            return responseJson($exception->getCode(), $exception->getMessage());
        }
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
}
