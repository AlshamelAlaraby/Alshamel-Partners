<?php

namespace Modules\RealEstate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RlstUnitResource extends JsonResource
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
            'code'=>$this->code,
            'name' => $this->name,
            'name_e' => $this->name_e,
            'description'=>$this->description,
            'description_e'=>$this->description_e,
            'unit_ty'=>$this->unit_ty,
            'status_date'=>$this->status_date,
            'unit_area'=>$this->unit_area,
            'building_id'=>$this->building_id,
            'owner_id'=>$this->owner_id,
            'currency_id'=>$this->currency_id,
            'wallet_id'=>$this->wallet_id,
            'unitstatus_id'=>$this->unitstatus_id,
            'commission_ty'=>$this->commission_ty,
            'commission_value'=>$this->commission_value,
            'price'=>$this->price,
            'rooms'=>$this->rooms,
            'path'=>$this->path,
            'view'=>$this->view,
            'floor'=>$this->floor,
            'rank'=>$this->rank,
        ];
    }
}
