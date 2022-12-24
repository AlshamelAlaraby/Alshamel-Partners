<?php

namespace App\Http\Requests\BankAccount;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBankAccountRequest extends FormRequest
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
     */public function rules()
    {
        return [

            "bank_id" => "nullable|exists:banks,id",
            "account_number" => "nullable|string|max:255",
            "phone" => "nullable|string|max:255",
            "address" => "nullable|string|max:255",
            "email" => "nullable|string|max:255",
            "emp_id" => "nullable|string|max:255",
            "rp_code" => "nullable|string|max:255",

            "media" => "nullable|array",
            "media.*" => ["exists:media,id", new \App\Rules\MediaRule()],
            'old_media.*' => ['exists:media,id', new \App\Rules\MediaRule("App\Models\BankAccount")],
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
            'bank_id.required' => __('message.field is required'),
            'bank_id.exists' => __('message.field must be exists in banks table'),
            'account_number.required' => __('message.field is required'),
            'account_number.string' => __('message.field must be string'),
            'account_number.max' => __('message.field must be less than 255 character'),
            'phone.required' => __('message.field is required'),
            'phone.string' => __('message.field must be string'),
            'phone.max' => __('message.field must be less than 255 character'),
            'address.required' => __('message.field is required'),
            'address.string' => __('message.field must be string'),
            'address.max' => __('message.field must be less than 255 character'),
            'email.required' => __('message.field is required'),
            'email.string' => __('message.field must be string'),
            'email.max' => __('message.field must be less than 255 character'),
            'emp_id.required' => __('message.field is required'),

            'emp_id.string' => __('message.field must be string'),
            'emp_id.max' => __('message.field must be less than 255 character'),
            'rp_code.required' => __('message.field is required'),
            'rp_code.string' => __('message.field must be string'),
            'rp_code.max' => __('message.field must be less than 255 character'),

            'media.exists' => __('message.field must be exists'),
            'media.media' => __('message.field must be media'),

        ];
    }
}
