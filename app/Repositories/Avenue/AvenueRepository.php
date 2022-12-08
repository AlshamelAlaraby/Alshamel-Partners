<?php

namespace App\Repositories\Avenue;

use Illuminate\Support\Facades\DB;

class AvenueRepository implements AvenueInterface
{

    public function __construct(private \App\Models\Avenue$model)
    {
        $this->model = $model;

    }

    public function all($request)
    {
        $models = $this->model->with(["governorate", 'city', 'country'])->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }

            if ($request->country_id) {
                $q->where('country_id', $request->country_id);
            }

            if ($request->city_id) {
                $q->where('city_id', $request->city_id);
            }

            if ($request->governorate_id) {
                $q->where('governorate_id', $request->governorate_id);
            }

        })->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function find($id)
    {
        return $this->model->with(["governorate", 'city', 'country'])->find($id);
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {
            $this->model->create($request->all());

            cacheForget("avenues");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $this->model->where("id", $id)->update($request->all());
            $this->forget($id);

        });

    }

    public function delete($id)
    {
        $model = $this->find($id);
        $this->forget($id);
        $model->delete();
    }

    private function forget($id)
    {
        $keys = [
            "avenues",
            "avenues_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}