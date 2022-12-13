<?php

namespace Modules\RealEstate\Http\Requests;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class EditRlstBuildingRequest extends FormRequest
{
    use ValidationTrait;
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'string|max:255',
            'name_e' => 'string|max:255',
            'description'=>[],
            'description_e'=>[],
            'land_area'=>[],
            'building_area'=>['lt:land_area'],
            'construction_year'=>['gt:2018'],
            'project_id'=>[],
            'country_id'=>[],
            'city_id'=>[],
            'region_id'=>[],
            'avenue_id'=>[],
            'lng'=>[],
            'lat'=>[],
            'properties'=>[],
            'attachments'=>[],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

}
