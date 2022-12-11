<?php

namespace App\Http\Resources\RoleWorkflow;

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
            'role_id'=>$this->role_id,
            'workflow_id'=>$this->workflow_id,
        ];
    }
}
