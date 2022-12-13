<?php

namespace Modules\RealEstate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RlstWalletBuildingResource extends JsonResource
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
            "wallet_Id"=>$this->wallet_Id,
            "building_id"=>$this->building_id,
            "item_id"=>$this->item_id,
            "Bu_ty"=>$this->Bu_ty,
        ];
    }
}
