<?php

namespace App\Models;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScreenTreeProperty extends Model
{
    use HasFactory,LogTrait;

    protected $guarded = ['id'];
}
