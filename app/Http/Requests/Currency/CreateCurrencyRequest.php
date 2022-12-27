<?php

namespace App\Http\Requests\Currency;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateCurrencyRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|unique:currencies,name',
            'name_e' => 'required|unique:currencies,name_e',
            'symbol' => 'required|unique:currencies,symbol',
            'symbol_e' => 'required|unique:currencies,symbol_e',
            'code' => 'required|unique:currencies,code',
            'code_e' => 'required|unique:currencies,code_e',
            'is_active' => 'nullable|in:0,1',
            "is_default" => "required|in:0,1",
            'fraction' => [],
            'fraction_e' => [],
            'fraction_no' => [],
        ];
    }

}
