<?php

namespace App\Repositories\Governorate;

use Illuminate\Support\Facades\DB;

class GovernorateRepository implements GovernorateInterface
{

    public function __construct(private \App\Models\Governorate$model)
    {}

    public function all($request)
    {
        $models = $this->model->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {
      return  DB::transaction(function () use ($request) {
          $model=  $this->model->create($request->all());
            if ($request->is_default == 1) {
                $this->model->where('id', '!=', $model->id)->update(['is_default' => 0]);
            }
            cacheForget("governorates");
            return $model;
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $this->model->where("id", $id)->update($request->all());
            if ($request->is_default == 1) {
                $this->model->where('id', '!=', $id)->update(['is_default' => 0]);
            }
            $this->forget($id);

        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    private function forget($id)
    {
        $keys = [
            "governorates",
            "governorates_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
