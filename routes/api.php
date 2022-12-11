<?php

use App\Http\Controllers\Branch\BranchController;
use App\Http\Controllers\City\CityController;
use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Currency\CurrencyController;
use App\Http\Controllers\Roles\RoleController;
use App\Http\Controllers\RoleType\RoleTypeController;
use App\Http\Controllers\Serials\SerialController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::controller(\App\Http\Controllers\MainController::class)->group(function () {
    Route::post("/media", "media");
    Route::put("/setting", "setting");
    Route::get("/setting/{user_id}/{screen_id}", "getSetting");
});

Route::middleware('auth:sanctum')->group(function () {
    Route::group(['prefix' => 'companies'], function () {
        Route::get('', [CompanyController::class, "index"]);
        Route::get('/{id}', [CompanyController::class, "show"]);
        Route::post('', [CompanyController::class, "store"]);
        Route::post('/{id}', [CompanyController::class, "update"]);
        Route::delete('/{id}', [CompanyController::class, "destroy"]);
    });

});

Route::group(['prefix' => 'modules'], function () {
    Route::controller(\App\Http\Controllers\Module\ModuleController::class)->group(function () {
        Route::get('/', 'all')->name('modules.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('modules.create');
        Route::put('/{id}', 'update')->name('modules.update');
        Route::delete('/{id}', 'delete')->name('modules.destroy');
        // Route::post('/{module_id}/company/{company_id}', 'addModuleToCompany')->name('modules.company.add');
        // Route::delete('/{module_id}/company/{company_id}', 'removeModuleFromCompany')->name('modules.company.remove');

    });
});

Route::group(['prefix' => 'stores'], function () {
    Route::controller(\App\Http\Controllers\Store\StoreController::class)->group(function () {
        Route::get('/', 'all')->name('stores.index');
        Route::get('logs/{id}', 'logs')->name('stores.logs');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('stores.create');
        Route::put('/{id}', 'update')->name('stores.update');
        Route::delete('/{id}', 'delete')->name('stores.destroy');

    });
});

Route::group(['prefix' => 'countries'], function () {
    Route::controller(\App\Http\Controllers\Country\CountryController::class)->group(function () {
        Route::get('/', 'all')->name('countries.index');
        Route::get('logs/{id}', 'logs')->name('countries.logs');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('countries.create');
        Route::put('/{id}', 'update')->name('countries.update');
        Route::delete('/{id}', 'delete')->name('countries.destroy');

    });
});

Route::group(['prefix' => 'governorates'], function () {
    Route::controller(\App\Http\Controllers\Governorate\GovernorateController::class)->group(function () {
        Route::get('/', 'all')->name('governorates.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('governorates.create');
        Route::put('/{id}', 'update')->name('governorates.update');
        Route::delete('/{id}', 'delete')->name('governorates.destroy');

    });
});

Route::group(['prefix' => 'employees'], function () {
    Route::controller(\App\Http\Controllers\Employee\EmployeeController::class)->group(function () {
        Route::get('logs/{id}', 'logs')->name('employees.logs');
        Route::get('/', 'all')->name('employees.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('employees.create');
        Route::put('/{id}', 'update')->name('employees.update');
        Route::delete('/{id}', 'delete')->name('employees.destroy');

    });
});

Route::group(['prefix' => 'financial-years'], function () {
    Route::controller(\App\Http\Controllers\FinancialYear\FinancialYearController::class)->group(function () {
        Route::get('/', 'all')->name('financial-years.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('financial-years.create');
        Route::put('/{id}', 'update')->name('financial-years.update');
        Route::delete('/{id}', 'delete')->name('financial-years.destroy');

    });
});

Route::group(['prefix' => 'units'], function () {
    Route::controller(\App\Http\Controllers\Unit\UnitController::class)->group(function () {
        Route::get('/', 'all')->name('units.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('units.create');
        Route::put('/{id}', 'update')->name('units.update');
        Route::delete('/{id}', 'delete')->name('units.destroy');

    });
});

Route::group(['prefix' => 'avenues'], function () {
    Route::controller(\App\Http\Controllers\Avenue\AvenueController::class)->group(function () {
        Route::get('/', 'all')->name('avenues.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('avenues.create');
        Route::put('/{id}', 'update')->name('avenues.update');
        Route::delete('/{id}', 'delete')->name('avenues.destroy');

    });
});

Route::group(['prefix' => 'colors'], function () {
    Route::controller(\App\Http\Controllers\Color\ColorController::class)->group(function () {
        Route::get('/', 'all')->name('colors.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('colors.create');
        Route::put('/{id}', 'update')->name('colors.update');
        Route::delete('/{id}', 'delete')->name('colors.destroy');

    });
});

Route::group(['prefix' => 'salesmen-types'], function () {
    Route::controller(\App\Http\Controllers\SalesmenType\SalesmenTypeController::class)->group(function () {
        Route::get('/', 'all')->name('salesmen-types.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('salesmen-types.create');
        Route::put('/{id}', 'update')->name('salesmen-types.update');
        Route::delete('/{id}', 'delete')->name('salesmen-types.destroy');

    });
});

Route::group(['prefix' => 'external-salesmen'], function () {
    Route::controller(\App\Http\Controllers\ExternalSalesmen\ExternalSalesmenController::class)->group(function () {
        Route::get('/', 'all')->name('external-salesmen.index');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('external-salesmen.create');
        Route::put('/{id}', 'update')->name('external-salesmen.update');
        Route::delete('/{id}', 'delete')->name('external-salesmen.destroy');

    });
});

Route::group(['prefix' => 'users'], function () {
    Route::controller(\App\Http\Controllers\User\UserController::class)->group(function () {
        Route::get('/', 'all')->name('users.index');
        Route::get('logs/{id}', 'logs')->name('users.logs');
        Route::get('/{id}', 'find');
        Route::post('/', 'create')->name('users.create');
        Route::put('/{id}', 'update')->name('users.update');
        Route::delete('/{id}', 'delete')->name('users.destroy');

    });
});

Route::group(['prefix' => 'branches'], function () {
    Route::controller(BranchController::class)->group(function () {
        Route::get('logs/{id}', 'logs')->name('branches.logs');
    });
});

Route::group(['prefix' => 'roles'], function () {
    Route::controller(RoleController::class)->group(function () {
        Route::get('logs/{id}', 'logs')->name('roles.logs');
    });
});

Route::group(['prefix' => 'role_types'], function () {
    Route::controller(RoleTypeController::class)->group(function () {
        Route::get('logs/{id}', 'logs')->name('role_types.logs');
    });
});

Route::group(['prefix' => 'serials'], function () {
    Route::controller(SerialController::class)->group(function () {
        Route::get('logs/{id}', 'logs')->name('serials.logs');
    });
});

//---------------------milad routes---------------------

Route::resource('branches', BranchController::class)->except('create', 'edit');
Route::resource('serials', SerialController::class)->except('create', 'edit');
Route::resource('cities', CityController::class)->except('create', 'edit');
Route::resource('currencies', CurrencyController::class)->except('create', 'edit');
Route::resource('roles', RoleController::class)->except('create', 'edit');
Route::resource('role_types', RoleTypeController::class)->except('create', 'edit');

//------------------------------------------------------
