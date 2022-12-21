<?php

namespace App\Repositories\InternalSalesman;

use App\Models\InternalSalesman;
use App\Models\Serial;
use App\Models\UserSettingScreen;
use Illuminate\Support\Facades\DB;

class InternalSalesmanRepository implements InternalSalesmanRepositoryInterface
{
    public $model;
    private $setting;
    public function __construct(InternalSalesman $model, UserSettingScreen $setting)
    {
        $this->model = $model;
        $this->setting = $setting;
    }

    public function all ($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('employee_id', 'like', '%' . $request->search . '%');
                $q->orWhere('is_active', 'like', '%' . $request->search . '%');
            }

            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }

            }
            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
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
            cacheForget("InternalSalesman");
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

    public function setting($request)
    {

        DB::transaction(function () use ($request) {

            $model = $this->setting->where('user_id', $request['user_id'])->where('screen_id', $request['screen_id'])->first();

            $request['data_json'] = json_encode($request['data_json']);

            if (!$model) {
                $this->setting->create($request->all());
            } else {

                $model->update($request->all());
            }

        });
    }

    public function getSetting($user_id, $screen_id)
    {

        return $this->setting->where('user_id', $user_id)->where('screen_id', $screen_id)->first();
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
            "InternalSalesman",
            "InternalSalesman_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
