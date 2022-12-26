<?php

namespace App\Repositories\Branch;

use App\Models\Branch;
use Illuminate\Support\Facades\DB;

class BranchRepository implements BranchRepositoryInterface
{
    public $model;
    public function __construct(Branch $model)
    {
        $this->model = $model;
    }
    public function getAllBranches($request)
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

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }
            if ($request->company_id) {
                $q->where('company_id', $request->company_id);
            }

        })->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function create(array $data)
    {
        DB::transaction(function () use ($data) {
            $this->model->create($data);
            cacheForget("branches");
        });
    }

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function update($data, $id)
    {
        DB::transaction(function () use ($id, $data) {
            $this->model->where("id", $id)->update($data);
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
        if ($model) {
            $this->forget($id);
            $model->delete();
        }
    }



    private function forget($id)
    {
        $keys = [
            "branches",
            "branches_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
