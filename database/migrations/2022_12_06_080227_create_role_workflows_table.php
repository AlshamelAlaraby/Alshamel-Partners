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
        Schema::create('role_workflows', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger ('role_id')->nullable ()->default (0)->comment ('PK from GEN_Roles');
            $table->unsignedInteger ('workflow_id')->nullable ()->default (0)->comment ('PK from SYS_workflow');
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
        Schema::dropIfExists('role_workflows');
    }
};
