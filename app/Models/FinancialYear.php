<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Contracts\Activity;
class FinancialYear extends Model
{
    use HasFactory, SoftDeletes ,LogsActivity, CausesActivity;

    protected $fillable = [
        'name',
        'name_e',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
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

            if ($request->start_date && $request->end_date) {
                $q->whereBetween('start_date', [$request->start_date, $request->end_date]);
            }

            if ($request->start_date && !$request->end_date) {
                $q->where('start_date', '>=', $request->start_date);
            }

            if (!$request->start_date && $request->end_date) {
                $q->where('start_date', '<=', $request->end_date);
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
