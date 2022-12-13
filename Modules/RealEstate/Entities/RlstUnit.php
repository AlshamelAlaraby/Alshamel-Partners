<?php

namespace Modules\RealEstate\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RlstUnit extends Model
{
    use HasFactory,LogTrait;

    protected static function newFactory()
    {
        return \Modules\RealEstate\Database\factories\RlstUnitFactory::new();
    }

    protected $guarded = ['id'];
}
