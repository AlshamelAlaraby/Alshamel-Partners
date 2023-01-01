<?php

namespace Modules\Archiving\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GenDocType extends Model
{
    use HasFactory,LogTrait;

    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\GenDocTypeFactory::new();
    }

    public function parent()
    {
        return $this->belongsTo(GenDocType::class,'parent_id','id');
    }
}
