<?php

namespace App\Http\Resources\RoleWorkflowButton;

use App\Http\Resources\Roles\RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleWorkflowButtonResource extends JsonResource
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
            // "workflow" => new WorkflowResource($this->workflow),
            // "button" => new ButtonResource($this->button),
        ];
    }
}
