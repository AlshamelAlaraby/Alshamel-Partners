<?php

namespace Modules\RealEstate\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Http\Requests\CreateRlstBuildingRequest;
use Modules\RealEstate\Http\Requests\CreateRlstUnitRequest;
use Modules\RealEstate\Http\Requests\CreateRlstUnitStatusRequest;
use Modules\RealEstate\Http\Requests\EditRlstBuildingRequest;
use Modules\RealEstate\Http\Requests\EditRlstUnitRequest;
use Modules\RealEstate\Http\Requests\EditRlstUnitStatusRequest;
use Modules\RealEstate\Repositories\RlstBuildingRepositoryInterface;
use Modules\RealEstate\Repositories\RlstUnitRepositoryInterface;
use Modules\RealEstate\Repositories\RlstUnitStatusRepositoryInterface;
use Modules\RealEstate\Transformers\RlstBuildingResource;
use Modules\RealEstate\Transformers\RlstUnitResource;
use Modules\RealEstate\Transformers\RlstUnitStatusResource;

class RlstUnitStatusController extends Controller
{
    private $modelInterface;
    public function __construct(RlstUnitStatusRepositoryInterface $modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function show($id)
    {
        $model = cacheGet('rlst_unit_statuses_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('rlst_unit_statuses_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new RlstUnitStatusResource($model));
    }

    public function index(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('rlst_unit_statuses');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('rlst_unit_statuses', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', RlstUnitStatusResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function store(CreateRlstUnitStatusRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(EditRlstUnitStatusRequest $request, $id)
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
