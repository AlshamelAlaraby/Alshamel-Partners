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
        Schema::create('rlst_contracts', function (Blueprint $table) {
            $table->id();
            $table->date("date");
            $table->foreignId("reservation_id");
            $table->foreignId('salesman_id');
            $table->foreignId('customer_id');
            $table->integer('payment_plan_id')->default(0);
            $table->softDeletes();
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
        Schema::dropIfExists('rlst_contracts');
    }
};
