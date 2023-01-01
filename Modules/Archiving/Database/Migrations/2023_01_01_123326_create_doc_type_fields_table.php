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
        Schema::create('doc_type_fields', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('gen_doc_type_id');
            $table->unsignedBigInteger('doc_field_id');
            $table->unsignedBigInteger('field_order');
            $table->tinyInteger('is_required')->default(0);
            $table->unsignedBigInteger('field_characters');
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
        Schema::dropIfExists('doc_type_fields');
    }
};
