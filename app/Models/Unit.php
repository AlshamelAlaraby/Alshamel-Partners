<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Contracts\Activity;

class Unit extends Model
{
    use HasFactory, SoftDeletes ,LogsActivity, CausesActivity;

    protected $table = 'units';
    protected $fillable = ['name', 'name_e', 'is_active'];

    protected $casts = [
        'is_active' => '\App\Enums\IsActive',
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

            if ($request->is_active) {
                $q->where('is_active', $request->is_active);
            }
        });
    }
}
