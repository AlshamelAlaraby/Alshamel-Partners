<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Requests\AllRequest;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Entities\RlstWallet;
use Modules\RealEstate\Http\Requests\RlstWalletRequest;
use Modules\RealEstate\Http\Requests\UpdateRlstWalletRequest;
use Modules\RealEstate\Transformers\RlstWalletResource;

class RlstWalletController extends Controller
{

    public function __construct(private RlstWallet $model)
    {
        $this->model = $model;
    }

    public function find($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        return responseJson(200, 'success', new RlstWalletResource($model));
    }

    public function all(AllRequest $request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }

        return responseJson(200, 'success', RlstWalletResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(RlstWalletRequest $request)
    {
        $model = $this->model->create($request->validated());
        $model->refresh();

        return responseJson(200, 'created', new RlstWalletResource($model));
    }

    public function update($id, RlstWalletRequest $request)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->update($request->validated());
        $model->refresh();

        return responseJson(200, 'updated', new RlstWalletResource($model));
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
        if ($model->walletOwner()->count() > 0 || $model->buildingWallet()->count() > 0) {
            return responseJson(400, 'this wallet is used in another place');
        }

        $model->delete();
        return responseJson(200, 'deleted');
    }


    public function bulkDelete()
    {
        $ids = request()->ids;
        if (!$ids) {
            return responseJson(400, 'ids is required');
        }
        $models = $this->model->whereIn('id', $ids)->get();
        if ($models->count() != count($ids)) {
            return responseJson(400, 'some ids are not found');
        }
        foreach ($models as $model) {
            if ($model->walletOwner()->count() > 0 || $model->buildingWallet()->count() > 0) {
                return responseJson(400, 'some wallets are used in another place');
            }
        }

        $this->model->whereIn('id', $ids)->delete();
        return responseJson(200, 'deleted');
    }
}
