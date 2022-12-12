<?php

namespace App\Http\Resources\ExternalSalesmen;

use App\Http\Resources\Country\CountryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ExternalSalesmenResource extends JsonResource
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
            'id' => $this->id,
            'phone' => $this->phone,
            'address' => $this->address,
            'rp_code' => $this->rp_code,
            'email' => $this->email,
            'is_active' => $this->is_active,
            'national_id' => $this->national_id,
            'country' => new CountryResource($this->country),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
