<?php

namespace App\Http\Resources\Branch;

use Illuminate\Http\Resources\Json\JsonResource;

class BranchResource extends JsonResource
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
            'company'=>$this->company_id,
            'name'=>$this->name,
            'name_e'=>$this->name_e,
            'isActive'=>$this->is_active
        ];
    }
}
