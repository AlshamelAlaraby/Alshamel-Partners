<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    use \App\Traits\ConnTrait;
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('country_id')->comment ('PK- (from GEN_countries)');
            $table->unsignedInteger ('governorate_id')->comment ('PK- (from GEN_Governorates)');
            $table->string ('name',100)->nullable ()->comment ('name arabic');
            $table->string ('name_e',100)->nullable ()->comment ('name en');
            $table->unsignedTinyInteger ('is_active')->nullable ()->default (0)->comment ('1=Active, 0=Not Active');
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
        Schema::dropIfExists('cities');
    }
};
