<?php

namespace App\Http\Requests\Governorate;

use Illuminate\Foundation\Http\FormRequest;

class UpdateGovernorateRequest extends FormRequest
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
            'name' => 'string|max:255|unique:governorates,name',
            'name_e' => 'string|max:255|unique:governorates,name_e',
            'name' => 'string|max:255|unique:governorates,name,'.$this->id,
            'name_e' => 'string|max:255|unique:governorates,name_e,'.$this->id,
            "is_active" => "nullable|in:active,inactive",
            "is_default" => "nullable|in:0,1",
            "country_id" => "exists:countries,id",
            'phone_key' => "max:10",
        ];
    }

    public function messages()
    {
        return [
            'name.string' => __('message.field must be string'),
            'name.max' => __('message.field must be less than 255 character'),
            'name_e.string' => __('message.field must be string'),
            'name_e.max' => __('message.field must be less than 255 character'),
            'country_id.exists' => __('message.field must be exists'),
            'is_default.in' => __('message.field must be in 0,1'),
            'phone_key.unique' => __('message.field must be unique'),
            'is_active.in' => __('message.field must be in active,inactive'),
        ];
    }
}
