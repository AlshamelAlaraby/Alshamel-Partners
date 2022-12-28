<?php

namespace App\Repositories\Avenue;

use App\Models\UserSettingScreen;
use Illuminate\Support\Facades\DB;

class AvenueRepository implements AvenueInterface
{

    public function __construct(private \App\Models\Avenue$model, private UserSettingScreen $setting)
    {}

    public function all($request)
    {
        $models = $this->model->with(["governorate", 'city', 'country'])->filter($request)->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

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

    public function getSetting($user_id, $screen_id)
    {
        return $this->setting->where('user_id', $user_id)->where('screen_id', $screen_id)->first();
    }

    public function logs($id)
    {
        return $this->model->find($id)->activities()->orderBy('created_at', 'DESC')->get();
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
