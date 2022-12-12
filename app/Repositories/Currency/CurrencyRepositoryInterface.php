<?php


namespace App\Repositories\Currency;


interface CurrencyRepositoryInterface
{
    public function getAll($request);

    public function logs($id);

}
