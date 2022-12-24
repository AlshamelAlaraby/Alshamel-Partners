<?php

namespace Modules\RealEstate\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class RlstUnit extends Model
{
    use HasFactory, SoftDeletes, LogTrait;

    protected $fillable = [
        "code",
        'name',
        "name_e",
        'description',
        'description_e',
        'unit_ty',
        'status_date',
        'unit_area',
        'building_id',
        'owner_id',
        'currency_id',
        'wallet_id',
        'unit_status_id',
        'commission_ty',
        'commission_value',
        'price',
        'rooms',
        'path',
        'view',
        'floor',
        'rank',

    ];

    // relations

    public function unitStatus()
    {
        return $this->belongsTo(\Modules\RealEstate\Entities\RlstUnitStatus::class);
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Rlst Unit')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
