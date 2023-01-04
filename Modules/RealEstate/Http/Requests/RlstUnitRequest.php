<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstUnitRequest extends FormRequest
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
            'code' => "required|string|max:20",
            'name' => "required|string|max:100",
            'name_e' => "required|string|max:100",
            'description' => "nullable|string",
            'description_e' => "nullable|string",
            'unit_ty' => "nullable|integer",
            'status_date' => "nullable|date",
            'unit_area' => "nullable|numeric",
            'building_id' => "nullable|integer|exists:rlst_buildings,id,deleted_at,null",
            'owner_id' => "nullable|integer|exists:rlst_owners,id,deleted_at,null",
            'currency_id' => "nullable|integer|exists:currencies,id,deleted_at,null",
            'wallet_id' => "nullable|integer|exists:rlst_wallets,id,deleted_at,null",
            'unit_status_id' => "nullable|integer",
            'commission_ty' => "nullable|integer",
            'commission_value' => "nullable|numeric",
            'price' => "nullable|numeric",
            'rooms' => "nullable|integer",
            'path' => "nullable|integer",
            'view' => "nullable|integer",
            'floor' => "nullable|integer",
            'rank' => "nullable|integer",
            'properties' => "required|array",
            'attachments' => "required|array",
            'module_id' => "required|integer",
            // 'attachments' => "required|array",
            // 'module_id' => "required|integer",
        ];
    }

    public function messages()
    {
        return [
            'code.required' => __("message.field is required"),
            'code.string' => __("message.field must be string"),
            'code.max' => __("message.field must be less than 20 characters"),
            'name.required' => __("message.field is required"),
            'name.string' => __("message.field must be string"),
            'name.max' => __("message.field must be less than 100 characters"),
            'name_e.required' => __("message.field is required"),
            'name_e.string' => __("message.field must be string"),
            'name_e.max' => __("message.field must be less than 100 characters"),
            'description.string' => __("message.field must be string"),
            'description_e.string' => __("message.field must be string"),
            'unit_ty.integer' => __("message.field must be integer"),
            'status_date.date' => __("message.field must be date"),
            'unit_area.numeric' => __("message.field must be numeric"),
            'building_id.integer' => __("message.field must be integer"),
            'owner_id.integer' => __("message.field must be integer"),
            'currency_id.integer' => __("message.field must be integer"),
            'wallet_id.integer' => __("message.field must be integer"),
            'unit_status_id.integer' => __("message.field must be integer"),
            'commission_ty.integer' => __("message.field must be integer"),
            'commission_value.numeric' => __("message.field must be numeric"),
            'price.numeric' => __("message.field must be numeric"),
            'rooms.integer' => __("message.field must be integer"),
            'path.integer' => __("message.field must be integer"),
            'view.integer' => __("message.field must be integer"),
            'floor.integer' => __("message.field must be integer"),
            'rank.integer' => __("message.field must be integer"),
            'properties.array' => __("message.field must be array"),
            'attachments.array' => __("message.field must be array"),
            'module_id.required' => __("message.field is required"),
            'module_id.integer' => __("message.field must be integer"),
        ];
    }
}
