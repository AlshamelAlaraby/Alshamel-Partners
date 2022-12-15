<?php

namespace Modules\RecievablePayable\Http\Requests;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class EditRpInstallmentPaymentPlanDetailRequest extends FormRequest
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
            'installment_payment_type_id' => 'required',
            'ln_no' => 'required',
            'is_fixed' => [],
            'installment_payment_type_per' => [],
            'installment_payment_type_amount' => [],
            'installment_payment_type_freq' => [],
            'interest_per' => [],
            'interest_value' => [],
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
