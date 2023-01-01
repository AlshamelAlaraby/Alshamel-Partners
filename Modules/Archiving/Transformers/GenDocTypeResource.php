<?php

namespace Modules\Archiving\Transformers;


use Illuminate\Http\Resources\Json\JsonResource;

class GenDocTypeResource extends JsonResource
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
            'is_valid' => $this->is_valid,
            'parent_id' => new GenDocRelationResource($this->parent),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
