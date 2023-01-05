<?php

namespace Modules\RealEstate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RlstBuildingWalletResource extends JsonResource
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
            "id" => $this->id,
            "wallet" => new RlstWalletResource($this->wallet),
            "building" => new RlstBuildingResource($this->building),
            "bu_ty" => $this->bu_ty,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
