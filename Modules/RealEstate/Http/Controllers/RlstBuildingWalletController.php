<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Requests\AllRequest;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Entities\RlstBuildingWallet;
use Modules\RealEstate\Http\Requests\CreateRlstBuildingWalletRequest;
use Modules\RealEstate\Http\Requests\UpdateRlstBuildingWalletRequest;
use Modules\RealEstate\Transformers\RlstBuildingWalletResource;

class RlstBuildingWalletController extends Controller
{

    public function __construct(private RlstBuildingWallet $model)
    {
        $this->model = $model;
    }

    public function find($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        return responseJson(200, 'success', new RlstBuildingWalletResource($model));
    }

    public function all(AllRequest $request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }

        return responseJson(200, 'success', RlstBuildingWalletResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(CreateRlstBuildingWalletRequest $request)
    {
        $model = $this->model->create($request->validated());

        return responseJson(200, 'created', new RlstBuildingWalletResource($model));

    }

    public function update($id, UpdateRlstBuildingWalletRequest $request)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->update($request->validated());
        $model->refresh();

        return responseJson(200, 'updated', new RlstBuildingWalletResource($model));
    }

    public function logs($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $logs = $model->activities()->orderBy('created_at', 'DESC')->get();
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));
    }

    public function delete($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }
        $model->delete();
        return responseJson(200, 'deleted');
    }
}