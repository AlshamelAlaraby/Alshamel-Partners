<?php

namespace App\Http\Requests\ScreenTreeProperty;

use App\Traits\ValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class CreateScreenTreePropertyRequest extends FormRequest
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
        return [

        ];
    }

}
