<?php

namespace Modules\RealEstate\Entities;

use App\Models\Salesman;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RlstUnitContract extends Model
{
    use HasFactory, SoftDeletes, LogTrait;

    protected $fillable = [
        'unit_code'
    ];


    // relations


    public function property()
    {
        return $this->belongsTo(\App\Models\TreeProperty::class, 'unit_code');
    }
}
