<?php

namespace App\Http\Controllers\Salesman;

use App\Http\Controllers\Controller;
use App\Repositories\Salesman\SalesmanRepositoryInterface;
use App\Http\Resources\Salesman\SalesmanResource;
use App\Http\Requests\Salesman\StoreSalesmanRequest;
use App\Http\Requests\Salesman\UpdateSalesmanRequest;
use App\Http\Resources\ScreenSetting\ScreenSettingResource;
use Mockery\Exception;
use Illuminate\Http\Request;

class SalesmanController extends Controller
{

    protected $repository;
    protected $resource = SalesmanResource::class;


    public function __construct(SalesmanRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('Salesmans');

            if (!$models) {
                $models = $this->repository->getAllSalesmans($request);
                cachePut('Salesmans', $models);
            }
        } else {

            $models = $this->repository->getAllSalesmans($request);
        }

        // return responseJson(200, 'success', SalesmanResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
        return responseJson(200, 'success',$models);

    }


    public function find($id)
    {
        try{
            $model = cacheGet('Salesmans_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('Salesmans_' . $id, $model);
                }
            }
            return responseJson(200 , __('Done'), new SalesmanResource($model));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function create(StoreSalesmanRequest $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdateSalesmanRequest $request , $id)
    {
        try {
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson( 404 , __('message.data not found'));
            }
            $model = $this->repository->update($request->validated(), $id);

            return  responseJson(200 , __('Done'));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }

    }

    public function delete($id)
    {
        try{
            $model = $this->repository->find($id);
            if (!$model) {
                return responseJson( 404 , __('message.data not found'));
            }
            $this->repository->delete($id);
            return  responseJson(200 , __('Done'));

        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
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


    public function screenSetting(Request $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->setting($request->all()));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }

    public function getScreenSetting($user_id , $screen_id)
    {
        try{
            $screenSetting = $this->repository->getSetting($user_id , $screen_id);
            if (!$screenSetting) {
                return responseJson( 404 , __('message.data not found'));
            }
            return responseJson( 200 , __('Done'), new ScreenSettingResource( $screenSetting ));
        } catch (Exception $exception) {
            return  responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


}
