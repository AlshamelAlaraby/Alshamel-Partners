<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ExternalSalesmen extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'external_salesmen';

    protected $fillable = [
        'phone',
        'address',
        'rp_code',
        'email',
        'is_active',
        'national_id',
        'country_id',
    ];

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

}
