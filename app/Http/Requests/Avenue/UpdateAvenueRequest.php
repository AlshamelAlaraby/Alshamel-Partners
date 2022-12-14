<?php

namespace App\Http\Requests\Avenue;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAvenueRequest extends FormRequest
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
            'name' => 'string|max:255|unique:avenues,name,'. $this->id,
            'name_e' => 'string|max:255|unique:avenues,name_e,'. $this->id,
            "is_active" => "nullable|in:active,inactive",
            "country_id" => "exists:countries,id",
            "city_id" => "exists:cities,id",
            "governorate_id" => "exists:governorates,id",
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
            'city_id.exists' => __('message.field must be exists'),
            'governorate_id.exists' => __('message.field must be exists'),
            'is_active.in' => __('message.field must be in active,inactive'),
        ];
    }
}
