<?php

namespace App\Http\Controllers\SalesmenType;

use App\Http\Requests\SalesmenType\StoreSalesmenTypeRequest;
use App\Http\Requests\SalesmenType\UpdateSalesmenTypeRequest;
use App\Http\Resources\SalesmenType\SalesmenTypeResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SalesmenTypeController extends Controller
{
    public function __construct(private \App\Repositories\SalesmenType\SalesmenTypeInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('salesmen_types_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('salesmen_types_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new SalesmenTypeResource($model));
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('salesmen_types');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('salesmen_types', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', SalesmenTypeResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreSalesmenTypeRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateSalesmenTypeRequest $request, $id)
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

    public function bulkDelete(Request $request)
    {
        if ($request->ids == null) {
            return responseJson(400, __('message.data not found'));
        }
        foreach ($request->ids as $id) {
            $model = $this->modelInterface->find($id);

            $arr = [];
            if ($model) {
                if ($model->hasChildren()) {
                    $arr[] = $id;
                    continue;
                }
                $this->modelInterface->delete($id);}
        }
        if (count($arr) > 0) {
            return responseJson(400, __("this item has children and can't be deleted remove it's children first"));
        }
        return responseJson(200, 'success');
    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        if ($model->hasChildren()) {
            return responseJson(400, __("this item has children and can't be deleted remove it's children first"));
        }

        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

}
