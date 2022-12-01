<?php

namespace App\Models;

use App\Traits\MediaTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model implements \Spatie\MediaLibrary\HasMedia

{
    use HasFactory, MediaTrait;

}
