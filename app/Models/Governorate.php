<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Governorate extends Model
{
    use HasFactory, LogTrait,ConnTrait;

    protected $fillable = [
        'name',
        'name_e',
        'country_id',
        'is_active',
        'is_default',
        "phone_key",
    ];

    protected $casts = [
        'is_active' => '\App\Enums\IsActive',
        'is_default' => '\App\Enums\IsDefault',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function cities()
    {
        return $this->hasMany(City::class);
    }

    public function avenues()
    {
        return $this->hasMany(Avenue::class);
    }

    public function hasChildren()
    {
        if ($this->avenues()->count() > 0 || $this->cities()->count() > 0) {
            return true;
        }
        return false;
    }

    public function getActivitylogOptions(): \Spatie\Activitylog\LogOptions
    {
        $user = @auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Governorate')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

}
