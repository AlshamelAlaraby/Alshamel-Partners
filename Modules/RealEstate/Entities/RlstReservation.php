<?php

namespace Modules\RealEstate\Entities;

use App\Models\Salesman;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class RlstReservation extends Model
{
    use HasFactory, SoftDeletes, LogTrait;

    protected $fillable = [
        "salesman_id",
        "customer_id",
        "payment_plan_id",
        "date",
    ];

    // relations

    public function salesman()
    {
        return $this->belongsTo(Salesman::class);
    }

    public function customer()
    {
        return $this->belongsTo(\Modules\RealEstate\Entities\RlstCustomer::class);
    }

    // public function paymentPlan()
    // {
    //     return $this->belongsTo(RpInstallmentPaymentPlanDetail::class);
    // }

    public function contracts()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstContracts::class);
    }

    public function units()
    {
        return $this->belongsToMany(RlstReservationUnit::class, "unit_code");
    }
    // scopes

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Rlst Reservation')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
