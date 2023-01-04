<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;

class Serial extends Model
{
    use HasFactory, LogTrait,ConnTrait;

    protected $guarded = ['id'];

    protected $casts = [
        'is_default' => 'App\Enums\IsDefault',
    ];

    public function getActivitylogOptions(): LogOptions
    {
        $user = auth()->user()->id ?? "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Serial')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
    public function store()
    {
        return $this->belongsTo(Store::class);
    }
}
