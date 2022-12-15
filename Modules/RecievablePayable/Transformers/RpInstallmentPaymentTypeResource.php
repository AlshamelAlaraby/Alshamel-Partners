<?php

namespace Modules\RecievablePayable\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RpInstallmentPaymentTypeResource extends JsonResource
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
            "auto_freq"=>$this->auto_freq,
            "is_partially"=>$this->is_partially,
        ];
    }
}
