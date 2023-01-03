<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rlst_units', function (Blueprint $table) {
            $table->id();
            $table->string('code', 20);
            $table->string('name', 100);
            $table->string('name_e', 100);
            $table->text('description')->nullable();
            $table->text('description_e')->nullable();
            $table->integer('unit_ty')->nullable()->default(0);
            $table->date('status_date')->nullable()->default(now());
            $table->double('unit_area')->nullable()->default(0);
            $table->unsignedInteger('building_id')->nullable()->default(0);
            $table->unsignedInteger('owner_id')->nullable()->default(0);
            $table->unsignedInteger('currency_id')->nullable()->default(0);
            $table->unsignedInteger('wallet_id')->nullable()->default(0);
            $table->unsignedInteger('unit_status_id')->nullable()->default(0);
            $table->unsignedTinyInteger('commission_ty')->nullable()->default(0);
            $table->double('commission_value')->nullable()->default(0);
            $table->double('price')->nullable()->default(0);
            $table->unsignedInteger('rooms')->nullable()->default(0);
            $table->unsignedInteger('path')->nullable()->default(0);
            $table->unsignedInteger('view')->nullable()->default(0);
            $table->unsignedInteger('floor')->nullable()->default(0);
            $table->unsignedInteger('rank')->nullable()->default(0);
            $table->json('properties')->nullable();
            $table->json('attachments')->nullable();
            $table->foreignId("module_id");
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
        Schema::dropIfExists('rlst_units');
    }
};
