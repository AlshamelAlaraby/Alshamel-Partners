<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Unit\UnitInterface;
use App\Repositories\User\UserInterface;
use App\Repositories\City\CityRepository;
use App\Repositories\Role\RoleRepository;
use App\Repositories\Unit\UnitRepository;
use App\Repositories\User\UserRepository;
use App\Repositories\Color\ColorInterface;
use App\Repositories\Store\StoreInterface;
use App\Repositories\Color\ColorRepository;
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
use App\Repositories\Salesman\SalesmanInterface;
use App\Repositories\Currency\CurrencyRepository;
use App\Repositories\Employee\EmployeeRepository;
use App\Repositories\RoleType\RoleTypeRepository;
use App\Repositories\Salesman\SalesmanRepository;
use App\Repositories\City\CityRepositoryInterface;
use App\Repositories\Role\RoleRepositoryInterface;
use App\Repositories\User\UserRepositoryInterface;
use App\Repositories\Branch\BranchRepositoryInterface;
use App\Repositories\Governorate\GovernorateInterface;
use App\Repositories\PaymentType\PaymentTypeInterface;
use App\Repositories\Serial\SerialRepositoryInterface;
use App\Repositories\Governorate\GovernorateRepository;
use App\Repositories\PaymentType\PaymentTypeRepository;
use App\Repositories\Company\CompanyRepositoryInterface;
use App\Repositories\SalesmenType\SalesmenTypeInterface;
use App\Repositories\RoleWorkflow\RoleWorkflowRepository;
use App\Repositories\SalesmenType\SalesmenTypeRepository;
use App\Repositories\TreeProperty\TreePropertyRepository;
use App\Repositories\Currency\CurrencyRepositoryInterface;
use App\Repositories\FinancialYear\FinancialYearInterface;
use App\Repositories\RoleType\RoleTypeRepositoryInterface;
use App\Repositories\Salesman\SalesmanRepositoryInterface;
use App\Repositories\FinancialYear\FinancialYearRepository;
use App\Repositories\ExternalSalesmen\ExternalSalesmenInterface;
use App\Repositories\ExternalSalesmen\ExternalSalesmenRepository;
use App\Repositories\InternalSalesman\InternalSalesmanRepository;
use App\Repositories\WorkflowHotfield\WorkflowHotfieldRepository;
use App\Repositories\RoleWorkflow\RoleWorkflowRepositoryInterface;
use App\Repositories\TreeProperty\TreePropertyRepositoryInterface;
use App\Repositories\RoleScreenHotfield\RoleScreenHotfieldRepository;
use App\Repositories\RoleWorkflowButton\RoleWorkflowButtonRepository;
use App\Repositories\InternalSalesman\InternalSalesmanRepositoryInterface;
use App\Repositories\WorkflowHotfield\WorkflowHotfieldRepositoryInterface;
use App\Repositories\RoleWorkflowButton\RoleWorkflowButtonRepositoryInterface;
use App\Repositoriefs\RoleScreenHotfield\RoleScreenHotfieldRepositoryInterface;

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
        $this->app->bind(PaymentTypeInterface::class, PaymentTypeRepository::class);

        $this->app->bind(GovernorateInterface::class, GovernorateRepository::class);

        $this->app->bind(ExternalSalesmenInterface::class, ExternalSalesmenRepository::class);

        $this->app->bind(FinancialYearInterface::class, FinancialYearRepository::class);
        $this->app->bind(UnitInterface::class, UnitRepository::class);
        $this->app->bind(AvenueInterface::class, AvenueRepository::class);

        $this->app->bind(CountryInterface::class, CountryRepository::class);

        $this->app->bind(ColorInterface::class, ColorRepository::class);

        $this->app->bind(SalesmenTypeInterface::class, SalesmenTypeRepository::class);
        $this->app->bind(SalesmanInterface::class, SalesmanRepository::class);

        $this->app->bind(BranchRepositoryInterface::class, BranchRepository::class);
        $this->app->bind(SerialRepositoryInterface::class, SerialRepository::class);
        $this->app->bind(CityRepositoryInterface::class, CityRepository::class);
        $this->app->bind(CurrencyRepositoryInterface::class, CurrencyRepository::class);
        $this->app->bind(RoleRepositoryInterface::class, RoleRepository::class);
        $this->app->bind(RoleTypeRepositoryInterface::class, RoleTypeRepository::class);
        $this->app->bind(RoleWorkflowRepositoryInterface::class, RoleWorkflowRepository::class);
        $this->app->bind(RoleScreenHotfieldRepositoryInterface::class, RoleScreenHotfieldRepository::class);
        $this->app->bind(RoleWorkflowButtonRepositoryInterface::class, RoleWorkflowButtonRepository::class);
        $this->app->bind(WorkflowHotfieldRepositoryInterface::class, WorkflowHotfieldRepository::class);
        $this->app->bind(SalesmanRepositoryInterface::class, SalesmanRepository::class);
        $this->app->bind(TreePropertyRepositoryInterface::class, TreePropertyRepository::class);
        $this->app->bind(InternalSalesmanRepositoryInterface::class, InternalSalesmanRepository::class);
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
