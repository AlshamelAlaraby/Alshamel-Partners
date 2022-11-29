<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Serial extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'is_default' => 'App\Enums\IsDefault',
    ];
}
