<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstWalletOwnerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'wallet_id' => 'required|integer|exists:rlst_wallets,id,deleted_at,null',
            'owner_id' => 'required|integer|exists:rlst_owners,id,deleted_at,null',
            'percentage' => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            "wallet_id.required" => __("message.field is required"),
            "wallet_id.integer" => __("message.field must be integer"),
            "wallet_id.exists" => __("message.field must be exists"),
            "owner_id.required" => __("message.field is required"),
            "owner_id.integer" => __("message.field must be integer"),
            "owner_id.exists" => __("message.field must be exists"),
            "percentage.required" => __("message.field is required"),
            "percentage.numeric" => __("message.field must be numeric"),
        ];
    }
}
