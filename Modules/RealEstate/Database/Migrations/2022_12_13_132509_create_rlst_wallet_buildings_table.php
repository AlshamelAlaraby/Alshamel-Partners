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
        Schema::create('rlst_wallet_buildings', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('wallet_Id')->nullable ()->default (0);
            $table->unsignedInteger ('building_id')->nullable ()->default (0);
            $table->unsignedInteger ('item_id')->nullable ()->default (0)->comment ('Id of building, unit');
            $table->unsignedTinyInteger ('Bu_ty')->nullable ()->default (0)->comment ('1=building, 2=Unit');
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
        Schema::dropIfExists('rlst_wallet_buildings');
    }
};
