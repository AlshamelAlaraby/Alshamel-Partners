<?php

namespace App\Http\Requests\Avenue;

use Illuminate\Foundation\Http\FormRequest;

class StoreAvenueRequest extends FormRequest
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
            'name' => 'required|string|max:255|unique:avenues,name',
            'name_e' => 'required|string|max:255|unique:avenues,name_e',
            "is_active" => "nullable|in:active,inactive",
            "country_id" => "required|exists:countries,id",
            "city_id" => "required|exists:cities,id",
            "governorate_id" => "required|exists:governorates,id",
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
            'city_id.required' => __('message.field is required'),
            'city_id.exists' => __('message.field must be exists'),
            'governorate_id.required' => __('message.field is required'),
            'governorate_id.exists' => __('message.field must be exists'),
            'is_active.in' => __('message.field must be in active,inactive'),
        ];
    }

}
