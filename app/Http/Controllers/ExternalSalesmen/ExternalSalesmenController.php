<?php

namespace App\Http\Controllers\ExternalSalesmen;

use App\Http\Requests\ExternalSalesmen\StoreExternalSalesmenRequest;
use App\Http\Requests\ExternalSalesmen\UpdateExternalSalesmenRequest;
use App\Http\Resources\ExternalSalesmen\ExternalSalesmenResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ExternalSalesmenController extends Controller
{
    public function __construct(private \App\Repositories\ExternalSalesmen\ExternalSalesmenInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('external_salesmen_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('external_salesmen_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new ExternalSalesmenResource($model));
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('external_salesmen');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('external_salesmen', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', ExternalSalesmenResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreExternalSalesmenRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateExternalSalesmenRequest $request, $id)
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

        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

}
