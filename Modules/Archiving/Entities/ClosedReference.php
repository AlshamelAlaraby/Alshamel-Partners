<?php

namespace Modules\Archiving\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ClosedReference extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\ClosedReferenceFactory::new();
    }
    public function documentField()
    {
        return $this->belongsTo(DocumentField::class, 'docfields_id', 'id');
    }
}
