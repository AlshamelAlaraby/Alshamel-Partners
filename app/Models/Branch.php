<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;

class Branch extends Model
{
    use HasFactory, LogTrait,ConnTrait;

    protected $guarded = ['id'];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    public function stores()
    {
        return $this->hasMany(Store::class);
    }

    public function serials()
    {
        return $this->hasMany(Serial::class);
    }

    public function hasChildren()
    {
        $h = $this->stores()->count() > 0 || $this->serials()->count() > 0;
        return $h;
    }

    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = auth()->user()->id ?? 0;
        $activity->causer_type = auth()->user()->role ?? "admin";
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Branch')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
