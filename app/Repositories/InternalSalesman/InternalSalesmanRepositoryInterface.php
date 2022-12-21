<?php

namespace App\Repositories\InternalSalesman;

interface InternalSalesmanRepositoryInterface
{
    public function all($request);
    public function setting($request);

    public function getSetting($user_id, $screen_id);
    public function logs($id);

}
