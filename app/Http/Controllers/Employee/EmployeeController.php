<?php

namespace App\Http\Controllers\Employee;

use App\Http\Requests\Employee\StoreEmployeeRequest;
use App\Http\Requests\Employee\UpdateEmployeeRequest;
use App\Http\Resources\Employee\EmployeeResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class EmployeeController extends Controller
{
    public function __construct(private \App\Repositories\Employee\EmployeeInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('employees_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('employees_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new EmployeeResource($model));
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('employees');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('employees', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', EmployeeResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreEmployeeRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateEmployeeRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->update($request, $id);

        return responseJson(200, 'success');
    }

    public function setting(Request $request)
    {
        $model = $this->modelInterface->setting($request);

        return responseJson(200, 'success');

    }

    public function getSetting($user_id, $screen_id)
    {
        $model = $this->modelInterface->getSetting($user_id, $screen_id);
        return responseJson(200, 'success', new \App\Http\Resources\ScreenSetting\ScreenSettingResource($model));
    }
    public function logs($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        $logs = $this->modelInterface->logs($id);
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));

    }
    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

}
