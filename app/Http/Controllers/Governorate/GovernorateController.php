<?php

namespace App\Http\Controllers\Governorate;

use App\Http\Requests\AllRequest;
use App\Http\Requests\Governorate\StoreGovernorateRequest;
use App\Http\Requests\Governorate\UpdateGovernorateRequest;
use App\Http\Resources\Governorate\GovernorateResource;
use Illuminate\Routing\Controller;

class GovernorateController extends Controller
{
    public function __construct(private \App\Repositories\Governorate\GovernorateInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('governorates_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('governorates_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new GovernorateResource($model));
    }

    public function all(AllRequest $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('governorates');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('governorates', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', GovernorateResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreGovernorateRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateGovernorateRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $model = $this->modelInterface->update($request, $id);

        return responseJson(200, 'success');
    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        if ($model->have_children) {
            return responseJson(400, __('message.parent have children'));
        }
        $this->modelInterface->delete($id);

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

    // public function addGovernorateToCompany($module_id, $company_id)
    // {
    //     $model = $this->modelInterface->find($module_id);

    //     if (!$model) {
    //         return responseJson(404, __('message.data not found'));
    //     }

    //     $this->modelInterface->addGovernorateToCompany($module_id, $company_id);
    //     return responseJson(200, 'success');
    // }

    // public function removeGovernorateFromCompany($module_id, $company_id)
    // {
    //     $model = $this->modelInterface->find($module_id);
    //     if (!$model) {
    //         return responseJson(404, __('message.data not found'));
    //     }

    //     $this->modelInterface->removeGovernorateFromCompany($module_id, $company_id);
    //     return responseJson(200, 'success');
    // }

}
