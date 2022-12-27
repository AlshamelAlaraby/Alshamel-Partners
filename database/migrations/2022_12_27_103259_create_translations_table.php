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
        Schema::create('translations', function (Blueprint $table) {
            $table->id();
            $table->string ('key')->index ();
            $table->string ('default_en')->nullable ();
            $table->string ('default_ar')->nullable ();
            $table->string ('new_en')->nullable ();
            $table->string ('new_ar')->nullable ();
            $table->unsignedInteger ('company_id')->nullable ();
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
        Schema::dropIfExists('translations');
    }
};