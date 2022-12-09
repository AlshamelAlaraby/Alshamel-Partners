<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Contracts\Activity;
class RoleWorkflow extends Model
{
    use HasFactory, LogsActivity, CausesActivity;
    protected $guarded = ['id'];

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
            ->useLogName('Employee')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function scopeFilter($query,$request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->role_id) {
                $q->where('role_id', $request->role_id);
            }
            if ($request->workflow_id) {
                $q->where('workflow_id', $request->workflow_id);
            }
        });
    }
}
