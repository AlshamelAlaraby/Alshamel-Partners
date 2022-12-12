<?php

namespace App\Repositories\Serial;

interface SerialRepositoryInterface
{
    public function getAll($request);
    public function setting($request);

    public function getSetting($user_id, $screen_id);
    public function logs($id);

}
