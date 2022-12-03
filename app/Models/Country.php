<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Country extends Model implements \Spatie\MediaLibrary\HasMedia

{

    use HasFactory, \App\Traits\MediaTrait, SoftDeletes;

    protected $fillable = [
        'name',
        'name_e',
        'is_active',
        'is_default',
        "phone_key",
        'national_id_length',
        "long_name",
        "long_name_e",
        "short_code",
    ];

    protected $casts = [
        'is_active' => 'App\Enums\IsActive',
        "is_default" => '\App\Enums\IsDefault',
    ];

    public function governorates()
    {
        return $this->hasMany(\App\Models\Governorate::class);
    }

}
