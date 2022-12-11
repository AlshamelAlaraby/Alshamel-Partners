<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
class Branch extends Model
{
    use HasFactory, LogsActivity, CausesActivity;

    protected $guarded = ['id'];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    public function stores()
    {
        return $this->hasMany(Store::class);
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
