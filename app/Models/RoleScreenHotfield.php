<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;

class RoleScreenHotfield extends Model
{
    use HasFactory;
    use SoftDeletes;
    use LogsActivity;
    use CausesActivity;

    protected $table = 'roles_screens_hotfields';

    protected $guarded = ["id"];


    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function screen()
    {
        return $this->belongsTo(Screen::class);
    }

    public function hotfield()
    {
        return $this->belongsTo(Hotfield::class);
    }


    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = auth()->user()->id ?? 0 ;
        $activity->causer_type = auth()->user()->role ?? "admin";
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user =  auth()->user()->id ?? "system";

        return LogOptions::defaults()
            ->logAll()
            ->useLogName('RoleScreensHotfield')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }


    public function scopeFilter($query, $request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->search) {

                $q->whereHas('role', function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->search . '%');
                    $q->orWhere('name_e', 'like', '%' . $request->search . '%');
                });

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

        });

    }
}