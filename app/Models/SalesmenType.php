<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SalesmenType extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'salesmen_types';

    protected $fillable = [
        'name',
        'name_e',
        'is_employee',
    ];

    protected $casts = [
        'is_employee' => '\App\Enums\IsDefault',
    ];

}
