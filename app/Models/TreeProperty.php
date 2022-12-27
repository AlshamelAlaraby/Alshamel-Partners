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
    use HasFactory, LogsActivity, CausesActivity;

    protected $guarded = ['id'];
    protected $appends = ['haveChildren'];

    public function unitContracts()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstUnitContract::class, 'unit_code');
    }

    public function tapActivity(Activity $activity, string $eventName)
    {
        $activity->causer_id = @auth()->user()->id ?: 0;
        $activity->causer_type = @auth()->user()->role ?: "admin";
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = @auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Employee')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function getHaveChildrenAttribute()
    {
        return static::where("parent_id", $this->id)->count() > 0;
    }

    public function scopeFilter($query, $request)
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

    public function children(){
        return $this->hasMany (TreeProperty::class,'parent_id');
    }

    public function hasChildren(){
        $h = $this->children ()->count () > 0 ;
        return $h;
    }
}
