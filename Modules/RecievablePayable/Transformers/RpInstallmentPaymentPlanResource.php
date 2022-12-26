<?php

namespace Modules\RecievablePayable\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RpInstallmentPaymentPlanResource extends JsonResource
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
            "is_default"=>$this->is_default,
            "is_active"=>$this->is_active,
            "description"=>$this->description,
            "description_e"=>$this->description_e,
            "start_date"=>$this->start_date,
            "installment_payment_type_id"=>$this->installment_payment_type_id,
        ];
    }
}
