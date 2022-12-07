<?php

namespace App\Repositories\FinancialYear;

interface FinancialYearInterface
{

    public function all($request);

    public function find($id);

    public function create($request);

    public function update($request, $id);

    public function delete($id);

}
