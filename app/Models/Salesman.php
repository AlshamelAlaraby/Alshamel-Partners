<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class Salesman extends Model
{
    use HasFactory, SoftDeletes, LogsActivity, CausesActivity;

    protected $fillable = [
        'name',
        'name_e',
        'salesman_type_id',
    ];

    protected $table = "salesmen";


    // relations
    public function salesmanType()
    {
        return $this->belongsTo(SalesmenType::class, 'salesman_type_id');
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
            ->useLogName('Salesman')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }

    // scopes

    public function scopeSearch($query, $request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }
            }

            if ($request->salesman_type_id) {
                $q->where('salesmen_type_id', $request->salesman_type_id);
            }
        });
    }
}
