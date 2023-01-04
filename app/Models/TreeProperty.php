<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;

class TreeProperty extends Model
{
    use HasFactory, LogTrait,SoftDeletes,ConnTrait;

    protected $guarded = ['id'];
    protected $appends = ['haveChildren'];

    public function unitContracts()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstUnitContract::class, 'unit_code');
    }

    public function getActivitylogOptions(): LogOptions
    {
        $user = @auth()->user()->id ?: "system";

        return \Spatie\Activitylog\LogOptions::defaults()
            ->logAll()
            ->useLogName('Tree Property')
            ->setDescriptionForEvent(fn(string $eventName) => "This model has been {$eventName} by ($user)");
    }

    public function getHaveChildrenAttribute()
    {
        return static::where("parent_id", $this->id)->count() > 0;
    }

    public function children()
    {
        return $this->hasMany(TreeProperty::class, 'parent_id');
    }

    public function hasChildren()
    {
        $h = $this->children()->count() > 0;
        return $h;
    }
}
