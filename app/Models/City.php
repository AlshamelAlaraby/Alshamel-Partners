<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory, LogTrait,ConnTrait;

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

    public function avenues()
    {
        return $this->hasMany(Avenue::class);
    }

    public function hasChildren()
    {
        if ($this->avenues()->count() > 0) {
            return true;
        }
        return false;
    }

    public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
    {
        $user = @auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('City')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

}
