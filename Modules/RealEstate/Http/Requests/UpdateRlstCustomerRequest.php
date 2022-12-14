<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRlstCustomerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'nullable|string|max:100',
            'name_e' => 'nullable|string|max:100',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|string|max:100',
            'country_id' => 'nullable|integer',
            'city_id' => 'nullable|integer',
            'rb_code' => 'nullable|string|max:255',
            'nationality_id' => 'nullable|integer|exists:countries,id',
            "bank_account_id" => "nullable|integer",
            "contact_person" => "nullable|string|max:100",
            "contact_phones" => "nullable|string|max:100",
            "national_id" => "nullable|string|max:20",
            "passport_no" => "nullable|string|max:20",
            "contact_person" => "nullable|string|max:100",
            "contact_phones" => "nullable|string|max:100",
            "note1" => 'nullable|max:100',
            "note2" => 'nullable|max:100',
            "note3" => 'nullable|max:100',
            "note4" => 'nullable|max:100',
            "whatsapp" => "nullable|string|max:20",
            "categories" => "nullable",
        ];
    }


    public function messages()
    {
        return [
            'name.string' => __("message.field must be string"),
            'name.max' => __("message.field must be less than 100 characters"),
            'name_e.string' => __("message.field must be string"),
            'name_e.max' => __("message.field must be less than 100 characters"),
            'phone.string' => __("message.field must be string"),
            'phone.max' => __("message.field must be less than 20 characters"),
            'email.string' => __("message.field must be string"),
            'email.max' => __("message.field must be less than 100 characters"),
            'country_id.integer' => __("message.field must be integer"),
            'city_id.integer' => __("message.field must be integer"),
            'rb_code.string' => __("message.field must be string"),
            "nationality_id.integer" => __("message.field must be integer"),
            "nationality_id.exists" => __("message.field must be exists"),
            "bank_account_id.integer" => __("message.field must be integer"),
            'contact_person.string' => __("message.field must be string"),
            'contact_person.max' => __("message.field must be less than 100 characters"),
            'contact_phones.string' => __("message.field must be string"),
            'contact_phones.max' => __("message.field must be less than 100 characters"),
            'national_id.string' => __("message.field must be string"),
            'national_id.max' => __("message.field must be less than 20 characters"),
            'whatsapp.string' => __("message.field must be string"),
            'whatsapp.max' => __("message.field must be less than 20 characters"),
            'note1.max' => __("message.field must be less than 100 characters"),
            'note2.max' => __("message.field must be less than 100 characters"),
            'note3.max' => __("message.field must be less than 100 characters"),
            'note4.max' => __("message.field must be less than 100 characters"),
            'passport_no.string' => __("message.field must be string"),
            'passport_no.max' => __("message.field must be less than 20 characters"),




        ];
    }
}
