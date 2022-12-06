<?php

namespace App\Models;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements \Spatie\MediaLibrary\HasMedia

{
    use HasApiTokens, HasFactory, Notifiable, \App\Traits\MediaTrait;

    protected $fillable = [
        'name',
        'name_e',
        'email',
        'is_active',
        'password',
        'active',
        "employee_id",
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => '\App\Enums\IsActive',
    ];

    protected function password(): Attribute
    {
        return Attribute::make(
            set:fn($value) => bcrypt($value),
        );
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

}
