<?php

namespace Modules\RealEstate\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RlstBuilding extends Model
{
    use HasFactory,LogTrait;

    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Modules\RealEstate\Database\factories\RlstBuildingFactory::new();
    }

    public function setPropertiesAttribute($value){
        $this->attributes['properties'] = json_encode ($value);
    }
    public function getPropertiesAttribute($value){
        return json_decode ($value);
    }

    public function setAttachmentsAttribute($value){
        $this->attributes['attachments'] = json_encode ($value);
    }
    public function getAttachmentsAttribute($value){
        return json_decode ($value);
    }

}
