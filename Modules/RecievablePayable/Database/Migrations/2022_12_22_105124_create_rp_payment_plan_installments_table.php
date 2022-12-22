<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rp_payment_plan_installments', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('installment_payment_plan_id')->default (0)->comment ('from RP_InstallmentPaymentPlanDetail');
            $table->unsignedInteger ('installment_payment_plan_detail_ln_no')->default (0)->comment ('from RP_InstallmentPaymentPlanDetail');
            $table->date ('v_date')->nullable ();
            $table->date ('due_date')->nullable ();
            $table->double ('total_amount')->default (0)->comment ('اجمالي المطلوب');
            $table->double ('paid_amount')->default (0)->comment ('المسدد جزئيا');
            $table->unsignedInteger ('installment_status_id')->default (0)->comment ('from RP_InstallmentStatus');
            $table->unsignedInteger ('doc_type')->default (0)->comment ('from SYS_DocumentTypes');
            $table->unsignedInteger ('screen_id')->default (0)->comment ('from SYS_Screens');
            $table->unsignedInteger ('module_id')->default (0)->comment ('from SYS_modules (leaf)');
            $table->unsignedInteger ('ref_id')->default (0)->comment ('رقم المستند (رقم عقد البيع - رقم بيع سيارة)');
            $table->string ('rp_code')->default (0)->comment ('الحساب اللي عليه اقساط');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rp_payment_plan_installments');
    }
};
