<?php

namespace App\Models;

use App\Models\Employee;
use App\Traits\LogTrait;
use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Activitylog\LogOptions;


class User extends Authenticatable implements HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, MediaTrait, LogsActivity, CausesActivity,LogTrait;

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


    public function getActivitylogOptions() : LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('User')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

}
