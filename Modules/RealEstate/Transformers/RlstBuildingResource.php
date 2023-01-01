<?php

namespace Modules\RealEstate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RlstBuildingResource extends JsonResource
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
            "id"=>$this->id,
            "name"=>$this->name,
            "name_e"=>$this->name_e,
            "description"=>$this->description,
            "description_e"=>$this->description_e,
            "land_area"=>$this->land_area,
            "building_area"=>$this->building_area,
            "construction_year"=>$this->construction_year,
            "project_id"=>$this->project_id,
            "country_id"=>$this->country_id,
            "city_id"=>$this->city_id,
            "region_id"=>$this->region_id,
            "avenue_id"=>$this->avenue_id,
            "lng"=>$this->lng,
            "lat"=>$this->lat,
            "properties"=>$this->properties,
            "attachments"=>$this->attachments,
            "module_id"=>$this->module_id,
            "created_at"=>$this->created_at,
            "updated_at"=>$this->updated_at
        ];
    }
}
