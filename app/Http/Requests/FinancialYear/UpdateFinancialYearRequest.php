<?php

namespace App\Http\Requests\FinancialYear;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFinancialYearRequest extends FormRequest
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
            'name' => 'string|max:255|unique:financial_years,name,'.$this->id,
            'name_e' => 'string|max:255|unique:financial_years,name_e,'.$this->id,
            "start_date" => 'date_format:Y-m-d H:i:s|after_or_equal:today',
            "end_date" => 'date_format:Y-m-d H:i:s|after_or_equal:start_date',
        ];
    }

    public function messages()
    {
        return [
            'name.string' => __('message.field must be string'),
            'name.max' => __('message.field must be less than 255 character'),
            'name_e.string' => __('message.field must be string'),
            'name_e.max' => __('message.field must be less than 255 character'),
            'start_date.date_format' => __('message.field must be date'),
            'start_date.after_or_equal' => __('message.field must be after or equal today'),
            'end_date.date_format' => __('message.field must be date'),
            'end_date.after_or_equal' => __('message.field must be after or equal start date'),
        ];
    }
}
