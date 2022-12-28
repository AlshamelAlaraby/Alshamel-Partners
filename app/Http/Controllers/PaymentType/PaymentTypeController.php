<?php

namespace App\Http\Controllers\PaymentType;

use App\Http\Requests\PaymentType\StorePaymentTypeRequest;
use App\Http\Requests\PaymentType\UpdatePaymentTypeRequest;
use App\Http\Resources\PaymentType\PaymentTypeResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PaymentTypeController extends Controller
{
    public function __construct(private \App\Repositories\PaymentType\PaymentTypeInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('payment_types_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('payment_types_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new PaymentTypeResource($model));
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('payment_types');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('payment_types', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', PaymentTypeResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StorePaymentTypeRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdatePaymentTypeRequest $request, $id)
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

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $this->modelInterface->delete($id);
        }
        return responseJson(200, __('Done'));
    }

}
