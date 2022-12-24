<?php

namespace App\Http\Resources\RoleScreenHotfield;

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
            "role_id" => $this->role_id,
            "workflow_id" => $this->workflow_id,
            "hotfield_id" => $this->hotfield_id
        ];
    }

}
