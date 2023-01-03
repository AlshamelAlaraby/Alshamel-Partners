<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    use \App\Traits\ConnTrait;

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        // \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=0');
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string("name_e");
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string("is_active")->default('active');
            $table->string('password');
            $table->bigInteger('employee_id')->nullable();
            $table->softDeletes();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
