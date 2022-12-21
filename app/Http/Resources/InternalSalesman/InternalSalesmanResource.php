<?php

namespace App\Http\Resources\InternalSalesman;

use Illuminate\Http\Resources\Json\JsonResource;

class InternalSalesmanResource extends JsonResource
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
            'employee_id'=>$this->employee_id,
            'is_active'=>$this->is_active,
        ];
    }
}
