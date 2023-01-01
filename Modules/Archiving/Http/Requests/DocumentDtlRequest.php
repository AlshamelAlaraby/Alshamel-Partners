<?php

namespace Modules\Archiving\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class DocumentDtlRequest extends FormRequest
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
            'gen_arch_doc_type_id'  => ['required'],
            'arch_doc_field_id' => ['required'],
            'field_value' => ['required']
        ];
    }

    public function messages()
    {
        return [
            'required'    => 'field is required',
        ];
    }

    protected function failedValidation(Validator $validator, $code = 400)
    {
        throw new HttpResponseException(
            response()->json(
                [
                    'status' => $code,
                    'success' => false,
                    'message' => $validator->errors(),
                    'data' => null
                ],
                $code
            )
        );
    }

    protected function failedAuthorization()
    {
        throw new HttpResponseException(
            response()->json(
                [
                    'status' => false,
                    'message' => "Error: you are not authorized or do not have the permission",
                    'data' => null
                ],
                401
            )
        );
    }
}
