<?php

namespace App\Http\Requests\Currency;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class CreateCurrencyRequest extends FormRequest
{
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
            'is_active' => 'required|boolean',
            'is_active' => 'nullable|in:active,inactive',
            "is_default" => "required|in:0,1",
            'fraction' => [],
            'Fraction_e' => [],
            'Fraction_no' => [],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /*
     * custom failedValidation response
     */
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(
            [
                'status' => 422,

                'success' => false,

                'message' => __('validation errors'),

                'data' => $validator->errors(),
            ]
        ));
    }

    /*
     * translate failedValidation messages
     */
    public function messages()
    {
        return [
            'required' => __('required'),
            'unique' => __('exists'),
        ];
    }
}
