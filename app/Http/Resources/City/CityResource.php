<?php

namespace App\Http\Resources\City;

use App\Http\Resources\Governorate\GovernorateResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'name_e' => $this->name_e,
            "governorate" => new GovernorateResource($this->governorate),
            'isActive' => $this->is_active ? 'active' : 'inActive',
        ];
    }
}
