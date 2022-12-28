<?php

namespace App\Http\Controllers\RoleWorkflowButton;

use App\Http\Controllers\Controller;
use App\Repositories\RoleWorkflowButton\RoleWorkflowButtonRepositoryInterface;
use App\Http\Resources\RoleWorkflowButton\RoleWorkflowButtonResource;
use App\Http\Requests\RoleWorkflowButton\StoreRoleWorkflowButtonRequest;
use App\Http\Requests\RoleWorkflowButton\UpdateRoleWorkflowButtonRequest;
use App\Http\Resources\ScreenSetting\ScreenSettingResource;
use Mockery\Exception;
use Illuminate\Http\Request;

class RoleWorkflowButtonController extends Controller
{

    protected $repository;
    protected $resource = RoleWorkflowButtonResource::class;


    public function __construct(RoleWorkflowButtonRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('RoleWorkflowButtons');

            if (!$models) {
                $models = $this->repository->getAllRoleWorkflowButtons($request);
                cachePut('RoleWorkflowButtons', $models);
            }
        } else {

            $models = $this->repository->getAllRoleWorkflowButtons($request);
        }

        return responseJson(200, 'success', RoleWorkflowButtonResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);

    }


    public function find($id)
    {
        try{
            $model = cacheGet('RoleWorkflowButtons_' . $id);

            if (!$model) {
                $model = $this->repository->find($id);
                if (!$model) {
                    return responseJson( 404 , __('message.data not found'));
                } else {
                    cachePut('RoleWorkflowButtons_' . $id, $model);
                }
            }
            return responseJson(200 , __('Done'), new RoleWorkflowButtonResource($model));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function create(StoreRoleWorkflowButtonRequest $request)
    {
        try {
            return responseJson(200 , __('Done') , $this->repository->create($request->validated()));
        } catch (Exception $exception) {
            return responseJson( $exception->getCode() , $exception->getMessage());
        }
    }


    public function update(UpdateRoleWorkflowButtonRequest $request , $id)
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
