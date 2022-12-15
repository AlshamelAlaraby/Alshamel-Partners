<?php

namespace Modules\RealEstate\Transformers;

use App\Http\Resources\Salesman\SalesmanResource;
use Illuminate\Http\Resources\Json\JsonResource;

class RlstContractResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            "date" => $this->date,
            "salesman" => new SalesmanResource($this->salesman),
            "reservation" => new RlstReservationResource($this->reservation),
            "customer" => new RlstCustomerResource($this->customer),
            "payment_plan_id" => $this->payment_plan_id,
            "created_at" => $this->created_at,
            "updated_at" => $this->updated_at,
        ];
    }
}
