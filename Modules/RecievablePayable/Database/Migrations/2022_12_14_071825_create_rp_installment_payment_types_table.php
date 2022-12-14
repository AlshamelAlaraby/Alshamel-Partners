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
        Schema::create('rp_installment_payment_types', function (Blueprint $table) {
            $table->id();
            $table->string ('name',100);
            $table->string ('name_e',100);
            $table->unsignedTinyInteger ('auto_freq')->nullable ()->default (1)->comment ('1=Yes, 0=No (default 1)');
            $table->unsignedTinyInteger ('is_partially')->nullable ()->default (1)->comment ('1=Yes, 0=No (default 1)');
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
        Schema::dropIfExists('rp_installment_payment_types');
    }
};
