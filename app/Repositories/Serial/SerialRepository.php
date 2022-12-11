<?php

namespace App\Repositories\Serial;

use App\Models\Serial;
use App\Models\UserSettingScreen;
use Illuminate\Support\Facades\DB;

class SerialRepository implements SerialRepositoryInterface
{
    public $model;
    public function __construct(Serial $model, private UserSettingScreen $setting)
    {
        $this->model = $model;
        $this->setting = $setting;
    }
    public function getAll($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('perfix', 'like', '%' . $request->search . '%');
                $q->orWhere('suffix', 'like', '%' . $request->search . '%');
            }

            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }

            }
            if ($request->is_active) {
                $q->where('is_default', $request->is_default);
            }
            if ($request->start_no) {
                $q->where('start_no', $request->start_no);
            }

            if ($request->restart_period) {
                $q->where('restart_period', $request->restart_period);
            }

            if ($request->company_id) {
                $q->where('company_id', $request->company_id);
            }
            if ($request->branch_id) {
                $q->where('branch_id', $request->branch_id);
            }
            if ($request->store_id) {
                $q->where('store_id', $request->store_id);
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
            cacheForget("serials");
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
            "serials",
            "serials_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
