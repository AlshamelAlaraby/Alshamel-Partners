<?php

namespace Modules\RealEstate\Entities;

use App\Models\Currency;
use Spatie\Activitylog\LogOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\CausesActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RlstInstallment extends Model
{
    use HasFactory, SoftDeletes, LogsActivity, CausesActivity;

    protected $fillable = [
        'date',
        'pay_type',
        'amount',
        "currency_id",
        "rest_amount"
    ];

    protected $casts = [
        'date' => 'date',
        'pay_type' => '\App\Enums\PayType',
        'amount' => 'float',
        "currency_id" => 'integer',
        "rest_amount" => 'float',
    ];

    // relations

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currency_id');
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

            if ($request->currency_id) {
                $q->where('currency_id', $request->currency_id);
            }
        });
    }

    // activities

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
            ->useLogName('Real Estate Installmentss')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
