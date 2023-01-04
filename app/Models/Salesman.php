<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\RealEstate\Entities\RlstReservation;
use Spatie\Activitylog\LogOptions;

class Salesman extends Model
{
    use HasFactory, SoftDeletes, LogTrait,ConnTrait;

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

    public function reservations()
    {
        return $this->hasMany(RlstReservation::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Salesman')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

}
