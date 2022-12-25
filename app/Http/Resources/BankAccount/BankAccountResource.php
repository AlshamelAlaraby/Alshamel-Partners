<?php

namespace App\Http\Resources\BankAccount;

use App\Http\Resources\Bank\BankResource;
use App\Http\Resources\FileResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BankAccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'bank_id' => $this->bank_id,
            'bank' => new BankResource($this->bank),
            'account_number' => $this->account_number,
            'phone' => $this->phone,
            'address' => $this->address,
            'email' => $this->email,
            'emp_id' => $this->emp_id,
            'rp_code' => $this->rp_code,
            "media" => isset($this->files) ? FileResource::collection($this->files) : null,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
