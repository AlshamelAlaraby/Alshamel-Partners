<?php

namespace Modules\RealEstate\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;

class RlstWallet extends Model
{
    use HasFactory, LogsActivity, CausesActivity, SoftDeletes;

    protected $fillable = [
        'name',
        'name_e',

    ];

    // relations

    public function walletOwner()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstWalletOwner::class);
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
            ->useLogName('Real Estate Wallets')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
