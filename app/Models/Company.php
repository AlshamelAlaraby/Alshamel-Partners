<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function PhotoUrl($photo)
    {
        return Storage::disk("companies")->url($photo);
    }




    public function stores()
    {
        return $this->hasMany(Store::class);
    }

    public function serials()
    {
        return $this->hasMany(Serial::class);
    }

    public function hasChildren(){
        $h = $this->stores ()->count () > 0 ||
             $this->serials ()->count () > 0
        ;
        return $h;
    }

}
