<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstContractRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "date" => "nullable|date",
            "salesman_id" => "nullable|exists:salesmen,id",
            "reservation_id" => "nullable|exists:rlst_reservations,id",
            "customer_id" => "nullable|exists:rlst_customers,id",
            "payment_plan_id" => "nullable|numeric",
        ];
    }


    public function messages()
    {
        return [
            "date.date" => __("message.field must be date"),
            "salesman_id.exists" => __("message.field must be exists"),
            "reservation_id.exists" => __("message.field must be exists"),
            "customer_id.exists" => __("message.field must be exists"),
            "payment_plan_id.numeric" => __("message.field must be numeric"),
        ];
    }
}
