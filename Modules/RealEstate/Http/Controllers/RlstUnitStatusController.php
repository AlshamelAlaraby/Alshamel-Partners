<?php

namespace Modules\RealEstate\Http\Controllers;

use App\Http\Requests\AllRequest;
use Illuminate\Routing\Controller;
use Modules\RealEstate\Entities\RlstUnitStatus;
use Modules\RealEstate\Http\Requests\RlstUnitStatusRequest;
use Modules\RealEstate\Transformers\RlstUnitStatusResource;

class RlstUnitStatusController extends Controller
{

    public function __construct(private RlstUnitStatus $model)
    {
        $this->model = $model;
    }

    public function find($id)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        return responseJson(200, 'success', new RlstUnitStatusResource($model));
    }

    public function all(AllRequest $request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            $models = ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            $models = ['data' => $models->get(), 'paginate' => false];
        }

        return responseJson(200, 'success', RlstUnitStatusResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(RlstUnitStatusRequest $request)
    {
        $model = $this->model->create($request->validated());
        if ($request->is_default) {
            $this->model->where('id', '!=', $model->id)->update(['is_default' => 0]);
        }
        $model->refresh();

        return responseJson(200, 'created', new RlstUnitStatusResource($model));
    }

    public function update($id, RlstUnitStatusRequest $request)
    {
        $model = $this->model->find($id);
        if (!$model) {
            return responseJson(404, 'not found');
        }

        $model->update($request->validated());
        if ($request->is_default) {
            $this->model->where('id', '!=', $model->id)->update(['is_default' => 0]);
        }
        $model->refresh();
        return responseJson(200, 'updated', new RlstUnitStatusResource($model));
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
        if ($model->units()->count() > 0) {
            return responseJson(400, 'this status is used in units');
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
        if (count($ids) != $models->count()) {
            return responseJson(400, 'some ids are not found');
        }
        foreach ($models as $model) {
            if ($model->units()->count() > 0) {
                return responseJson(400, 'this status is used in units');
            }
        }
        $this->model->whereIn('id', $ids)->delete();
        return responseJson(200, 'deleted');
    }
}
