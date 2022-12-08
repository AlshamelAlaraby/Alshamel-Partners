<?php

namespace App\Http\Requests\ExternalSalesmen;

use Illuminate\Foundation\Http\FormRequest;

class StoreExternalSalesmenRequest extends FormRequest
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
            "phone" => "max:20|required|unique:external_salesmen,phone",
            "address" => "required|max:255",
            "rp_code" => "required|unique:external_salesmen,rp_code",
            "email" => "required|email|unique:external_salesmen,email",
            "country_id" => "required|exists:countries,id",
            'national_id' => "required|integer",
            'is_active' => 'nullable|in:active,inactive',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */

    public function messages()
    {
        return [
            'phone.required' => __('message.field is required'),
            'phone.unique' => __('message.field must be unique'),
            'address.required' => __('message.field is required'),
            'rp_code.required' => __('message.field is required'),
            'rp_code.unique' => __('message.field must be unique'),
            'email.required' => __('message.field is required'),
            'email.email' => __('message.field must be email'),
            'email.unique' => __('message.field must be unique'),
            'country_id.required' => __('message.field is required'),
            'country_id.exists' => __('message.field must be exists'),
            'national_id.required' => __('message.field is required'),
            'national_id.integer' => __('message.field must be integer'),
            'is_active.in' => __('message.field must be in active,inactive'),

        ];
    }
}
