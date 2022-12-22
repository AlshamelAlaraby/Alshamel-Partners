<?php

namespace Modules\RealEstate\Entities;

use App\Models\Salesman;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class RlstContract extends Model
{
    use HasFactory, SoftDeletes, LogTrait;

    protected $fillable = [
        "salesman_id",
        "customer_id",
        "payment_plan_id",
        "reservation_id",
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

    public function reservation()
    {
        return $this->belongsTo(\Modules\RealEstate\Entities\RlstReservation::class);
    }

    // public function paymentPlan()
    // {
    //     return $this->belongsTo(RpInstallmentPaymentPlanDetail::class);
    // }

    // scopes

    public function scopeSearch($query, $request)
    {
        return $query->where(function ($q) use ($request) {

            if ($request->search && $request->columns) {
                foreach ($request->columns as $column) {
                    $q->orWhere($column, 'like', '%' . $request->search . '%');
                }
            }

            if ($request->salesman_id) {
                $q->where('salesman_id', $request->salesman_id);
            }

            if ($request->customer_id) {
                $q->where('customer_id', $request->customer_id);
            }

            if ($request->reservation_id) {
                $q->where('reservation_id', $request->reservation_id);
            }
        });
    }

    // activities

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Rlst Contracts')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
