<?php

namespace App\Models;

use App\Traits\LogTrait;
use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;

class BankAccount extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, LogTrait, MediaTrait;

    protected $fillable = [
        'bank_id',
        'account_number',
        'phone',
        'address',
        'email',
        'emp_id',
        'rp_code',
    ];

    public function bank()
    {
        return $this->belongsTo(Bank::class);
    }

}
