<?php

namespace Modules\Archiving\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Modules\Archiving\Http\Requests\DocStatusRequest;
use Modules\Archiving\Repositories\DocStatusInterface;
use Modules\Archiving\Transformers\DocStatusResource;

class DocStatusController extends Controller
{
    private $modelInterface;
    public function __construct(DocStatusInterface $modelInterface) {
        $this->modelInterface = $modelInterface;
    }

    public function all(Request $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('archDocStatus');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('archDocStatus', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', DocStatusResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(DocStatusRequest $request)
    {
        $this->modelInterface->create($request);
        return responseJson(200, 'success');
    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, 'data not found');
        }
        $this->modelInterface->delete($id);

        return responseJson(200, 'success');
    }

    public function bulkDelete(Request $request)
    {
        foreach ($request->ids as $id) {
            $this->modelInterface->delete($id);
        }
        return responseJson(200, __('Done'));
    }

    public function update(DocStatusRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, 'data not found');
        }
        $this->modelInterface->update($request, $id);
        return responseJson(200, 'success');
    }
}
