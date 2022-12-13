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



Route::group(['prefix' => 'rlst', 'namespace' => 'Modules\RealEstate\Http\Controllers'], function () {
    Route::group(['prefix' => 'owners'], function () {
        Route::get('/', 'RlstOwnerController@all')->name('rlst-owners.all');
        Route::get('/logs', 'RlstOwnerController@logs')->name('rlst-owners.logs');
        Route::get('/{id}', 'RlstOwnerController@find')->name('rlst-owners.find');
        Route::post('/', 'RlstOwnerController@create')->name('rlst-owners.create');
        Route::put('/{id}', 'RlstOwnerController@update')->name('rlst-owners.update');
        Route::delete('/{id}', 'RlstOwnerController@delete')->name('rlst-owners.delete');
    });
});
