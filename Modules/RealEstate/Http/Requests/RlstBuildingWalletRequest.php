<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstBuildingWalletRequest extends FormRequest
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
            'wallet_id' => [
                'required', 'integer'
                // ,'exists:rlst_wallets,id,deleted_at,null'
            ],
            'building_id' => [
                'required', 'integer'
                // ,'exists:rlst_wallets,id,deleted_at,null'
            ],
            'bu_ty' => 'required|in:1,2',
        ];
    }
    public function messages()
    {
        return [
            "wallet_id.required" => __("message.field is required"),
            'wallet_id.integer' => __("message.field must be integer"),
            'wallet_id.exists' => __("message.field must be exists in rlst_wallets table"),
            "building_id.required" => __("message.field is required"),
            'building_id.integer' => __("message.field must be integer"),
            'building_id.exists' => __("message.field must be exists in rlst_buildings table"),
            "bu_ty.required" => __("message.field is required"),
            'bu_ty.in' => __("message.field must be in 0,1"),

        ];
    }
}
