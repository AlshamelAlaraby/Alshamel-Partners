<?php

namespace App\Http\Resources\Salesman;

use App\Http\Resources\Roles\RoleResource;
use Illuminate\Http\Resources\Json\JsonResource;

class SalesmanResource extends JsonResource
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
            "name" => $this->name ,
            "name_e" => $this->name_e ,
            "salesmanType" => $this->salesmanType
        ];
    }
}
