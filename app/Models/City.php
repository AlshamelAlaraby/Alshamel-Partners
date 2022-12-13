<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function governorate()
    {
        return $this->belongsTo(Governorate::class);
    }
    public function rlstOwners()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstOwner::class);
    }

}
