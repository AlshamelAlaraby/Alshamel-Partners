<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstInstallmentRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'date' => 'required|date',
            "pay_type" => "required|in:down_payment,quarter_per,half_per,year_per,installment",
            'amount' => 'required|numeric',
            "currency_id" => "required|integer|exists:currencies,id,deleted_at,null",
            'rest_amount' => 'required|numeric',

        ];
    }

    public function messages()
    {
        return [
            "date.required" => __("message.field is required"),
            "date.date" => __("message.field must be date"),
            "pay_type.required" => __("message.field is required"),
            "amount.required" => __("message.field is required"),
            "amount.numeric" => __("message.field must be numeric"),
            "currency_id.required" => __("message.field is required"),
            "currency_id.integer" => __("message.field must be integer"),
            "currency_id.exists" => __("message.field must be exists"),
            "rest_amount.required" => __("message.field is required"),
            "rest_amount.numeric" => __("message.field must be numeric"),
        ];
    }
}
