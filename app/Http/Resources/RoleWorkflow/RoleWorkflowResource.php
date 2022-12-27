<?php

namespace App\Http\Resources\RoleWorkflow;

use App\Http\Resources\Roles\RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RoleWorkflowResource extends JsonResource
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
            'role' => new RoleResource($this->role),
            'workflow_id' => $this->workflow_id,
        ];
    }
}
