<?php

namespace Modules\RecievablePayable\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\RecievablePayable\Http\Requests\CreateRpInstallmentPaymentTypeRequest;
use Modules\RecievablePayable\Http\Requests\EditRpInstallmentPaymentTypeRequest;
use Modules\RecievablePayable\Repositories\RpInstallmentPaymentTypeRepositoryInterface;
use Modules\RecievablePayable\Transformers\RpInstallmentPaymentTypeResource;

class RpInstallmentPaymentTypeController extends Controller
{
    private $modelInterface;
    public function __construct(RpInstallmentPaymentTypeRepositoryInterface $modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function show($id)
    {
        $model = cacheGet('RpInstallmentPaymentType_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('RpInstallmentPaymentType_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new RpInstallmentPaymentTypeResource($model));
    }

    public function index(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('RpInstallmentPaymentType');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('RpInstallmentPaymentType', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', RpInstallmentPaymentTypeResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function store(CreateRpInstallmentPaymentTypeRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(EditRpInstallmentPaymentTypeRequest $request, $id)
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

    public function destroy($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }
}
