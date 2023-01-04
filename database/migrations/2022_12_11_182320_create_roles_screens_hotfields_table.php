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
        Schema::create('roles_screens_hotfields', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained('roles')->references("id");
            $table->unsignedInteger('workflow_id');
            $table->unsignedInteger('hotfield_id');
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
        Schema::dropIfExists('roles_screens_hotfields');
    }
};
