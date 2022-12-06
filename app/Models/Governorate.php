<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Governorate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'name_e',
        'country_id',
        'is_active',
        'is_default',
        "phone_key"
    ];

    protected $casts = [
        'is_active' => '\App\Enums\IsActive',
        'is_default' => '\App\Enums\IsDefault',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    public function cities()
    {
        return $this->hasMany(City::class);
    }

}
