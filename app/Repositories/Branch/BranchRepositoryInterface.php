<?php


namespace App\Repositories\Branch;


interface BranchRepositoryInterface
{
    public function getAllBranches($request);

    public function logs($id);
}
