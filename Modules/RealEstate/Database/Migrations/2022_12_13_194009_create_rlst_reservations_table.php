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
        Schema::create('rlst_reservations', function (Blueprint $table) {
            $table->id();
            $table->date("vdate");
            $table->foreignId('salesman_id')->constrained('salesmen')->references("id");
            $table->foreignId('customer_id')->constrained('rlst_buildings')->references("id");
            $table->integer('Payment_paln_id');
            // $table->foreignId('Payment_paln_id')->constrained('rlst_Payment_plans')->references("id");
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
        Schema::dropIfExists('rlst_reservations');
    }
};
