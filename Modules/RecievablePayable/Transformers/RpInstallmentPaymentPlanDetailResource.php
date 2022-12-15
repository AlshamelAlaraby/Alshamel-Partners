<?php

namespace Modules\RecievablePayable\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RpInstallmentPaymentPlanDetailResource extends JsonResource
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
            "installment_payment_plan_id"=>$this->installment_payment_plan_id,
            "installment_payment_type_id"=>$this->installment_payment_type_id,
            "ln_no"=>$this->ln_no,
            "is_fixed"=>$this->is_fixed,
            "installment_payment_type_per"=>$this->installment_payment_type_per,
            "installment_payment_type_amount"=>$this->installment_payment_type_amount,
            "installment_payment_type_freq"=>$this->installment_payment_type_freq,
            "interest_per"=>$this->interest_per,
            "interest_value"=>$this->interest_value,
        ];
    }
}
