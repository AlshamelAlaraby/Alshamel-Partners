<?php

namespace App\Http\Controllers\InternalSalesman;

use App\Http\Controllers\Controller;
use App\Repositories\InternalSalesman\InternalSalesmanRepositoryInterface;
use App\Http\Resources\InternalSalesman\InternalSalesmanResource;
use App\Http\Requests\InternalSalesman\StoreInternalSalesmanRequest;
use App\Http\Requests\InternalSalesman\UpdateInternalSalesmanRequest;
use App\Http\Resources\ScreenSetting\ScreenSettingResource;
use Mockery\Exception;
use Illuminate\Http\Request;

class InternalSalesmanController extends Controller
{
    protected $repository;
    protected $resource = InternalSalesmanResource::class;


    public function __construct(InternalSalesmanRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('InternalSalesmen');

            if (!$models) {
                $models = $this->repository->getAllInternalSalesmen($request);
                cachePut('InternalSalesmen', $models);
            }
        } else {

            $models = $this->repository->getAllInternalSalesmen($request);
        }

        return responseJson(200, 'success', InternalSalesmanResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);

    }


    public function find($id)
    {
        try{
            $model = cacheGet('InternalSalesman_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('InternalSalesman_' . $id, $model);
                }
            }
            return responseJson(200 , __('Done'), new InternalSalesmanResource($model));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function create(StoreInternalSalesmanRequest $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdateInternalSalesmanRequest $request , $id)
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

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $this->repository->delete($id);
        }
        return responseJson(200, __('Done'));
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
