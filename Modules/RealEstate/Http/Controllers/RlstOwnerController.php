<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Requests\AllRequest;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Entities\RlstOwner;
use Modules\RealEstate\Http\Requests\CreateRlstOwnerRequest;
use Modules\RealEstate\Transformers\RlstOwnerResource;

class RlstOwnerController extends Controller
{

    public function __construct(private RlstOwner $model)
    {
        $this->model = $model;
    }


    public function find($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        return responseJson(200, 'success', new RlstOwnerResource($model));
    }


    public function all(AllRequest $request)
    {
        $models = $this->model->search($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }


        return responseJson(200, 'success', RlstOwnerResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function create(CreateRlstOwnerRequest $request)
    {
        $model = $this->model->create($request->validated());

        return responseJson(200, 'created', new RlstOwnerResource($model));
    }


    public function update($id, CreateRlstOwnerRequest $request)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->update($request->validated());

        return responseJson(200, 'updated', new RlstOwnerResource($model));
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