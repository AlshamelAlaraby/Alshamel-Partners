<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstBuildingRequest extends FormRequest
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
            'description' => "nullable",
            'description_e' => "nullable",
            'land_area' => "nullable",
            'building_area' => ['lt:land_area'],
            'construction_year' => ['gt:2018'],
            'country_id' => "exists:countries,id,deleted_at,null",
            'city_id' => "exists:cities,id,deleted_at,null",
            'avenue_id' => "exists:avenues,id",
            'lng' => "numeric|required_with:lat",
            'lat' => "numeric|required_with:lng",
            'properties' => "nullable|array",
            'attachments' => "nullable|array",
            'module_id' => "required",
        ];
    }
    public function messages()
    {
        return [
            "name.required" => __("message.field is required"),
            "name.string" => __("message.field must be string"),
            "name.max" => __("message.field must be less than 255 characters"),
            "name_e.required" => __("message.field is required"),
            "name_e.string" => __("message.field must be string"),
            "name_e.max" => __("message.field must be less than 255 characters"),
            "description_e.string" => __("message.field must be string"),
            "description.string" => __("message.field must be string"),
            "land_area.numeric" => __("message.field must be numeric"),
            "building_area.numeric" => __("message.field must be numeric"),
            "building_area.lt" => __("message.field must be less than land area"),
            "construction_year.gt" => __("message.field must be greater than 2018"),
            "country_id.exists" => __("message.field must be exists"),
            "city_id.exists" => __("message.field must be exists"),
            "avenue_id.exists" => __("message.field must be exists"),
            "lng.numeric" => __("message.field must be numeric"),
            "lat.numeric" => __("message.field must be numeric"),
            "lng.required_with" => __("message.field is required"),
            "lat.required_with" => __("message.field is required"),
            "properties.array" => __("message.field must be array"),
            "attachments.array" => __("message.field must be array"),
            "module_id.required" => __("message.field is required"),

        ];
    }

}
