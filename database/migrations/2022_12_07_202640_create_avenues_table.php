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
        Schema::create('avenues', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('name_e');
            $table->string('is_active')->default('active');
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('governorate_id');
            $table->unsignedBigInteger('city_id');
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
        Schema::dropIfExists('avenues');
    }
};
