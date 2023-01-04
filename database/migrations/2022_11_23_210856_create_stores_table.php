<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStoresTable extends Migration
{
    use \App\Traits\ConnTrait;
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('company_id');
            $table->foreignId('branch_id')->constrained('branches')->references("id")->cascadeOnDelete()->cascadeOnUpdate();
            $table->string("name" , 100)->comment("Name Arabic");
            $table->string("name_e" , 100)->comment("Name English");
            $table->string('is_active')->default('active');
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
        Schema::dropIfExists('stores');
    }
}
