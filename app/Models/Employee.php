<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class Employee extends Model
{
    use HasFactory, SoftDeletes, LogTrait,ConnTrait;

    protected $fillable = [
        'name',
        'name_e',
    ];

    public function user()
    {
        return $this->hasOne(User::class);
    }

    public function internalSalesman()
    {
        return $this->hasOne(InternalSalesman::class);
    }

    public function hasChildren()
    {
        $h = $this->internalSalesman()->exists();
        return $h;
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Employee')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
}
