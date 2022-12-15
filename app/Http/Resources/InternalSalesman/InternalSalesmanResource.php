<?php

namespace App\Http\Resources\InternalSalesman;

use App\Http\Resources\Employee\EmployeeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class InternalSalesmanResource extends JsonResource
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
            "id" => $this->id,
            "employee" => new EmployeeResource($this->employee),
            "is_active" => $this->is_active,
            "created_at" => $this->created_at,
            "update_at" => $this->update_at,

        ];
    }
}
