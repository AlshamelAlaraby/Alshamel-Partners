<?php


namespace App\Repositories\Role;








use App\Models\Role;
use Illuminate\Support\Facades\DB;

class RoleRepository implements RoleRepositoryInterface
{
    public $model;
    public function __construct(Role $model){
        $this->model = $model;
    }
    public function getAll ($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->roletype_id) {
                $q->where('roletype_id', $request->roletype_id);
            }



        })->orderBy($request->order ? $request->order : 'updated_at', $request->sort ? $request->sort : 'DESC');

        if ($request->per_page) {
            return ['data' => $models->paginate($request->per_page), 'paginate' => true];
        } else {
            return ['data' => $models->get(), 'paginate' => false];
        }
    }

    public function create(array $data){
        DB::transaction(function () use ($data) {
            $this->model->create($data);
            cacheForget("roles");
        });
    }

    public function find($id){
        return $this->model->find($id);
    }

    public function update($data,$id){
        DB::transaction(function () use ($id, $data) {
            $this->model->where("id", $id)->update($data);
            $this->forget($id);
        });
    }

    public function delete($id){
        $model = $this->find($id);
        if ($model){
            $this->forget($id);
            $model->delete();
        }
    }

    private function forget($id)
    {
        $keys = [
            "roles",
            "roles_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
