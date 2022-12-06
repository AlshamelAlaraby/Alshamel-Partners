<?php


namespace App\Repositories\Serial;







use App\Models\Branch;
use App\Models\Serial;
use Illuminate\Support\Facades\DB;

class SerialRepository implements SerialRepositoryInterface
{
    public $model;
    public function __construct(Serial $model){
        $this->model = $model;
    }
    public function getAll ($request)
    {
        $models = $this->model->where(function ($q) use ($request) {

            if ($request->search) {
                $q->where('perfix', 'like', '%' . $request->search . '%');
                $q->orWhere('suffix', 'like', '%' . $request->search . '%');
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

    public function create(array $data){
        DB::transaction(function () use ($data) {
            $this->model->create($data);
            cacheForget("serials");
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
            "serials",
            "serials_" . $id,
        ];
        foreach ($keys as $key) {
            cacheForget($key);
        }

    }
}
