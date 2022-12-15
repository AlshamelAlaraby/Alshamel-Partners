<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstWalletRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'nullable|string|max:100',
            'name_e' => 'nullable|string|max:100',

        ];
    }


    public function messages()
    {
        return [
            'name.string' => __("message.field must be string"),
            'name.max' => __("message.field must be less than 100 characters"),
            'name_e.string' => __("message.field must be string"),
            'name_e.max' => __("message.field must be less than 100 characters"),

        ];
    }
}
