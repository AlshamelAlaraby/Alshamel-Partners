<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class PaymentType extends Model
{
    use HasFactory, SoftDeletes, LogsActivity, CausesActivity;

    protected $fillable = [
        'name',
        'name_e',
        'is_default',
    ];

    protected $casts = [
        'is_default' => '\App\Enums\IsDefault',
    ];

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
            ->useLogName('Payment Type')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
