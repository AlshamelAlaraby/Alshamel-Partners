<?php

namespace App\Http\Controllers\User;

use App\Http\Requests\AllRequest;
use App\Http\Requests\User\StoreUserRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Http\Resources\User\UserResource;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    public function __construct(private \App\Repositories\User\UserInterface$modelInterface)
    {
        $this->modelInterface = $modelInterface;
    }

    public function find($id)
    {
        $model = cacheGet('users_' . $id);
        if (!$model) {
            $model = $this->modelInterface->find($id);
            if (!$model) {
                return responseJson(404, __('message.data not found'));
            } else {
                cachePut('users_' . $id, $model);
            }
        }
        return responseJson(200, 'success', new UserResource($model));
    }

    public function all(AllRequest $request)
    {
        if (count($_GET) == 0) {
            $models = cacheGet('users');
            if (!$models) {
                $models = $this->modelInterface->all($request);
                cachePut('users', $models);
            }
        } else {
            $models = $this->modelInterface->all($request);
        }

        return responseJson(200, 'success', UserResource::collection($models['data']), $models['paginate'] ? getPaginates($models['data']) : null);
    }

    public function create(StoreUserRequest $request)
    {
        $model = $this->modelInterface->create($request);
        $model->refresh();
        return responseJson(200, 'success', new UserResource($model));

    }

    public function update(UpdateUserRequest $request, $id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }
        $this->modelInterface->update($request, $id);
        $model->refresh();
        return responseJson(200, 'success', new UserResource($model));
    }

    public function logs($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
        }

        $logs = $this->modelInterface->logs($id);
        return responseJson(200, 'success', \App\Http\Resources\Log\LogResource::collection($logs));

    }

    public function delete($id)
    {
        $model = $this->modelInterface->find($id);
        if (!$model) {
            return responseJson(404, __('message.data not found'));
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

}
