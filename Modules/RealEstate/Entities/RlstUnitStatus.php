<?php

namespace Modules\RealEstate\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RlstUnitStatus extends Model
{
    use HasFactory,LogTrait;

    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Modules\RealEstate\Database\factories\RlstUnitStatusFactory::new();
    }
}
