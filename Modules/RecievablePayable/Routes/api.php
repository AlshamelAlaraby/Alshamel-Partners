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

    Route ::resource ( 'rp_payment_plan_installment' , 'RpPaymentPlanInstallmentController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_payment_plan_installment/logs/{id}' , 'RpPaymentPlanInstallmentController@logs' );

    Route ::resource ( 'rp_main_contact_group' , 'RpMainContactGroupController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_main_contact_group/logs/{id}' , 'RpMainContactGroupController@logs' );

    Route ::resource ( 'rp_sub_contact_group' , 'RpSubContactGroupController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_sub_contact_group/logs/{id}' , 'RpSubContactGroupController@logs' );

    Route ::resource ( 'rp_installment_p_plan' , 'RpInstallmentPaymentPlanController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_installment_p_plan/logs/{id}' , 'RpInstallmentPaymentPlanController@logs' );

    Route ::resource ( 'rp_screen_sub_contact_group' , 'RpScreenSubContactGroupController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_screen_sub_contact_group/logs/{id}' , 'RpScreenSubContactGroupController@logs' );

    Route ::resource ( 'rp_document_plan' , 'RpDocumentPlanController' ) -> except ( 'edit' , 'create' );
    Route ::get ( 'rp_document_plan/logs/{id}' , 'RpDocumentPlanController@logs' );
});
