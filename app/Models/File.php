<?php

namespace App\Models;

use App\Traits\ConnTrait;
use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class File extends Model implements \Spatie\MediaLibrary\HasMedia

{
    use HasFactory, MediaTrait, SoftDeletes,ConnTrait;

}
