<?php

namespace App\Providers;

use App\Repositories\Branch\BranchRepository;
use App\Repositories\Branch\BranchRepositoryInterface;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\Company\CompanyRepositoryInterface;
use App\Repositories\Module\ModuleInterface;
use App\Repositories\Module\ModuleRepository;
use App\Repositories\Serial\SerialRepository;
use App\Repositories\Serial\SerialRepositoryInterface;
use App\Repositories\User\UserRepository;
use App\Repositories\User\UserRepositoryInterface;
use Illuminate\Support\ServiceProvider;

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

        $this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);
        $this->app->bind(SerialRepositoryInterface::class, SerialRepository::class);
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
