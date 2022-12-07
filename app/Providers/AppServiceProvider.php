<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Unit\UnitInterface;
use App\Repositories\User\UserInterface;
use App\Repositories\City\CityRepository;
use App\Repositories\Role\RoleRepository;
use App\Repositories\Unit\UnitRepository;
use App\Repositories\User\UserRepository;
use App\Repositories\Store\StoreInterface;
use App\Repositories\Store\StoreRepository;
use App\Repositories\Avenue\AvenueInterface;
use App\Repositories\Module\ModuleInterface;
use App\Repositories\Avenue\AvenueRepository;
use App\Repositories\Branch\BranchRepository;
use App\Repositories\Module\ModuleRepository;
use App\Repositories\Serial\SerialRepository;
use App\Repositories\Country\CountryInterface;
use App\Repositories\Company\CompanyRepository;
use App\Repositories\Country\CountryRepository;
use App\Repositories\Employee\EmployeeInterface;
use App\Repositories\Currency\CurrencyRepository;
use App\Repositories\Employee\EmployeeRepository;
use App\Repositories\RoleType\RoleTypeRepository;
use App\Repositories\City\CityRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Branch\BranchRepositoryInterface;
use App\Repositories\Governorate\GovernorateInterface;
use App\Repositories\Serial\SerialRepositoryInterface;
use App\Repositories\Governorate\GovernorateRepository;
use App\Repositories\Company\CompanyRepositoryInterface;
use App\Repositories\RoleWorkflow\RoleWorkflowRepository;
use App\Repositories\Currency\CurrencyRepositoryInterface;
use App\Repositories\FinancialYear\FinancialYearInterface;
use App\Repositories\RoleType\RoleTypeRepositoryInterface;
use App\Repositories\FinancialYear\FinancialYearRepository;
use App\Repositories\RoleWorkflow\RoleWorkflowRepositoryInterface;

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
        $this->app->bind(EmployeeInterface::class, EmployeeRepository::class);
        $this->app->bind(CountryInterface::class, CountryRepository::class);

        $this->app->bind(UserInterface::class, UserRepository::class);

        $this->app->bind(GovernorateInterface::class, GovernorateRepository::class);

        $this->app->bind(FinancialYearInterface::class, FinancialYearRepository::class);
        $this->app->bind(UnitInterface::class, UnitRepository::class);
        $this->app->bind(AvenueInterface::class, AvenueRepository::class);

        $this->app->bind(CountryInterface::class, CountryRepository::class);

        $this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);
        $this->app->bind(SerialRepositoryInterface::class, SerialRepository::class);
        $this->app->bind(CityRepositoryInterface::class, CityRepository::class);
        $this->app->bind(CurrencyRepositoryInterface::class, CurrencyRepository::class);
        $this->app->bind(RoleRepositoryInterface::class, RoleRepository::class);
        $this->app->bind(RoleTypeRepositoryInterface::class, RoleTypeRepository::class);
        $this->app->bind(RoleWorkflowRepositoryInterface::class, RoleWorkflowRepository::class);
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
