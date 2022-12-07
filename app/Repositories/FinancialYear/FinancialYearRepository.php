<?php

namespace App\Repositories\FinancialYear;

use Illuminate\Support\Facades\DB;

class FinancialYearRepository implements FinancialYearInterface
{

    public function __construct(private \App\Models\FinancialYear$model)
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

            if ($request->start_date && $request->end_date) {
                $q->whereBetween('start_date', [$request->start_date, $request->end_date]);
            }

            if ($request->start_date && !$request->end_date) {
                $q->where('start_date', '>=', $request->start_date);
            }

            if (!$request->start_date && $request->end_date) {
                $q->where('start_date', '<=', $request->end_date);
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
        return $this->model->find($id);
    }

    public function create($request)
    {
        DB::transaction(function () use ($request) {
            $this->model->create($request->all());
            cacheForget("financial-years");
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
            "financial-years",
            "financial-years_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
