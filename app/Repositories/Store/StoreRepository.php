<?php

namespace App\Repositories\Store;

use Illuminate\Support\Facades\DB;

class StoreRepository implements StoreInterface
{

    public function __construct(private \App\Models\Store$model)
    {
        $this->model = $model;

    }

    public function all($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }
            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }

            }
            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }

            if ($request->company_id) {
                $q->where('company_id', $request->parent_id);
            }
            if ($request->branch_id) {
                $q->where('branch_id', $request->parent_id);
            }

        })->with('branch')->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

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
        DB::transaction(function () use ($request) {
            $this->model->create($request->all());
            cacheForget("stores");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {

            $this->model->where("id", $id)->update($request->all());

            $this->forget($id);

        });

    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
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
            "stores",
            "stores_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
