<?php

namespace Modules\RealEstate\Entities;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class RlstOwner extends Model
{
    use HasFactory;

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

    protected $casts = [
        'categories' => 'json',
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

    // attributes

    protected function categories(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_encode($value),
            set: fn ($value) => json_decode($value),
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
}
