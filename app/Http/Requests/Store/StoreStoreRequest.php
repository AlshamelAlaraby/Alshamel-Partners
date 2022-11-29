<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;

class StoreStoreRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'name_e' => 'required|string|max:255',
            'company_id' => 'required|integer|exists:companies,id',
            'branch_id' => 'required|integer|exists:branches,id',
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
            'name.required' => __('message.field is required'),
            'name.string' => __('message.field must be string'),
            'name.max' => __('message.field must be less than 255 character'),

            'name_e.required' => __('message.field is required'),
            'name_e.string' => __('message.field must be string'),
            'name_e.max' => __('message.field must be less than 255 character'),
            'company_id.required' => __('message.field is required'),
            'company_id.integer' => __('message.field must be integer'),
            'company_id.exists' => __('message.field must be exists'),

            'branch_id.required' => __('message.field is required'),
            'branch_id.integer' => __('message.field must be integer'),
            'branch_id.exists' => __('message.field must be exists'),
        ];
    }
}
