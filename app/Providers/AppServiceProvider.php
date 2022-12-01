<?php

namespace App\Providers;

use App\Repositories\City\CityRepository;
use App\Repositories\City\CityRepositoryInterface;
use App\Repositories\Currency\CurrencyRepository;
use App\Repositories\Currency\CurrencyRepositoryInterface;
use Illuminate\Support\ServiceProvider;
use App\Repositories\User\UserRepository;
use App\Repositories\Store\StoreInterface;
use App\Repositories\Store\StoreRepository;
use App\Repositories\Module\ModuleInterface;
use App\Repositories\Branch\BranchRepository;
use App\Repositories\Module\ModuleRepository;
use App\Repositories\Serial\SerialRepository;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Branch\BranchRepositoryInterface;
use App\Repositories\Serial\SerialRepositoryInterface;
use App\Repositories\Company\CompanyRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);

        $this->app->bind(CompanyRepositoryInterface::class, CompanyRepository::class);



        $this->app->bind(ModuleInterface::class, ModuleRepository::class);
        $this->app->bind(StoreInterface::class, StoreRepository::class);

        $this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);
        $this->app->bind(SerialRepositoryInterface::class, SerialRepository::class);
        $this->app->bind(CityRepositoryInterface::class, CityRepository::class);
        $this->app->bind(CurrencyRepositoryInterface::class, CurrencyRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
