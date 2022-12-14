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
        Schema::create('rp_installment_payment_plan_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('installment_payment_plan_id');
            $table->unsignedInteger ('installment_payment_type_id');
            $table->unsignedInteger ('ln_no');
            $table->unsignedTinyInteger ('is_fixed')->nullable ()->default (0)->comment ('1= predefined date, 0= Undefined date (دفعة انتهاء تدريب)');
            $table->double ('installment_payment_type_per')->nullable ()->default (0)->comment ('نسبة% من اجمالي المبلغ');
            $table->double ('installment_payment_type_amount')->nullable ()->default (0)->comment ('مبلغ ثابت');
            $table->unsignedInteger('installment_payment_type_freq')->nullable ()->default (0)->comment ('عدد الاقساط');
            $table->double ('interest_per')->nullable ()->default (0)->comment ('نسبة الفايدة');
            $table->double ('interest_value')->nullable ()->default (0)->comment ('قيمة الفايدة');
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
        Schema::dropIfExists('rp_installment_payment_plan_details');
    }
};
