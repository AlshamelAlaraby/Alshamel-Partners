<?php

namespace App\Http\Requests\Salesman;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSalesmanRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "salesman_type_id"       => "exists:salesmen_types,id" ,
            "name"                  => "string|max:100" ,
            "name_e"                => "string|max:100" ,
        ];
    }
}
