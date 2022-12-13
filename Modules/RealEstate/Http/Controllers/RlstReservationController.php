<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Resources\ScreenSetting\ScreenSettingResource;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Http\Requests\RlstReservation\StoreRlstReservationRequest;
use Modules\RealEstate\Http\Requests\RlstReservation\UpdateRlstReservationRequest;
use Modules\RealEstate\Repositories\RlstReservation\RlstReservationRepositoryInterface;
use Modules\RealEstate\Transformers\RlstReservationResource;

class RlstReservationController extends Controller
{

    protected $repository;
    protected $resource = RlstReservationResource::class;


    public function __construct(RlstReservationRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('RlstReservations');

            if (!$models) {
                $models = $this->repository->getAllRlstReservations($request);
                cachePut('RlstReservations', $models);
            }
        } else {

            $models = $this->repository->getAllRlstReservations($request);
        }

        return responseJson(200, 'success', RlstReservationResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);

    }


    public function find($id)
    {
        try{
            $model = cacheGet('RlstReservations_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('RlstReservations_' . $id, $model);
                }
            }
            return responseJson(200 , __('Done'), new RlstReservationResource($model));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function create(StoreRlstReservationRequest $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdateRlstReservationRequest $request , $id)
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
