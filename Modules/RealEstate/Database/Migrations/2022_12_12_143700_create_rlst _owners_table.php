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
        Schema::create('rlst_owners', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->string('name_e', 100);
            $table->string('phone', 20);
            $table->string('email', 100);
            $table->unsignedBigInteger('country_id');
            $table->unsignedBigInteger('city_id');
            $table->string("rb_code", 20);
            $table->unsignedBigInteger("nationality_id");
            $table->unsignedBigInteger('bank_account_id');
            $table->string("contact_person", 100);
            $table->string("contact_phones", 100);
            $table->string("national_id", 20);
            $table->string("whatsapp", 20);
            $table->text('categories');
            $table->text('attachments');
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
        Schema::dropIfExists('rlst_owners');
    }
};
