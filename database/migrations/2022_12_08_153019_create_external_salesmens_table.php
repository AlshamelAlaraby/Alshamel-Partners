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
        Schema::create('external_salesmen', function (Blueprint $table) {
            $table->id();
            $table->string('phone', '20');
            $table->string("address", 255);
            $table->string('rp_code', 20);
            $table->string('email');
            $table->string('is_active')->default('active');
            $table->integer('national_id');
            $table->bigInteger('country_id');
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
        Schema::dropIfExists('external_salesmen');
    }
};
