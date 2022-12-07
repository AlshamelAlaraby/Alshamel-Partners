<?php

namespace App\Http\Controllers\Avenue;

use App\Http\Requests\AllRequest;
use App\Http\Requests\Avenue\StoreAvenueRequest;
use App\Http\Requests\Avenue\UpdateAvenueRequest;
use App\Http\Resources\Avenue\AvenueResource;
use Illuminate\Routing\Controller;

class AvenueController extends Controller
{
    public function __construct(private \App\Repositories\Avenue\AvenueInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('avenues_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('avenues_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new AvenueResource($model));
    }

    public function all(AllRequest $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('avenues');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('avenues', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', AvenueResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreAvenueRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateAvenueRequest $request, $id)
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

    // public function addAvenueToCompany($module_id, $company_id)
    // {
    //     $model = $this->modelInterface->find($module_id);

    //     if (!$model) {
    //         return responseJson(404, __('message.data not found'));
    //     }

    //     $this->modelInterface->addAvenueToCompany($module_id, $company_id);
    //     return responseJson(200, 'success');
    // }

    // public function removeAvenueFromCompany($module_id, $company_id)
    // {
    //     $model = $this->modelInterface->find($module_id);
    //     if (!$model) {
    //         return responseJson(404, __('message.data not found'));
    //     }

    //     $this->modelInterface->removeAvenueFromCompany($module_id, $company_id);
    //     return responseJson(200, 'success');
    // }

}
