<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;

class Role extends Model
{
    use HasFactory, LogTrait,ConnTrait;
    protected $guarded = ['id'];

    public function roleType()
    {
        return $this->belongsTo(RoleType::class,'roletype_id','id');
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Role')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
