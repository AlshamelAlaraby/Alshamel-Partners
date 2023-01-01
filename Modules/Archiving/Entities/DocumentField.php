<?php

namespace Modules\Archiving\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DocumentField extends Model
{
    use HasFactory,LogTrait;

    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\DocumentFieldFactory::new();
    }

    public function archiveClosedReference()
    {
        return $this->hasMany(ClosedReference::class, 'docfields_id', 'id');
    }
}
