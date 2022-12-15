<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstInstallmentRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'date' => 'nullable|date',
            "pay_type" => "nullable|in:down_payment,quarter_per,half_per,year_per,installment",
            'amount' => 'nullable|numeric',
            "currency_id" => "nullable|integer|exists:currencies,id",
            'rest_amount' => 'nullable|numeric',

        ];
    }


    public function messages()
    {
        return [
            "date.date" => __("message.field must be date"),
            "pay_type.in" => __("message.field must be in"),
            "amount.numeric" => __("message.field must be numeric"),
            "currency_id.integer" => __("message.field must be integer"),
            "currency_id.exists" => __("message.field must be exists"),
            "rest_amount.numeric" => __("message.field must be numeric"),
        ];
    }
}
