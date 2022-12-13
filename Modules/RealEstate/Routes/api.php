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

Route::prefix ('real-estate')->group (function (){
//    Route::middleware ('auth:sanctum')->group (function (){
//        Route::resource ('property-types','PropertyTypeController')->except ('edit','create');
//    });

    Route::resource ('property-types','PropertyTypeController')->except ('edit','create');
    Route::get ('property-types/logs/{id}','PropertyTypeController@logs');

    Route::resource ('rlst-buildings','RlstBuildingController')->except ('edit','create');
    Route::get ('rlst-buildings/logs/{id}','RlstBuildingController@logs');

    Route::resource ('rlst-units','RlstUnitController')->except ('edit','create');
    Route::get ('rlst-units/logs/{id}','RlstUnitController@logs');
});
