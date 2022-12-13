<?php

namespace Modules\RealEstate\Http\Requests;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class EditRlstUnitRequest extends FormRequest
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
            'code'=>['string','max:20'],
            'name' => 'string|max:100',
            'name_e' => 'string|max:100',
            'description'=>[],
            'description_e'=>[],

            'unit_ty'=>[],
            'status_date'=>[],
            'unit_area'=>[],
            'building_id'=>[],
            'owner_id'=>[],

            'currency_id'=>[],
            'wallet_id'=>[],
            'unitstatus_id'=>[],
            'commission_ty'=>[],
            'commission_value'=>[],

            'price'=>[],
            'rooms'=>[],
            'path'=>[],
            'view'=>[],
            'floor'=>[],
            'rank'=>[],
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
