<?php

namespace App\Http\Controllers\City;





use App\Http\Controllers\Controller;



use App\Http\Requests\City\CreateCityRequest;
use App\Http\Resources\Branch\BranchResource;
use App\Http\Resources\City\CityResource;
use App\Http\Resources\Module\ModuleResource;
use App\Repositories\Branch\BranchRepositoryInterface;
use App\Repositories\City\CityRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class CityController extends Controller
{
    public $repository;
    public $resource = CityResource::class;
    public function __construct (CityRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     * @return \response
     */
    public function index(Request $request)
    {

        $data = cacheGet ('cities');
        if ($request->search || $request->is_active){
            cacheForget ('cities');
            $data = $this->repository->getAll($request);
        }
        if (!$data){
            $data = $this->repository->getAll($request);
            cachePut('cities', $data);
        }


        return responseJson(200, 'success', ($this->resource)::collection ($data['data']), $data['paginate'] ? getPaginates($data['data']) : null);
    }



    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \response
     */
    public function store(CreateCityRequest $request)
    {
        try {
            if (!DB::table('countries')->find($request->country_id)){
                return responseJson (404,__ ('country does\'t exist'));
            }
            if (!DB::table('governorates')->find($request->governorate_id)){
                return responseJson (404,__ ('governorates does\'t exist'));
            }
            $this->repository->create($request->validated ());
            return responseJson (200,__ ('done'));
        }catch (Exception $exception){
            return responseJson ($exception->getCode (),$exception->getMessage ());
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return \response
     */
    public function show($id)
    {
        if ($branch = $this->repository->find($id)){
            return responseJson(200,__ ('Done'),new $this->resource($branch),200);
        }
        return responseJson (404,__ ('not found'));
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
    public function update(Request $request, $id)
    {

        $data = [];
        if ($request->country_id){
            if (!DB::table('countries')->find($request->country_id)){
                return responseJson(422,__ ('countries does\'t exist'));
            }
            $data['country_id']=$request->country_id;
        }

        if ($request->governorate_id){
            if (!DB::table('governorates')->find($request->governorate_id)){
                return responseJson(422,__ ('governorates does\'t exist'));
            }
            $data['governorate_id']=$request->governorate_id;
        }


        if ($request->name){
            $data['name']=$request->name;
        }

        if ($request->name_e){
            $data['name_e']=$request->name_e;
        }

        if ($request->is_active){
            $data['is_active']=$request->is_active;
        }

        try {
            $this->repository->update($data,$id);
            return responseJson(200,__('updated'));
        }catch (\Exception $exception){
            return responseJson($exception->getCode (),$exception->getMessage ());
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
        return responseJson(200,__('deleted'));
    }
}
