<?php

namespace Modules\RecievablePayable\Http\Requests;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class EditRpPaymentPlanInstallmentRequest extends FormRequest
{
    use ValidationTrait;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'installment_payment_plan_id' => 'required',
            'installment_payment_plan_detail_ln_no' => 'required',
            'v_date' => 'required',
            'due_date' => 'required',
            'total_amount' => 'required',
            'paid_amount' => 'required',
            'installment_status_id' => 'required',
            'doc_type' => 'required',
            'screen_id' => 'required',
            'module_id' => 'required',
            'ref_id' => 'required',
            'rp_code' => 'required',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

}
