<?php

namespace App\Repositories\Currency;

use App\Models\Currency;
use Illuminate\Support\Facades\DB;

class CurrencyRepository implements CurrencyRepositoryInterface
{
    public $model;
    public function __construct(Currency $model)
    {
        $this->model = $model;
    }
    public function getAll($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }
            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }
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
        return DB::transaction(function () use ($data) {
            cacheForget("currencies");
            return $this->model->create($data);

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
            if (request()->is_default == 1) {
                $this->model->where('id', '!=', $id)->update(['is_default' => 0]);
            }
            $this->forget($id);
        });
    }

    public function delete($id)
    {
        $model = $this->find($id);
        if ($model) {
            $this->forget($id);
            $model->delete();
        }
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
    }

    private function forget($id)
    {
        $keys = [
            "currencies",
            "currencies_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
