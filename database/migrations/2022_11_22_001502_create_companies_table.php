<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('partners_id')->constrained('partners')->references("id")->cascadeOnDelete()->cascadeOnUpdate();
            $table->string("name" , 100)->comment("Name Arabic");
            $table->string("name_e" , 100)->comment("Name English");
            $table->string("url" , 200)->comment("مسار نظام الشركة");
            $table->string("logo" , 200)->comment("مسار شعار الشركة");
            $table->string("address" , 200);
            $table->string("phone" , 20);
            $table->string("cr")->comment("سجل تجاري");
            $table->string("tax_id")->comment("رقم ضريبي");
            $table->string("vat_no")->comment("رقم تسجيل القيمة المضافة");
            $table->string("email");
            $table->string("website");
            $table->enum('is_active',[ 0 , 1 ])->default(0)->comment("1=Active, 0=Not Active");
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
        Schema::dropIfExists('companies');
    }
}
