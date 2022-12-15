<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstWalletOwnerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'wallet_id' => 'nullable|integer|exists:rlst_wallets,id',
            'owner_id' => 'nullable|integer|exists:rlst_owners,id',
            'percentage' => 'nullable|numeric',
        ];
    }


    public function messages()
    {
        return [
            "wallet_id.integer" => __("message.field must be integer"),
            "wallet_id.exists" => __("message.field must be exists"),
            "owner_id.integer" => __("message.field must be integer"),
            "owner_id.exists" => __("message.field must be exists"),
            "percentage.numeric" => __("message.field must be numeric"),
        ];
    }
}
