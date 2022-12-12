<?php

namespace App\Http\Controllers\Country;

use App\Http\Requests\Country\StoreCountryRequest;
use App\Http\Requests\Country\UpdateCountryRequest;
use App\Http\Resources\Country\CountryResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CountryController extends Controller
{
    public function __construct(private \App\Repositories\Country\CountryInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('countries_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('countries_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new CountryResource($model));
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('countries');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('countries', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', CountryResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreCountryRequest $request)
    {
        $model = $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function update(UpdateCountryRequest $request, $id)
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
        if ($model->governorates()->count() > 0) {
            return responseJson(400, __('message.country has governorates'));
        }

        if ($model->avenues()->count) {
            $this->modelInterface->delete($id);
        }

        return responseJson(200, 'success');
    }

}
