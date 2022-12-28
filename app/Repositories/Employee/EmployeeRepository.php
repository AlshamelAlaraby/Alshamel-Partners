<?php

namespace App\Repositories\Employee;

use App\Models\Employee;
use App\Models\UserSettingScreen;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class EmployeeRepository implements EmployeeInterface
{

    public function __construct(private Employee $model, private Media $media, private UserSettingScreen $setting)
    {
        $this->model = $model;
        $this->media = $media;
        $this->setting = $setting;

    }

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
        DB::transaction(function () use ($request) {
            $model = $this->model->create($request->all());

            cacheForget("employees");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $model = $this->model->find($id);
            $model->update($request->except(["media"]));

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
            "employees",
            "employees_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
