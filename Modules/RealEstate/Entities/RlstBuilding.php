<?php

namespace Modules\RealEstate\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RlstBuilding extends Model
{
    use HasFactory, LogTrait;

    protected $guarded = ['id'];

    public function setPropertiesAttribute($value)
    {
        $this->attributes['properties'] = json_encode($value);
    }
    public function getPropertiesAttribute($value)
    {
        return json_decode($value);
    }

    public function setAttachmentsAttribute($value)
    {
        $this->attributes['attachments'] = json_encode($value);
    }
    public function getAttachmentsAttribute($value)
    {
        return json_decode($value);
    }


    public function buildingWallet()
    {
        return $this->hasMany(\Modules\RealEstate\Entities\RlstBuildingWallet::class);
    }

}
