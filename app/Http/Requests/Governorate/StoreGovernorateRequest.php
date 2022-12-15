<?php

namespace App\Http\Requests\Governorate;

use Illuminate\Foundation\Http\FormRequest;

class StoreGovernorateRequest extends FormRequest
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
            'name' => 'required|string|max:255|unique:governorates,name',
            'name_e' => 'required|string|max:255|unique:governorates,name_e',
            "is_active" => "nullable|in:active,inactive",
            "is_default" => "nullable|in:0,1",
            "country_id" => "required|exists:countries,id",
            'phone_key' => "required|max:10",
        ];
    }

    public function messages()
    {
        return [
            'name.required' => __('message.field is required'),
            'name.string' => __('message.field must be string'),
            'name.max' => __('message.field must be less than 255 character'),
            'name_e.required' => __('message.field is required'),
            'name_e.string' => __('message.field must be string'),
            'name_e.max' => __('message.field must be less than 255 character'),
            'country_id.required' => __('message.field is required'),
            'country_id.exists' => __('message.field must be exists'),
            'is_default.required' => __('message.field is required'),
            'is_default.in' => __('message.field must be in 0,1'),
            'phone_key.required' => __('message.field is required'),
            'phone_key.unique' => __('message.field must be unique'),
            'is_active.in' => __('message.field must be in active,inactive'),
        ];
    }

}
