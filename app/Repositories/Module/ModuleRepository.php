<?php

namespace App\Repositories\Module;

use Illuminate\Support\Facades\DB;

class ModuleRepository implements ModuleInterface
{

    public function __construct(private \App\Models\Module$model)
    {
        $this->model = $model;

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
            $this->model->create($request->all());
            cacheForget("modules");
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

    // public function addModuleToCompany($module_id, $company_id)
    // {
    //     $this->model->find($module_id);
    //     $this->model->companies()->attach($company_id);
    // }

    // public function removeModuleFromCompany($module_id, $company_id)
    // {
    //     $this->model->find($module_id);
    //     $this->model->companies()->detach($company_id);
    // }
    private function forget($id)
    {
        $keys = [
            "modules",
            "modules_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
