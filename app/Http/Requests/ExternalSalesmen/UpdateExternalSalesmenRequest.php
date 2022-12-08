<?php

namespace App\Http\Requests\ExternalSalesmen;

use Illuminate\Foundation\Http\FormRequest;

class UpdateExternalSalesmenRequest extends FormRequest
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

    public function rules()
    {
        $id = $this->id;
        return [
            "phone" => "max:20|unique:external_salesmen,phone," . $id,
            "address" => "max:255",
            "rp_code" => "unique:external_salesmen,rp_code," . $id,
            "email" => "email|unique:external_salesmen,email," .$id,
            "country_id" => "exists:countries,id",
            'national_id' => "integer",
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
            'phone.unique' => __('message.field must be unique'),
            'rp_code.unique' => __('message.field must be unique'),
            'email.email' => __('message.field must be email'),
            'email.unique' => __('message.field must be unique'),
            'country_id.exists' => __('message.field must be exists'),
            'national_id.integer' => __('message.field must be integer'),
            'is_active.in' => __('message.field must be in active,inactive'),
        ];
    }
}
