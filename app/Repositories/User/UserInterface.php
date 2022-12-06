<?php

namespace App\Repositories\User;

interface UserInterface
{

    public function all($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);

}
