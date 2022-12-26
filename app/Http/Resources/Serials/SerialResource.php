<?php

namespace App\Http\Resources\Serials;

use Illuminate\Http\Resources\Json\JsonResource;

class SerialResource extends JsonResource
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
            'id'=>$this->id,
            'company_id'=>$this->company_id,
            'branch_id'=>$this->branch_id,
            'store_id'=>$this->store_id,
            'start_no'=>$this->start_no,
            'perfix'=>$this->perfix,
            'suffix'=>$this->suffix,
            'restart_period'=>$this->restart_period,
            'is_default'=>$this->is_default,
            "branch"=>$this->branch,
            "store"=>$this->store
        ];
    }
}
