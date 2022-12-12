<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class TreeProperty extends Model
{
    use HasFactory,SoftDeletes ,LogsActivity, CausesActivity;

    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = auth()->user()->id ?: 0;
        $activity->causer_type = auth()->user()->role ?: "admin";
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Employee')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function scopeFilter($query,$request)
    {
        return $query->where(function ($q) use ($request) {
            if ($request->search) {
                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }

            if ($request->name) {
                $q->orWhere('name', 'like', '%' . $request->name . '%');
            }

            if ($request->name_e) {
                $q->orWhere('name_e', 'like', '%' . $request->name_e . '%');
            }

        });
    }
}
