<?php

namespace App\Http\Resources\Governorate;

use App\Http\Resources\Country\CountryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class GovernorateResource extends JsonResource
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
            'name' => $this->name,
            'name_e' => $this->name_e,
            'is_default' => $this->is_default ? true : false,
            'is_active' => $this->is_active,
            "phone_key" => $this->phone_key,
            "country" => new CountryResource($this->country),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
