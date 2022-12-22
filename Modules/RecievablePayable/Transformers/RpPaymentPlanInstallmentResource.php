<?php

namespace Modules\RecievablePayable\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RpPaymentPlanInstallmentResource extends JsonResource
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
            "installment_payment_plan_detail_ln_no"=>$this->installment_payment_plan_detail_ln_no,
            "v_date"=>$this->v_date,
            "due_date"=>$this->due_date,
            "total_amount"=>$this->total_amount,
            "paid_amount"=>$this->paid_amount,
            "installment_status_id"=>$this->installment_status_id,
            "doc_type"=>$this->doc_type,
            "screen_id"=>$this->screen_id,
            "module_id"=>$this->module_id,
            "ref_id"=>$this->ref_id,
            "rp_code"=>$this->rp_code,
        ];
    }
}
