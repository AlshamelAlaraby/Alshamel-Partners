<?php

namespace Modules\RealEstate\Http\Requests;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class CreateRlstContractRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "date" => "required|date",
            "salesman_id" => "required|exists:salesmen,id",
            "reservation_id" => "required|exists:rlst_reservations,id",
            "customer_id" => "required|exists:rlst_customers,id",
            "payment_plan_id" => "required|numeric",
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
