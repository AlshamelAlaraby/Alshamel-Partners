<?php

namespace Modules\RealEstate\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class RlstUnitStatus extends Model
{
    use HasFactory, LogTrait, SoftDeletes;

    protected $fillable = [
        'name',
        'name_e',
    ];

    // relations

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Real Estate Unit Status')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function units()
    {
        return $this->hasMany(RlstUnit::class);
    }

}
