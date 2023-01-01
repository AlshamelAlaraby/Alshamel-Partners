<?php

namespace Modules\Archiving\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Department extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'name_e',
        'parent_id',
    ];

    protected static function newFactory()
    {
        return \Modules\Archiving\Database\factories\DepartmentFactory::new();
    }

    public function parent()
    {
        return $this->belongsTo(Department::class, 'parent_id', 'id');
    }
}
