<?php

namespace Modules\RealEstate\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class RlstOwnerResource extends JsonResource
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
            'name' => $this->name,
            'name_e' => $this->name_e,
            'phone' => $this->phone,
            'email' => $this->email,
            'country_id' => $this->country_id,
            'city_id' => $this->city_id,
            'rb_code' => $this->rb_code,
            "nationality_id" => $this->nationality_id,
            "bank_account_id" => $this->bank_account_id,
            "contact_person" => $this->contact_person,
            "contact_phones" => $this->contact_phones,
            "national_id" => $this->national_id,
            "whatsapp" => $this->whatsapp,
            "categories" => $this->categories,
            "attachments" => $this->attachments,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,

        ];
    }
}
