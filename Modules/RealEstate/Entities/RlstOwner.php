<?php

namespace Modules\RealEstate\Entities;

use App\Models\Country;
use Spatie\Activitylog\LogOptions;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Contracts\Activity;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\Traits\CausesActivity;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RlstOwner extends Model
{
    use HasFactory, SoftDeletes, LogsActivity, CausesActivity;

    protected $fillable = [
        'name',
        'name_e',
        'phone',
        'email',
        'country_id',
        'city_id',
        'rb_code',
        'nationality_id',
        'bank_account_id',
        'contact_person',
        'contact_phones',
        'national_id',
        'whatsapp',
        'categories',

    ];


    // relations
    public function country()
    {
        return $this->belongsTo(\App\Models\Country::class);
    }

    public function city()
    {
        return $this->belongsTo(\App\Models\City::class);
    }

    public function nationality()
    {
        return $this->belongsTo(\App\Models\Country::class, 'nationality_id');
    }


    public function walletOwner()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstWalletOwner::class);
    }

    // attributes

    protected function categories(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value),
            set: fn ($value) => json_encode($value),
        );
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

            if ($request->country_id) {
                $q->where('country_id', $request->country_id);
            }

            if ($request->nationality_id) {
                $q->where('nationality_id', $request->nationality_id);
            }
            if ($request->city_id) {
                $q->where('city_id', $request->city_id);
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
            ->useLogName('Real Estate Owners')
            ->setDescriptionForEvent(fn (string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
