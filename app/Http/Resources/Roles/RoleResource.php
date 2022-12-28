<?php

namespace App\Http\Resources\Roles;

use App\Http\Resources\RoleTypes\RoleTypeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'name_e'=>$this->name_e,
            'roletype'=> new RoleTypeResource($this->roleType),
        ];
    }
}
