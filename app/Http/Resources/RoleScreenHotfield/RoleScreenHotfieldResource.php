<?php

namespace App\Http\Resources\RoleScreenHotfield;

use App\Http\Resources\Roles\RoleResource;
use App\Http\Resources\Screen\ScreenResource;
use App\Http\Resources\Hotfield\HotfieldResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleScreenHotfieldResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "role" => new RoleResource($this->role),
            // "screen" => new ScreenResource($this->screen),
            // "hotfield" => new HotfieldResource($this->hotfield),
        ];
    }

}
