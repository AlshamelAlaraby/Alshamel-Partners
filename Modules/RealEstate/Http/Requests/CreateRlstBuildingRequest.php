<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRlstBuildingRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'name_e' => 'required|string|max:255',
            'description' => [],
            'description_e' => [],
            'land_area' => [],
            'building_area' => ['lt:land_area'],
            'construction_year' => ['gt:2018'],
            'project_id' => [],
            'country_id' => [],
            'city_id' => [],
            'region_id' => [],
            'avenue_id' => [],
            'lng' => [],
            'lat' => [],
            'properties' => [],
            'attachments' => [],
        ];
    }
    public function messages()
    {
        return [
            "name.required" => __("message.field is required"),
            'name.string' => __("message.field must be string"),
            'name.max' => __("message.field must be less than 255 characters"),
            "name_e.required" => __("message.field is required"),
            'name_e.string' => __("message.field must be string"),
            'name_e.max' => __("message.field must be less than 255 characters"),
            'building_area.lt' => __("message.field must be less than land area"),
            'construction_year.gt' => __("message.field must be greater than 2018"),
        ];
    }

}
