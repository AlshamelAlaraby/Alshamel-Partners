<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstReservationUnitRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "unit_code" => "nullable|exists:rlst_reservations,id",

        ];
    }


    public function messages()
    {
        return [
            "unit_code.exists" => __("message.field must be exists")
        ];
    }
}
