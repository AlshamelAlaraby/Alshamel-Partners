<?php

namespace App\Http\Requests\TreeProperty;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class CreateTreePropertyRequest extends FormRequest
{
    use ValidationTrait;
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        $id = $this->id;
        return [
            'name' => 'required|string|max:255',
            'name_e' => 'required|string|max:255',
            'parent_id'=>["nullable"
            // , new \App\Rules\TRNotInChildrenRule()
            // , "exists:tree_properties,id", "not_in:" . $id
            ]
        ];
    }

}
