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

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function avenues(){
        return $this->hasMany (Avenue::class);
    }

    public function hasChildren(){
        if ($this->avenues()->count() > 0){
            return true;
        }
        return false;
    }

}
