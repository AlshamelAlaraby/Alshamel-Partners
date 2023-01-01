<?php

namespace Modules\Archiving\Transformers;

use App\Http\Resources\ArchDocStatus\ArchDocStatusRelationResource;
use App\Http\Resources\GenArchDocType\GenArchDocRelationResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentResource extends JsonResource
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
            'gen_arch_doc_type' => new GenDocRelationResource($this->genArchDocType),
            'doc_status' => new DocStatusRelationResource($this->docStatus),
            'doc_description' => $this->doc_description,
            'url_reference' => $this->url_reference,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
