<?php

namespace App\Repositories\User;

use Illuminate\Support\Facades\DB;

class UserRepository implements UserInterface
{

    public function __construct(private \App\Models\User$model, private \Spatie\MediaLibrary\MediaCollections\Models\Media$media)
    {
        $this->model = $model;
        $this->media = $media;

    }

    public function all($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }

            if ($request->parent_id) {
                $q->where('parent_id', $request->parent_id);
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
            $model = $this->model->create($request->all());
            $this->media::where('id', $request->media)->update([
                'model_id' => $model->id,
                'model_type' => get_class($this->model),
            ]);
            cacheForget("countries");
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $model = $this->model->find($id);
            $model->update($request->except(["media"]));
            if ($request->media) {
                $model->clearMediaCollection('media');

                $this->media::where('id', $request->media)->update([
                    'model_id' => $model->id,
                    'model_type' => get_class($this->model),
                ]);

            }
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
            "countries",
            "countries_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }

}
