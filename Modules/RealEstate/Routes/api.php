<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/realestate', function (Request $request) {
    return $request->user();
});

Route::prefix('real-estate')->group(function () {
    //    Route::middleware ('auth:sanctum')->group (function (){
    //        Route::resource ('property-types','PropertyTypeController')->except ('edit','create');
    //    });

    Route::resource('property-types', 'PropertyTypeController')->except('edit', 'create');
    Route::get('property-types/logs/{id}', 'PropertyTypeController@logs');

    Route::resource('rlst-buildings', 'RlstBuildingController')->except('edit', 'create');
    Route::get('rlst-buildings/logs/{id}', 'RlstBuildingController@logs');

    Route::resource('rlst-units', 'RlstUnitController')->except('edit', 'create');
    Route::get('rlst-units/logs/{id}', 'RlstUnitController@logs');

    Route::resource('rlst-unit-status', 'RlstUnitStatusController')->except('edit', 'create');
    Route::get('rlst-unit-status/logs/{id}', 'RlstUnitStatusController@logs');

    Route::resource('rlst-wallet-building', 'RlstWalletBuildingController')->except('edit', 'create');
    Route::get('rlst-wallet-building/logs/{id}', 'RlstWalletBuildingController@logs');




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


    Route::group(['prefix' => 'rlst'], function () {
        Route::group(['prefix' => 'reservations'], function () {
            Route::get('/', 'RlstReservationController@all')->name('rlst-Reservations.all');
            Route::get('/logs', 'RlstReservationController@logs')->name('rlst-Reservations.logs');
            Route::get('/{id}', 'RlstReservationController@find')->name('rlst-Reservations.find');
            Route::post('/', 'RlstReservationController@create')->name('rlst-Reservations.create');
            Route::post('/{id}', 'RlstReservationController@update')->name('rlst-Reservations.update');
            Route::delete('/{id}', 'RlstReservationController@delete')->name('rlst-Reservations.delete');
        });
    });
});
