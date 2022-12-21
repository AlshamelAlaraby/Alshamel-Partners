<?php

namespace App\Http\Controllers\InternalSalesman;

use App\Http\Controllers\Controller;
use App\Http\Requests\InternalSalesman\CreateInternalSalesmanRequest;
use App\Http\Requests\InternalSalesman\EditInternalSalesmanRequest;
use App\Http\Requests\Serial\CreateSerialRequest;
use App\Http\Requests\Serial\EditSerialRequest;
use App\Http\Resources\InternalSalesman\InternalSalesmanResource;
use App\Http\Resources\Serials\SerialResource;
use App\Repositories\InternalSalesman\InternalSalesmanRepositoryInterface;
use App\Repositories\Serial\SerialRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InternalSalesmanController extends Controller
{
    public $repository;
    public $resource = InternalSalesmanResource::class;
    public function __construct(InternalSalesmanRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \response
     */
    public function index(Request $request)
    {

        $serials = cacheGet('InternalSalesman');
        if ($request->search || $request->is_active) {
            cacheForget('InternalSalesman');
            $serials = $this->repository->all($request);
        }
        if (!$serials) {
            $serials = $this->repository->all($request);
            cachePut('InternalSalesman', $serials);
        }

        return responseJson(200, 'success', ($this->resource)::collection($serials['data']), $serials['paginate'] ? getPaginates($serials['data']) : null);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \response
     */
    public function store(CreateInternalSalesmanRequest $request)
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
    public function update(EditInternalSalesmanRequest $request, $id)
    {
        $data = $request->validated ();
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
}
