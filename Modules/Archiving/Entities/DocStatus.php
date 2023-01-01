<?php

namespace Modules\Archiving\Entities;

use App\Traits\LogTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DocStatus extends Model
{
    use HasFactory,LogTrait;

    protected $fillable = [
        'name',
        'name_e',
    ];

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\DocStatusFactory::new();
    }
}
