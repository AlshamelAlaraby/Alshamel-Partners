<?php

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

Route::prefix('real-estate')->group(function () {

    // Route::resource('property-types', 'PropertyTypeController')->except('edit', 'create');
    // Route::get('property-types/logs/{id}', 'PropertyTypeController@logs');

    // Route::resource('rlst-buildings', 'RlstBuildingController')->except('edit', 'create');
    // Route::get('rlst-buildings/logs/{id}', 'RlstBuildingController@logs');

    // Route::resource('rlst-units', 'RlstUnitController')->except('edit', 'create');
    // Route::get('rlst-units/logs/{id}', 'RlstUnitController@logs');

    // Route::resource('rlst-unit-status', 'RlstUnitStatusController')->except('edit', 'create');

    // Route::resource('rlst-wallet-building', 'RlstWalletBuildingController')->except('edit', 'create');
    // Route::get('rlst-wallet-building/logs/{id}', 'RlstWalletBuildingController@logs');

    // owners routes
    Route::group(['prefix' => 'owners'], function () {
        Route::get('/', 'RlstOwnerController@all')->name('rlst-owners.all');
        Route::get('/logs/{id}', 'RlstOwnerController@logs')->name('rlst-owners.logs');
        Route::get('/{id}', 'RlstOwnerController@find')->name('rlst-owners.find');
        Route::post('/', 'RlstOwnerController@create')->name('rlst-owners.create');
        Route::put('/{id}', 'RlstOwnerController@update')->name('rlst-owners.update');
        Route::delete('/{id}', 'RlstOwnerController@delete')->name('rlst-owners.delete');
    });

    // customers routes
    Route::group(['prefix' => 'customers'], function () {
        Route::get('/', 'RlstCustomerController@all')->name('rlst-customers.all');
        Route::get('/logs/{id}', 'RlstCustomerController@logs')->name('rlst-customers.logs');
        Route::get('/{id}', 'RlstCustomerController@find')->name('rlst-customers.find');
        Route::post('/', 'RlstCustomerController@create')->name('rlst-customers.create');
        Route::put('/{id}', 'RlstCustomerController@update')->name('rlst-customers.update');
        Route::delete('/{id}', 'RlstCustomerController@delete')->name('rlst-customers.delete');
    });

    // wallets routes

    Route::group(['prefix' => 'wallets'], function () {
        Route::get('/', 'RlstWalletController@all')->name('rlst-wallets.all');
        Route::get('/logs/{id}', 'RlstWalletController@logs')->name('rlst-wallets.logs');
        Route::get('/{id}', 'RlstWalletController@find')->name('rlst-wallets.find');
        Route::post('/', 'RlstWalletController@create')->name('rlst-wallets.create');
        Route::put('/{id}', 'RlstWalletController@update')->name('rlst-wallets.update');
        Route::delete('/{id}', 'RlstWalletController@delete')->name('rlst-wallets.delete');
    });

    // wallet-owner

    Route::group(['prefix' => 'wallet-owner'], function () {
        Route::get('/', 'RlstWalletOwnerController@all')->name('rlst-wallet-owner.all');
        Route::get('/logs/{id}', 'RlstWalletOwnerController@logs')->name('rlst-wallet-owner.logs');
        Route::get('/{id}', 'RlstWalletOwnerController@find')->name('rlst-wallet-owner.find');
        Route::post('/', 'RlstWalletOwnerController@create')->name('rlst-wallet-owner.create');
        Route::put('/{id}', 'RlstWalletOwnerController@update')->name('rlst-wallet-owner.update');
        Route::delete('/{id}', 'RlstWalletOwnerController@delete')->name('rlst-wallet-owner.delete');
    });

    //installments

    Route::group(['prefix' => 'installments'], function () {
        Route::get('/', 'RlstInstallmentController@all')->name('rlst-installments.all');
        Route::get('/logs/{id}', 'RlstInstallmentController@logs')->name('rlst-installments.logs');
        Route::get('/{id}', 'RlstInstallmentController@find')->name('rlst-installments.find');
        Route::post('/', 'RlstInstallmentController@create')->name('rlst-installments.create');
        Route::put('/{id}', 'RlstInstallmentController@update')->name('rlst-installments.update');
        Route::delete('/{id}', 'RlstInstallmentController@delete')->name('rlst-installments.delete');
    });

    //reservations
    Route::group(['prefix' => 'reservations'], function () {
        Route::get('/', 'RlstReservationController@all')->name('rlst-Reservations.all');
        Route::get('/logs/{id}', 'RlstReservationController@logs')->name('rlst-Reservations.logs');
        Route::get('/{id}', 'RlstReservationController@find')->name('rlst-Reservations.find');
        Route::post('/', 'RlstReservationController@create')->name('rlst-Reservations.create');
        Route::put('/{id}', 'RlstReservationController@update')->name('rlst-Reservations.update');
        Route::delete('/{id}', 'RlstReservationController@delete')->name('rlst-Reservations.delete');
    });
    // reservation units
    Route::group(['prefix' => 'reservation-units'], function () {
        Route::get('/', 'RlstReservationUnitController@all')->name('rlst-reservation-units.all');
        Route::get('/logs/{id}', 'RlstReservationUnitController@logs')->name('rlst-reservation-units.logs');
        Route::get('/{id}', 'RlstReservationUnitController@find')->name('rlst-reservation-units.find');
        Route::post('/', 'RlstReservationUnitController@create')->name('rlst-reservation-units.create');
        Route::put('/{id}', 'RlstReservationUnitController@update')->name('rlst-reservation-units.update');
        Route::delete('/{id}', 'RlstReservationUnitController@delete')->name('rlst-reservation-units.delete');
    });

    // contracts

    Route::group(['prefix' => 'contracts'], function () {
        Route::get('/', 'RlstContractController@all')->name('rlst-contracts.all');
        Route::get('/logs/{id}', 'RlstContractController@logs')->name('rlst-contracts.logs');
        Route::get('/{id}', 'RlstContractController@find')->name('rlst-contracts.find');
        Route::post('/', 'RlstContractController@create')->name('rlst-contracts.create');
        Route::put('/{id}', 'RlstContractController@update')->name('rlst-contracts.update');
        Route::delete('/{id}', 'RlstContractController@delete')->name('rlst-contracts.delete');
    });

    //unit contracts
    Route::group(['prefix' => 'unit-contracts'], function () {
        Route::get('/', 'RlstUnitContractController@all')->name('rlst-unit-contracts.all');
        Route::get('/logs/{id}', 'RlstUnitContractController@logs')->name('rlst-unit-contracts.logs');
        Route::get('/{id}', 'RlstUnitContractController@find')->name('rlst-unit-contracts.find');
        Route::post('/', 'RlstUnitContractController@create')->name('rlst-unit-contracts.create');
        Route::put('/{id}', 'RlstUnitContractController@update')->name('rlst-unit-contracts.update');
        Route::delete('/{id}', 'RlstUnitContractController@delete')->name('rlst-unit-contracts.delete');
    });

    // units
    Route::group(['prefix' => 'units'], function () {
        Route::get('/', 'RlstUnitController@all')->name('rlst-units.all');
        Route::get('/logs/{id}', 'RlstUnitController@logs')->name('rlst-units.logs');
        Route::get('/{id}', 'RlstUnitController@find')->name('rlst-units.find');
        Route::post('/', 'RlstUnitController@create')->name('rlst-units.create');
        Route::put('/{id}', 'RlstUnitController@update')->name('rlst-units.update');
        Route::delete('/{id}', 'RlstUnitController@delete')->name('rlst-units.delete');
    });

    // unit statuses
    Route::group(['prefix' => 'unit-statuses'], function () {
        Route::get('/', 'RlstUnitStatusController@all')->name('rlst-unit-statuses.all');
        Route::get('/logs/{id}', 'RlstUnitStatusController@logs')->name('rlst-unit-statuses.logs');
        Route::get('/{id}', 'RlstUnitStatusController@find')->name('rlst-unit-statuses.find');
        Route::post('/', 'RlstUnitStatusController@create')->name('rlst-unit-statuses.create');
        Route::put('/{id}', 'RlstUnitStatusController@update')->name('rlst-unit-statuses.update');
        Route::delete('/{id}', 'RlstUnitStatusController@delete')->name('rlst-unit-statuses.delete');
    });
    // property types
    Route::group(['prefix' => 'property-types'], function () {
        Route::get('/', 'RlstPropertyTypeController@all')->name('rlst-property-types.all');
        Route::get('/logs/{id}', 'RlstPropertyTypeController@logs')->name('rlst-property-types.logs');
        Route::get('/{id}', 'RlstPropertyTypeController@find')->name('rlst-property-types.find');
        Route::post('/', 'RlstPropertyTypeController@create')->name('rlst-property-types.create');
        Route::put('/{id}', 'RlstPropertyTypeController@update')->name('rlst-property-types.update');
        Route::delete('/{id}', 'RlstPropertyTypeController@delete')->name('rlst-property-types.delete');
    });

    // buildings
    Route::group(['prefix' => 'buildings'], function () {
        Route::get('/', 'RlstBuildingController@all')->name('rlst-buildings.all');
        Route::get('/logs/{id}', 'RlstBuildingController@logs')->name('rlst-buildings.logs');
        Route::get('/{id}', 'RlstBuildingController@find')->name('rlst-buildings.find');
        Route::post('/', 'RlstBuildingController@create')->name('rlst-buildings.create');
        Route::put('/{id}', 'RlstBuildingController@update')->name('rlst-buildings.update');
        Route::delete('/{id}', 'RlstBuildingController@delete')->name('rlst-buildings.delete');
    });

});
