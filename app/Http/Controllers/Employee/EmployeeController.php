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

        if ($model->hasChildren()) {
            return responseJson(400,__("this item has children and can't be deleted remove it's children first"));
        }

        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $model = $this->modelInterface->find($id);
            $arr = [];
            if ($model->hasChildren()) {
                $arr[] = $id;
                continue;
            }
            $this->modelInterface->delete($id);
        }
        if (count($arr) > 0) {
            return responseJson(400, __('some items has relation cant delete'));
        }
        return responseJson(200, __('Done'));
    }

}
