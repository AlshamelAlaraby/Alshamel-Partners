<?php

namespace App\Repositories\User;

interface UserInterface
{

    public function all($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function setting($request);

    public function logs($id);

    public function getSetting($user_id, $screen_id);

    public function delete($id);

}
