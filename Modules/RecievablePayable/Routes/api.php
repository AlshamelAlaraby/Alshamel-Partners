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

Route::middleware('auth:api')->get('/recievablepayable', function (Request $request) {
    return $request->user();
});





Route::prefix ('recievable-payable')->group (function (){
//    Route::middleware ('auth:sanctum')->group (function (){
//
//    });
    Route ::resource ( 'rp_installment_p_plan_details' , 'RpInstallmentPaymentPlanDetailController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_installment_p_plan_details/logs/{id}' , 'RpInstallmentPaymentPlanDetailController@logs' );

    Route ::resource ( 'rp_installment_payment_types' , 'RpInstallmentPaymentTypeController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_installment_payment_types/logs/{id}' , 'RpInstallmentPaymentTypeController@logs' );

    Route ::resource ( 'rp_installment_status' , 'RpInstallmentStatusController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_installment_status/logs/{id}' , 'RpInstallmentStatusController@logs' );
});
