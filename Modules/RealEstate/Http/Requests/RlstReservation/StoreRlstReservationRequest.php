<?php

namespace Modules\RealEstate\Http\Requests\RlstReservation;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class StoreRlstReservationRequest extends FormRequest
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
            "vdate"            => "required|date" ,
            "salesman_id"      => "required|exists:salesmen,id" ,
            "customer_id"      => "required|exists:rlst_buildings,id" ,
            "payment_plan_id"  => "required|numeric" ,
            // "payment_plan_id"  => "required|exists:rlst_Payment_plans,id" ,
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
