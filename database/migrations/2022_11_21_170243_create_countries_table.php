<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('name_e')->unique();
            $table->string("phone_key", 10)->unique();
            $table->integer("national_id_length");
            $table->string("long_name", 100);
            $table->string("long_name_e", 100);
            $table->string("short_code", 10);
            $table->tinyInteger('is_default')->default(0);
            $table->string("is_active")->default('active');
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
        Schema::dropIfExists('countries');
    }
}
