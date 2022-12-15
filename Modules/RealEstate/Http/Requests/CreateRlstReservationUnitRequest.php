<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRlstReservationUnitRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "unit_code" => "required|exists:rlst_reservations,id",

        ];
    }


    public function messages()
    {
        return [
            "unit_code.required" => __("message.field is required"),
            "unit_code.exists" => __("message.field must be exists")
        ];
    }
}