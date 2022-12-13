<?php

namespace Modules\RealEstate\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Http\Requests\CreateRlstBuildingRequest;
use Modules\RealEstate\Http\Requests\CreateRlstUnitRequest;
use Modules\RealEstate\Http\Requests\EditRlstBuildingRequest;
use Modules\RealEstate\Http\Requests\EditRlstUnitRequest;
use Modules\RealEstate\Repositories\RlstBuildingRepositoryInterface;
use Modules\RealEstate\Repositories\RlstUnitRepositoryInterface;
use Modules\RealEstate\Transformers\RlstBuildingResource;
use Modules\RealEstate\Transformers\RlstUnitResource;

class RlstUnitController extends Controller
{
    private $modelInterface;
    public function __construct(RlstUnitRepositoryInterface $modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function show($id)
    {
        $model = cacheGet('rlst_units_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('rlst_units_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new RlstUnitResource($model));
    }

    public function index(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('rlst_units');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('rlst_units', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', RlstUnitResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function store(CreateRlstUnitRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(EditRlstUnitRequest $request, $id)
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
