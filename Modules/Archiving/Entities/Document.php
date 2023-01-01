<?php

namespace Modules\Archiving\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Document extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\DocumentFactory::new();
    }
    public function genArchDocType()
    {
        return $this->belongsTo(GenDocType::class, 'gen_doc_type', 'id');
    }
    public function docStatus()
    {
        return $this->belongsTo(DocStatus::class, 'doc_status', 'id');
    }
}
