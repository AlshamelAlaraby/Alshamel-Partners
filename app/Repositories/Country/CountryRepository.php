<?php

namespace App\Repositories\Country;

use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class CountryRepository implements CountryInterface
{

    public function __construct(private \App\Models\Country$model, private \Spatie\MediaLibrary\MediaCollections\Models\Media$media)
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

            if ($request->governorate_id) {
                $q->whereHas('governorates', function ($q) use ($request) {
                    $q->where('id', $request->governorate_id);
                });
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

    public function find($id)
    {
        return $this->model->find($id);
    }

    public function create($request)
    {
        return DB::transaction(function () use ($request) {
            $model = $this->model->create($request->all());
            if ($request->media) {
                foreach ($request->media as $media) {
                    $this->media::where('id', $media)->update([
                        'model_id' => $model->id,
                        'model_type' => get_class($this->model),
                    ]);
                }
            }
            cacheForget("countries");
            return $model;
        });
    }

    public function update($request, $id)
    {
        DB::transaction(function () use ($id, $request) {
            $model = $this->model->find($id);
            $model->update($request->except(["media"]));
            if ($request->media && !$request->old_media) { // if there is new media and no old media
                $model->clearMediaCollection('media');
                foreach ($request->media as $media) {
                    uploadImage($media, [
                        'model_id' => $model->id,
                        'model_type' => get_class($this->model),
                    ]);
                }
            }

            if ($request->old_media && !$request->media) { // if there is old media and no new media
                $model->media->whereNotIn('id', $request->old_media)->each(function (Media $media) {
                    $media->delete();
                });
            }

            if ($request->old_media && $request->media) { // if there is old media and new media
                $model->media->whereNotIn('id', $request->old_media)->each(function (Media $media) {
                    $media->delete();
                });
                foreach ($request->media as $image) {
                    uploadImage($image, [
                        'model_id' => $model->id,
                        'model_type' => get_class($this->model),
                    ]);
                }
            }
            if (!$request->old_media && !$request->media) { // if this is no old media and new media
                $model->clearMediaCollection('media');
            }
            if ($request->is_default == 1) {
                $this->model->where('id', '!=', $id)->update(['is_default' => 0]);
            }
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
