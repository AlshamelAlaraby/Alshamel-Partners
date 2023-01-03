<?php

namespace Modules\RealEstate\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RlstCustomerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:100',
            'name_e' => 'required|string|max:100',
            'phone' => 'required|string|max:20',
            'email' => 'required|string|max:100',
            'country_id' => 'required|integer|exists:countries,id,deleted_at,null',
            'city_id' => 'required|integer|exists:cities,id,deleted_at,null',
            'rb_code' => 'required|string|max:255',
            'nationality_id' => 'required|integer|exists:countries,id,deleted_at,null',
            "bank_account_id" => "required|integer",
            "contact_person" => "required|string|max:100",
            "contact_phones" => "required|string|max:100",
            "national_id" => "required|string|max:20",
            "passport_no" => "required|string|max:20",
            "contact_person" => "required|string|max:100",
            "contact_phones" => "required|string|max:100",
            "note1" => 'required|max:100',
            "note2" => 'required|max:100',
            "note3" => 'required|max:100',
            "note4" => 'required|max:100',
            "whatsapp" => "required|string|max:20",
            // "categories" => "required",
            // "attachments" => 'required',
        ];
    }

    public function messages()
    {
        return [
            "name.required" => __("message.field is required"),
            'name.string' => __("message.field must be string"),
            'name.max' => __("message.field must be less than 100 characters"),
            "name_e.required" => __("message.field is required"),
            'name_e.string' => __("message.field must be string"),
            'name_e.max' => __("message.field must be less than 100 characters"),
            "phone.required" => __("message.field is required"),
            'phone.string' => __("message.field must be string"),
            'phone.max' => __("message.field must be less than 20 characters"),
            "email.required" => __("message.field is required"),
            'email.string' => __("message.field must be string"),
            'email.max' => __("message.field must be less than 100 characters"),
            "country_id.required" => __("message.field is required"),
            'country_id.integer' => __("message.field must be integer"),
            "city_id.required" => __("message.field is required"),
            'city_id.integer' => __("message.field must be integer"),
            "rb_code.required" => __("message.field is required"),
            'rb_code.string' => __("message.field must be string"),
            "nationality_id.required" => __("message.field is required"),
            "nationality_id.integer" => __("message.field must be integer"),
            "nationality_id.exists" => __("message.field must be exists"),
            "bank_account_id.required" => __("message.field is required"),
            "bank_account_id.integer" => __("message.field must be integer"),
            "contact_person.required" => __("message.field is required"),
            'contact_person.string' => __("message.field must be string"),
            'contact_person.max' => __("message.field must be less than 100 characters"),
            "contact_phones.required" => __("message.field is required"),
            'contact_phones.string' => __("message.field must be string"),
            'contact_phones.max' => __("message.field must be less than 100 characters"),
            "national_id.required" => __("message.field is required"),
            'national_id.string' => __("message.field must be string"),
            'national_id.max' => __("message.field must be less than 20 characters"),
            "whatsapp.required" => __("message.field is required"),
            'whatsapp.string' => __("message.field must be string"),
            'whatsapp.max' => __("message.field must be less than 20 characters"),
            "categories.required" => __("message.field is required"),
            "attachments.required" => __("message.field is required"),
            "note1.required" => __("message.field is required"),
            'note1.max' => __("message.field must be less than 100 characters"),
            "note2.required" => __("message.field is required"),
            'note2.max' => __("message.field must be less than 100 characters"),
            "note3.required" => __("message.field is required"),
            'note3.max' => __("message.field must be less than 100 characters"),
            "note4.required" => __("message.field is required"),
            'note4.max' => __("message.field must be less than 100 characters"),
            "passport_no.required" => __("message.field is required"),
            'passport_no.string' => __("message.field must be string"),
            'passport_no.max' => __("message.field must be less than 20 characters"),

        ];
    }
}
