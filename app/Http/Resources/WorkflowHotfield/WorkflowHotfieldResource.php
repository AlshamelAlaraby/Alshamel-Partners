<?php

namespace App\Http\Resources\WorkflowHotfield;

use App\Http\Resources\Roles\RoleResource;
use App\Http\Resources\Screen\ScreenResource;
use App\Http\Resources\Hotfield\HotfieldResource;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkflowHotfieldResource extends JsonResource
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
            "workflow" => $this->workflow_id ,
            "hotfield" => $this->hotfield_id ,
        ];
    }

}
