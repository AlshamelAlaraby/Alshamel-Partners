<?php

namespace App\Http\Resources\User;

use App\Http\Resources\Employee\EmployeeResource;
use App\Http\Resources\FileResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'name_e' => $this->name_e,
            'is_active' => $this->is_active,
            "email" => $this->email,
            "media" => new FileResource($this->files[0]),
            "employee" => new EmployeeResource($this->employee),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
