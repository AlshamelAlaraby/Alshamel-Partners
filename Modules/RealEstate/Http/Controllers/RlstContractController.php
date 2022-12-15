<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Requests\AllRequest;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Entities\RlstContract;
use Modules\RealEstate\Transformers\RlstContractResource;
use Modules\RealEstate\Http\Requests\CreateRlstContractRequest;
use Modules\RealEstate\Http\Requests\UpdateRlstContractRequest;

class RlstContractController extends Controller
{

    public function __construct(private RlstContract $model)
    {
        $this->model = $model;
    }


    public function find($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        return responseJson(200, 'success', new RlstContractResource($model));
    }


    public function all(AllRequest $request)
    {
        $models = $this->model->search($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }


        return responseJson(200, 'success', RlstContractResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }


    public function create(CreateRlstContractRequest $request)
    {
        $this->model->create($request->validated());

        return responseJson(200, 'created');
    }


    public function update($id, UpdateRlstContractRequest $request)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->update($request->validated());

        return responseJson(200, 'updated');
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
