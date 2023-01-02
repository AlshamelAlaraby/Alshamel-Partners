<?php

namespace Modules\Archiving\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DocTypeField extends Model
{
    use HasFactory,LogTrait;

    protected $fillable = [
        'gen_doc_type_id',
        'doc_field_id',
        'field_order',
        'is_required',
        'field_characters',
    ];

    // relation
    public function genArchDocType()
    {
        return $this->belongsTo(GenDocType::class, 'gen_doc_type_id', 'id');
    }

    public function archDocType()
    {
        return $this->belongsTo(DocumentField::class, 'doc_field_id', 'id');
    }

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\DocTypeFieldFactory::new();
    }
}
