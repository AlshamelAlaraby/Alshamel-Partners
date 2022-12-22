<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstUnitContractRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "unit_code" => "nullable|exists:tree_properties,id",

        ];
    }


    public function messages()
    {
        return [
            "unit_code.exists" => __("message.field must be exists")
        ];
    }
}
