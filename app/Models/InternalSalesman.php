<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;

class InternalSalesman extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;
    use CausesActivity;

    protected $table = 'internal_salesman';

    protected $guarded = ["id"];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
    ];

    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = auth()->user()->id ?? 0;
        $activity->causer_type = auth()->user()->role ?? "admin";
    }


    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
    public function getActivitylogOptions(): LogOptions
    {
        $user =  auth()->user()->id ?? "system";

        return LogOptions::defaults()
            ->logAll()
            ->useLogName('InternalSalesman')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }


    public function scopeFilter($query, $request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->search) {

                $q->where('name', 'like', '%' . $request->search . '%');
                $q->orWhere('name_e', 'like', '%' . $request->search . '%');
            }


            if ($request->column_name && $request->column_value) {

                $dataSearch = explode(".", $request->column_name);
                if (count($dataSearch) == 1) {
                    $q->where($request->column_name, "like",  '%' . $request->column_value . '%');
                }

                if (count($dataSearch) == 2) {
                    $q->whereHas($dataSearch[0], function ($q) use ($request, $dataSearch) {
                        $q->where($dataSearch[1], 'like', '%' . $request->column_value . '%');;
                    });
                }
            }

            if (count($_GET) == 0) {
                return self::all();
            }
        });
    }
}