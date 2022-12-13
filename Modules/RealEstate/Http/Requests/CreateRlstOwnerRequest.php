<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRlstOwnerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:100',
            'name_e' => 'required|string|max:100',
            'phone' => 'required|string|max:20',
            'email' => 'required|string|max:255',
            'country_id' => 'required|integer',
            'city_id' => 'required|integer',
            'rb_code' => 'required|string|max:255',

        ];
    }

}
