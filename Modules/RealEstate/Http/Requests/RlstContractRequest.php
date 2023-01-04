<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstContractRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "date" => "required|date",
            "salesman_id" => [
                "required",
                // "exists:tree_properties,id,deleted_at,null"
            ],
            "reservation_id" => [
                "required",
                // "exists:tree_properties,id,deleted_at,null"
            ],
            "customer_id" => [
                "required",
                // "exists:tree_properties,id,deleted_at,null"
            ],
            // "payment_plan_id" => "required|numeric",
        ];
    }

    public function messages()
    {
        return [
            "date.required" => __("message.field is required"),
            "date.date" => __("message.field must be date"),
            "salesman_id.required" => __("message.field is required"),
            "salesman_id.exists" => __("message.field must be exists"),
            "reservation_id.required" => __("message.field is required"),
            "reservation_id.exists" => __("message.field must be exists"),
            "customer_id.required" => __("message.field is required"),
            "customer_id.exists" => __("message.field must be exists"),
            "payment_plan_id.required" => __("message.field is required"),
            "payment_plan_id.numeric" => __("message.field must be numeric"),

        ];
    }
}
