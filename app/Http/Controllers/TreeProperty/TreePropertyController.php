<?php

namespace App\Http\Controllers\TreeProperty;

use App\Http\Requests\TreeProperty\CreateTreePropertyRequest;
use App\Http\Requests\TreeProperty\EditTreePropertyRequest;
use App\Http\Requests\Unit\StoreUnitRequest;
use App\Http\Requests\Unit\UpdateUnitRequest;
use App\Http\Resources\TreeProperty\TreePropertyResource;
use App\Http\Resources\Unit\UnitResource;
use App\Repositories\TreeProperty\TreePropertyRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class TreePropertyController extends Controller
{
    private $modelInterface;
    public function __construct(TreePropertyRepositoryInterface $modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function show($id)
    {
        $model = cacheGet('tree_properties_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('tree_properties_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new UnitResource($model));
    }

    public function index(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('tree_properties');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('tree_properties', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', TreePropertyResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function store(CreateTreePropertyRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(EditTreePropertyRequest $request, $id)
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
