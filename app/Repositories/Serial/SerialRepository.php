<?php

namespace App\Repositories\Serial;

use App\Models\Serial;
use Illuminate\Support\Facades\DB;

class SerialRepository implements SerialRepositoryInterface
{

    private $model;
    public function __construct(Serial $model)
    {
        $this->model = $model;

    }

    public function getAllSerials($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }

        })->latest();

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
            cacheForget("serials");
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
            "serials",
            "serials_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
