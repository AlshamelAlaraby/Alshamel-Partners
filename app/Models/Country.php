<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\MediaLibrary\HasMedia;

class Country extends Model implements HasMedia
{

    use HasFactory, MediaTrait, SoftDeletes, LogTrait,ConnTrait;

    protected $fillable = [
        'name',
        'name_e',
        'is_active',
        'is_default',
        "phone_key",
        'national_id_length',
        "long_name",
        "long_name_e",
        "short_code",
    ];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
        "is_default" => '\App\Enums\IsDefault',
    ];

    // relations
    public function governorates()
    {
        return $this->hasMany(\App\Models\Governorate::class);
    }

    public function externalSalesmen()
    {
        return $this->hasMany(\App\Models\ExternalSalesmen::class);
    }

    public function avenues()
    {
        return $this->hasMany(\App\Models\Avenue::class);
    }

    public function cities()
    {
        return $this->hasMany(\App\Models\City::class);
    }

    public function rlstOwners()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstOwner::class);
    }

    public function banks()
    {
        return $this->hasMany(\App\Models\Bank::class);
    }
    // logs activities

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Country')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function hasChildren()
    {
        $h = $this->avenues()->count() > 0 ||
        $this->governorates()->count() > 0 ||
        $this->cities()->count() > 0 ||
        $this->banks()->count() > 0 ||
        $this->rlstOwners()->count() > 0 ||
        $this->externalSalesmen()->count() > 0;
        return $h;
    }
}
