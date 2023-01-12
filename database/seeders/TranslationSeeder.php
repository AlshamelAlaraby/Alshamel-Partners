<?php

namespace Database\Seeders;

use App\Models\Translation;
use Illuminate\Database\Seeder;

class TranslationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Translation::insert([
            [
                "key" => "branch_create_form",
                "default_en" => "Add new branch",
                "default_ar" => "اضف فرع جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "branch"
            ],
            [
                "key" => "branch_edit_form",
                "default_en" => "Edit branch form",
                "default_ar" => "تعديل نموذج الفرع",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "branch"
            ],
            [
                "key" => "branch_name_ar",
                "default_en" => "Branch name (arabic)",
                "default_ar" => "اسم الفرع (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "branch"
            ],
            [
                "key" => "branch_name_en",
                "default_en" => "Branch name (english)",
                "default_ar" => "اسم الفرع (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "branch"
            ],
            [
                "key" => "branch_status",
                "default_en" => "Branch status",
                "default_ar" => "حالة الفرع",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "branch"
            ],
        ]);
        //Unit status
        Translation::insert([
            [
                "key" => "unitstatus_create_form",
                "default_en" => "Add new unit status",
                "default_ar" => "اضف حالة وحدة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "realEstate unit status"
            ],
            [
                "key" => "unitstatus_edit_form",
                "default_en" => "Edit unit status form",
                "default_ar" => "نموذج تعديل حالة الوحدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "realEstate unit status"
            ],
            [
                "key" => "unitstatus_name_ar",
                "default_en" => "Unit status name (arabic)",
                "default_ar" => "اسم حالة الوحدة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "realEstate unit status"

            ],
            [
                "key" => "unitstatus_name_en",
                "default_en" => "Unit status name (english)",
                "default_ar" => "اسم حالة الوحدة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "realEstate unit status"

            ],
            [
                "key" => "unitstatus_status",
                "default_en" => "Unit status",
                "default_ar" => "حالة الوحدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "realEstate unit status"

            ],
            [
                "key" => "unitstatus_default",
                "default_en" => "Unit status default",
                "default_ar" => "الحالة الافتراضية لحالة الوحدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "realEstate unit status"

            ],
        ]);
        //Store
        Translation::insert([
            [
                "key" => "store_create_form",
                "default_en" => "Add new store",
                "default_ar" => "اضف مخزن جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "store",
            ],
            [
                "key" => "store_edit_form",
                "default_en" => "Edit store form",
                "default_ar" => "تعديل نموذج المخزن",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "store",
            ],
            [
                "key" => "store_name_ar",
                "default_en" => "Store name (arabic)",
                "default_ar" => "اسم المخزن (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "store",
            ],
            [
                "key" => "store_name_en",
                "default_en" => "Store name (english)",
                "default_ar" => "اسم المخزن (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "store",
            ],
            [
                "key" => "store_status",
                "default_en" => "Store status",
                "default_ar" => "حالة المخزن",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "store",

            ],
            [
                "key" => "branch",
                "default_en" => "Branch name",
                "default_ar" => "اسم الفرع",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "store",
            ],
        ]);
        //Screen property
        Translation::insert([
            [
                "key" => "screen_property_create_form",
                "default_en" => "Add new screen property form",
                "default_ar" => "اضف خاصية وشاشة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "screen properties",
            ],
            [
                "key" => "screen_property_edit_form",
                "default_en" => "Edit screen property form",
                "default_ar" => "نموذج تعديل الخاصية والشاشة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "screen properties",

            ],
            [
                "key" => "screen",
                "default_en" => "Screen Name",
                "default_ar" => "اسم الشاشة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "screen properties",

            ],
            [
                "key" => "property",
                "default_en" => "Property name",
                "default_ar" => "اسم الخاصية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "screen properties",

            ],
        ]);
        //Tree property
        Translation::insert([
            [
                "key" => "property_create_form",
                "default_en" => "Add new property form",
                "default_ar" => "اضف خاصية جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "tree property"
            ],
            [
                "key" => "property_edit_form",
                "default_en" => "Edit property form",
                "default_ar" => "نموذج تعديل الخاصية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "tree property"
            ],
            [
                "key" => "property_name_ar",
                "default_en" => "Property name (arabic)",
                "default_ar" => "اسم الخاصية (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "tree property"

            ],
            [
                "key" => "property_name_en",
                "default_en" => "Property name (english)",
                "default_ar" => "اسم الخاصية (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "tree property"
            ],
            [
                "key" => "required",
                "default_en" => "required",
                "default_ar" => "مطلوب",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "tree property"
            ],
        ]);
        //Sales men types
        Translation::insert([
            [
                "key" => "sale_man_type_create_form",
                "default_en" => "Add new sale man type",
                "default_ar" => "اضف نوع رجل مبيعات جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men Type"
            ],
            [
                "key" => "sale_man_type_edit_form",
                "default_en" => "Edit sale man type form",
                "default_ar" => "نموذج تعديل نوع رجل المبيعات",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men Type"
            ],
            [
                "key" => "sale_man_type_name_ar",
                "default_en" => "Sale man type name (arabic)",
                "default_ar" => "اسم نوع رجل المبيعات (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men Type"
            ],
            [
                "key" => "sale_man_type_name_en",
                "default_en" => "Sale man type name (english)",
                "default_ar" => "اسم نوع رجل المبيعات (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men Type"
            ],
            [
                "key" => "is_employee",
                "default_en" => "Is employee",
                "default_ar" => "هل موظف",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men Type"
            ],
        ]);
        //Sales man
        Translation::insert([
            [
                "key" => "sale_man_create_form",
                "default_en" => "Add new sale man",
                "default_ar" => "اضف رجل مبيعات جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men"
            ],
            [
                "key" => "sale_man_edit_form",
                "default_en" => "Edit sale man form",
                "default_ar" => "نموذج تعديل رجل المبيعات",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men"
            ],
            [
                "key" => "sale_man_name_ar",
                "default_en" => "Sale man name (arabic)",
                "default_ar" => "اسم رجل المبيعات (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men"
            ],
            [
                "key" => "sale_man_name_en",
                "default_en" => "Sale man name (english)",
                "default_ar" => "اسم رجل المبيعات (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men"
            ],
            [
                "key" => "sale_man_type",
                "default_en" => "Sale man type",
                "default_ar" => "نوع رجل المبيعات",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "sales men"
            ],
        ]);
        //External sale man
        Translation::insert([
            [
                "key" => "external_sale_man_create_form",
                "default_en" => "Add new external sale man",
                "default_ar" => "اضف رجل مبيعات خارجي جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"
            ],
            [
                "key" => "external_sale_man_edit_form",
                "default_en" => "Edit external sale man form",
                "default_ar" => "نموذج تعديل رجل مبيعات خارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"
            ],
            [
                "key" => "external_sale_man_phone",
                "default_en" => "External Sale man phone",
                "default_ar" => "هاتف رجل المبيعات الخارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"
            ],
            [
                "key" => "external_sale_man_email",
                "default_en" => "External Sale man email",
                "default_ar" => "البريد الالكتروني لرجل المبيعات الخارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"

            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"
            ],
            [
                "key" => "external_sale_man_national_id",
                "default_en" => "External Sale man national id",
                "default_ar" => "الرقم القومي لرجل المبيعات الخارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"

            ],
            [
                "key" => "external_sale_man_address",
                "default_en" => "External Sale man address",
                "default_ar" => "عنوان رجل المبيعات الخارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"

            ],
            [
                "key" => "external_sale_man_code",
                "default_en" => "External Sale man code",
                "default_ar" => "كود رجل المبيعات الخارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"

            ],
            [
                "key" => "external_sale_man_status",
                "default_en" => "External Sale man status",
                "default_ar" => "حالة رجل المبيعات الخارجي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "external salesmen"

            ],
        ]);
        //Payment type
        Translation::insert([
            [
                "key" => "payment_type_create_form",
                "default_en" => "Add new payment type",
                "default_ar" => "اضف نوع دفع جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "payment types"
            ],
            [
                "key" => "payment_type_edit_form",
                "default_en" => "Edit payment type form",
                "default_ar" => " نموذج تعديل نوع الدفع",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "payment types"
            ],
            [
                "key" => "payment_type_name_ar",
                "default_en" => "Payment type name (arabic)",
                "default_ar" => "اسم نوع الدفع (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "payment types"

            ],
            [
                "key" => "payment_type_name_en",
                "default_en" => "Payment type name (english)",
                "default_ar" => "اسم نوع الدفع (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "payment types"

            ],
            [
                "key" => "payment_type_default",
                "default_en" => "Payment type default",
                "default_ar" => "الحالة الافتراضية لنوع الدفع",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "payment types"

            ],
        ]);
        //Banks
        Translation::insert([
            [
                "key" => "bank_create_form",
                "default_en" => "Add new bank",
                "default_ar" => "اضف نوع بنك جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "banks"
            ],
            [
                "key" => "bank_edit_form",
                "default_en" => "Edit bank form",
                "default_ar" => " نموذج تعديل البنك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "banks"
            ],
            [
                "key" => "bank_name_ar",
                "default_en" => "Bank name (arabic)",
                "default_ar" => "اسم البنك (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "banks"
            ],
            [
                "key" => "bank_name_en",
                "default_en" => "Bank name (english)",
                "default_ar" => "اسم البنك (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "banks"

            ],
            [
                "key" => "country",
                "default_en" => "Coutnry name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "banks"

            ],
            [
                "key" => "bank_swiftcode",
                "default_en" => "Bank swiftcode",
                "default_ar" => "سويفت كود البنك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "banks"
            ],
        ]);
        //Bank account
        Translation::insert([
            [
                "key" => "bank_account_create_form",
                "default_en" => "Add new bank account",
                "default_ar" => "اضف حساب بنكي جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank_account_edit_form",
                "default_en" => "Edit bank bank form",
                "default_ar" => " نموذج تعديل الحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank",
                "default_en" => "Bank name",
                "default_ar" => "اسم البنك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank_account_number",
                "default_en" => "Bank account number",
                "default_ar" => "رقم الحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank_account_phone",
                "default_en" => "Bank account phone",
                "default_ar" => "هاتف الحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank_account_address",
                "default_en" => "Bank account address",
                "default_ar" => "عنوان الحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank_account_email",
                "default_en" => "Bank account email",
                "default_ar" => "البريد الالكتروني للحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],

            [
                "key" => "employee",
                "default_en" => "Employee name",
                "default_ar" => "اسم الموظف",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
            [
                "key" => "bank_account_rpcode",
                "default_en" => "Bank account rpcode",
                "default_ar" => "ار بي كود الحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "bank accounts"
            ],
        ]);

        //Internal sale man
        Translation::insert([
            [
                "key" => "internal_sale_man_create_form",
                "default_en" => "Add new internal sale man",
                "default_ar" => "اضف رجل مبيعات داخلي جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "internal salesmen"
            ],
            [
                "key" => "internal_sale_man_edit_form",
                "default_en" => "Edit internal sale man form",
                "default_ar" => "نموذج تعديل رجل مبيعات داخلي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "internal salesmen"
            ],
            [
                "key" => "employee",
                "default_en" => "Employee name",
                "default_ar" => "اسم الموظف",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "internal salesmen"
            ],
            [
                "key" => "internal_sale_man_status",
                "default_en" => "Internal sale man status",
                "default_ar" => "حالة رجل المبيعات الداخلي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "internal salesmen"
            ],
        ]);
        //country
        Translation::insert([
            [
                "key" => "country_create_form",
                "default_en" => "Add new country",
                "default_ar" => "اضف دولة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_edit_form",
                "default_en" => "Edit country form",
                "default_ar" => "نموذج تعديل الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_name_ar",
                "default_en" => "Country name (arabic)",
                "default_ar" => "اسم الدولة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_name_en",
                "default_en" => "Country name (english)",
                "default_ar" => "اسم الدولة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_long_name_ar",
                "default_en" => "Country long name (arabic)",
                "default_ar" => "اسم الدولة طويل (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_long_name_en",
                "default_en" => "Country long name (english)",
                "default_ar" => "اسم الدولة طويل (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_phone_key",
                "default_en" => "Country phone key",
                "default_ar" => "كود هاتف الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_short_code",
                "default_en" => "Country short code",
                "default_ar" => "الكود المختصر للدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_default",
                "default_en" => "Country default",
                "default_ar" => "الحالة الافتراضية للدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_status",
                "default_en" => "Country status",
                "default_ar" => "حالة الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
            [
                "key" => "country_national_id",
                "default_en" => "Country national id",
                "default_ar" => "الرقم القومي للدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "country"
            ],
        ]);
        //governorate
        Translation::insert([
            [
                "key" => "governorate_create_form",
                "default_en" => "Add new governorate",
                "default_ar" => "اضف محافظة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "governorate_edit_form",
                "default_en" => "Edit governorate form",
                "default_ar" => "نموذج تعديل المحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "governorate_name_ar",
                "default_en" => "Governorate name (arabic)",
                "default_ar" => "اسم المحافظة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "governorate_name_en",
                "default_en" => "Governorate name (english)",
                "default_ar" => "اسم المحافظة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "governorate_phone_key",
                "default_en" => "Governorate phone key",
                "default_ar" => "كود هاتف المحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "governorate_default",
                "default_en" => "Governorate default",
                "default_ar" => "الحالة الافتراضية للمحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "governorate_status",
                "default_en" => "Governorate status",
                "default_ar" => "حالة المحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "governorate"
            ],
        ]);
        //city
        Translation::insert([
            [
                "key" => "city_create_form",
                "default_en" => "Add new city",
                "default_ar" => "اضف مدينة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
            [
                "key" => "city_edit_form",
                "default_en" => "Edit city form",
                "default_ar" => "نموذج تعديل المدينة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
            [
                "key" => "city_name_ar",
                "default_en" => "City name (arabic)",
                "default_ar" => "اسم المدينة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
            [
                "key" => "city_name_en",
                "default_en" => "City name (english)",
                "default_ar" => "اسم المدينة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
            [
                "key" => "city_status",
                "default_en" => "City status",
                "default_ar" => "حالة المدينة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
            [
                "key" => "governorate",
                "default_en" => "Governorate name",
                "default_ar" => "اسم المحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "city"
            ],
        ]);
        //avenue
        Translation::insert([
            [
                "key" => "avenue_create_form",
                "default_en" => "Add new avenue",
                "default_ar" => "اضف منطقة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "avenue_edit_form",
                "default_en" => "Edit avenue form",
                "default_ar" => "نموذج تعديل المنطقة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "avenue_name_ar",
                "default_en" => "Avenue name (arabic)",
                "default_ar" => "اسم المنطقة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "avenue_name_en",
                "default_en" => "Avenue name (english)",
                "default_ar" => "اسم المنطقة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "avenue_status",
                "default_en" => "Avenue status",
                "default_ar" => "حالة المنطقة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "governorate",
                "default_en" => "Governorate name",
                "default_ar" => "اسم المحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
            [
                "key" => "city",
                "default_en" => "City name",
                "default_ar" => "اسم المدينة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "avenue"
            ],
        ]);
        //Role type
        Translation::insert([
            [
                "key" => "role_type_create_form",
                "default_en" => "Add new role type",
                "default_ar" => "اضف نوع دور جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "role Type"
            ],
            [
                "key" => "role_type_edit_form",
                "default_en" => "Edit role type form",
                "default_ar" => "نموذج تعديل نوع الدور",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "role Type"
            ],
            [
                "key" => "role_type_name_ar",
                "default_en" => "Role type name (arabic)",
                "default_ar" => "اسم نوع الدور (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "role Type"
            ],
            [
                "key" => "role_type_name_en",
                "default_en" => "Role type name (english)",
                "default_ar" => "اسم نوع الدور (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "role Type"
            ],
        ]);
        //Role
        Translation::insert([
            [
                "key" => "role_create_form",
                "default_en" => "Add new role",
                "default_ar" => "اضف دور جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "roles"
            ],
            [
                "key" => "role_edit_form",
                "default_en" => "Edit role form",
                "default_ar" => "نموذج تعديل الدور",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "roles"
            ],
            [
                "key" => "role_name_ar",
                "default_en" => "Role name (arabic)",
                "default_ar" => "اسم الدور (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "roles"
            ],
            [
                "key" => "role_name_en",
                "default_en" => "Role name (english)",
                "default_ar" => "اسم الدور (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "roles"
            ],
            [
                "key" => "role_type",
                "default_en" => "Role type name",
                "default_ar" => "اسم نوع الدور",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen" => "roles"
            ],
        ]);
        //Role workflow
        Translation::insert([
            [
                "key" => "role_workflow_create_form",
                "default_en" => "Add new role workflow",
                "default_ar" => "اضف دور سير عمل جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow"
            ],
            [
                "key" => "role_workflow_edit_form",
                "default_en" => "Edit role workflow form",
                "default_ar" => "نموذج تعديل دور سير العمل ",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow"
            ],
            [
                "key" => "role",
                "default_en" => "Role name",
                "default_ar" => "اسم الدور",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow"
            ],
            [
                "key" => "workflow",
                "default_en" => "Workflow name",
                "default_ar" => "اسم سير العمل",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow"
            ],
        ]);
        //Role workflow button
        Translation::insert([
            [
                "key" => "role_workflow_button_create_form",
                "default_en" => "Add new role workflow button",
                "default_ar" => "اضف دور سير عمل زر جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow button"
            ],
            [
                "key" => "role_workflow_button_edit_form",
                "default_en" => "Edit role workflow button form",
                "default_ar" => "نموذج تعديل دور سير العمل والزرار ",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow button"
            ],
            [
                "key" => "button",
                "default_en" => "Button name",
                "default_ar" => "اسم الزرار",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow button"
            ],
            [
                "key" => "role",
                "default_en" => "Role name",
                "default_ar" => "اسم الدور",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow button"
            ],
            [
                "key" => "workflow",
                "default_en" => "Workflow name",
                "default_ar" => "اسم سير العمل",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role workflow button"
            ],
        ]);
        //Role hotfield screen
        Translation::insert([
            [
                "key" => "role_hotfield_screen_create_form",
                "default_en" => "Add new role hotfield screen",
                "default_ar" => "اضف الدور مع الحقل والشاشة جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role hotfield screen",
            ],
            [
                "key" => "role_hotfield_screen_edit_form",
                "default_en" => "Edit role hotfield screen form",
                "default_ar" => "نموذج تعديل الدور مع الحقل والشاشة ",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role hotfield screen",
            ],
            [
                "key" => "hotfield",
                "default_en" => "Hotfield name",
                "default_ar" => "اسم الحقل الساخن",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role hotfield screen",
            ],
            [
                "key" => "role",
                "default_en" => "Role name",
                "default_ar" => "اسم الدور",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role hotfield screen"
            ],
            [
                "key" => "workflow",
                "default_en" => "Workflow name",
                "default_ar" => "اسم سير العمل",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"role hotfield screen"
            ],
        ]);
        //Workflow hotfield
        Translation::insert([
            [
                "key" => "workflow_hotfield_create_form",
                "default_en" => "Add new workflow hotfield",
                "default_ar" => "اضف سير العمل مع الحقل",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"Workflow hotfields"
            ],
            [
                "key" => "workflow_hotfield_edit_form",
                "default_en" => "Edit workflow hotfield form",
                "default_ar" => "نموذج تعديل سير العمل والحقل ",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"Workflow hotfields"
            ],
            [
                "key" => "hotfield",
                "default_en" => "Hotfield name",
                "default_ar" => "اسم الحقل الساخن",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"Workflow hotfields",
            ],
            [
                "key" => "workflow",
                "default_en" => "Workflow name",
                "default_ar" => "اسم سير العمل",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"Workflow hotfields"
            ],
        ]);
        //Users
        Translation::insert([
            [
                "key" => "user_create_form",
                "default_en" => "Add new user",
                "default_ar" => "اضف مستخدم جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "user_edit_form",
                "default_en" => "Edit user form",
                "default_ar" => "تعديل نموذج المستخدم",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "user_name_ar",
                "default_en" => "User name (arabic)",
                "default_ar" => "اسم المستخدم (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "user_name_en",
                "default_en" => "User name (english)",
                "default_ar" => "اسم المستخدم (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "user_status",
                "default_en" => "User status",
                "default_ar" => "حالة المستخدم",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "user_email",
                "default_en" => "User email",
                "default_ar" => "البريد الالكتروني للمستخدم",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "employee",
                "default_en" => "Employee name",
                "default_ar" => "اسم الموظف",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
            [
                "key" => "user_password",
                "default_en" => "User Password",
                "default_ar" => "كلمة مرور المستخدم",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"users"
            ],
        ]);
        //Currency
        Translation::insert([
            [
                "key" => "currency_create_form",
                "default_en" => "Add new currency",
                "default_ar" => "اضف عملة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"
            ],
            [
                "key" => "currency_edit_form",
                "default_en" => "Edit currency form",
                "default_ar" => "تعديل نموذج العملة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_name_ar",
                "default_en" => "Currency name (arabic)",
                "default_ar" => "اسم العملة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_name_en",
                "default_en" => "Currency name (english)",
                "default_ar" => "اسم العملة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_code_ar",
                "default_en" => "Currency code (arabic)",
                "default_ar" => "كود العملة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_code_en",
                "default_en" => "Currency code (english)",
                "default_ar" => "كود العملة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_fraction_ar",
                "default_en" => "Currency fraction (arabic)",
                "default_ar" => "كسر العملة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_fraction_en",
                "default_en" => "Currency fraction (english)",
                "default_ar" => "كسر العملة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_symbol_ar",
                "default_en" => "Currency symbol (arabic)",
                "default_ar" => "رمز العملة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"
            ],
            [
                "key" => "currency_symbol_en",
                "default_en" => "Currency symbol (english)",
                "default_ar" => "رمز العملة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_status",
                "default_en" => "Currency status",
                "default_ar" => "حالة العملة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_default",
                "default_en" => "Currency default",
                "default_ar" => "الحالة الافتراضية للعملة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
            [
                "key" => "currency_fraction_number",
                "default_en" => "Currency fraction number",
                "default_ar" => "رقم كسر العملة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"currencies"

            ],
        ]);
        //Employee
        Translation::insert([
            [
                "key" => "employee_create_form",
                "default_en" => "Add new employee",
                "default_ar" => "اضف موظف جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"employees"
            ],
            [
                "key" => "employee_edit_form",
                "default_en" => "Edit employee form",
                "default_ar" => "تعديل نموذج الموظف",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"employees"

            ],
            [
                "key" => "employee_name_ar",
                "default_en" => "Employee name (arabic)",
                "default_ar" => "اسم الموظف (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"employees"

            ],
            [
                "key" => "employee_name_en",
                "default_en" => "Employee name (english)",
                "default_ar" => "اسم الموظف (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"employees"

            ],
        ]);
        //Financial Year
        Translation::insert([
            [
                "key" => "financial_year_create_form",
                "default_en" => "Add new financial year",
                "default_ar" => "اضف سنة مالية جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"financial Year"
            ],
            [
                "key" => "financial_year_edit_form",
                "default_en" => "Edit financial year form",
                "default_ar" => "تعديل نموذج السنة المالية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"financial Year"

            ],
            [
                "key" => "financial_year_name_ar",
                "default_en" => "Financial year name (arabic)",
                "default_ar" => "اسم السنة المالية (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"financial Year"

            ],
            [
                "key" => "financial_year_name_en",
                "default_en" => "Financial year name (english)",
                "default_ar" => "اسم السنة المالية (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"financial Year"

            ],
            [
                "key" => "financial_year_start_date",
                "default_en" => "Financial year start date",
                "default_ar" => "بداية تاريخ السنة المالية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"financial Year"

            ],
            [
                "key" => "financial_year_end_date",
                "default_en" => "Financial year end date",
                "default_ar" => "نهاية تاريخ السنة المالية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"financial Year"

            ],
        ]);
        //Units
        Translation::insert([
            [
                "key" => "unit_create_form",
                "default_en" => "Add new unit",
                "default_ar" => "اضف وحدة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"units"
            ],
            [
                "key" => "unit_edit_form",
                "default_en" => "Edit unit form",
                "default_ar" => "نموذج تعديل الوحدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"units"

            ],
            [
                "key" => "unit_name_ar",
                "default_en" => "Unit name (arabic)",
                "default_ar" => "اسم الوحدة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"units"

            ],
            [
                "key" => "unit_name_en",
                "default_en" => "Unit name (english)",
                "default_ar" => "اسم الوحدة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"units"

            ],
            [
                "key" => "unit_status",
                "default_en" => "Unit status",
                "default_ar" => "حالة الوحدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"units"

            ],
        ]);
        //Color
        Translation::insert([
            [
                "key" => "color_create_form",
                "default_en" => "Add new color",
                "default_ar" => "اضف لون جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"color"
            ],
            [
                "key" => "color_edit_form",
                "default_en" => "Edit color form",
                "default_ar" => "نموذج تعديل اللون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"color"

            ],
            [
                "key" => "color_name_ar",
                "default_en" => "Color name (arabic)",
                "default_ar" => "اسم اللون (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"color"

            ],
            [
                "key" => "color_name_en",
                "default_en" => "Color name (english)",
                "default_ar" => "اسم اللون (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"color"

            ],
            [
                "key" => "color_status",
                "default_en" => "Color status",
                "default_ar" => "حالة اللون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"color"

            ],
        ]);
        //Contract unit
        Translation::insert([
            [
                "key" => "contractunit_create_form",
                "default_en" => "Add new contract unit form",
                "default_ar" => "اضف وحدة عقد جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract unit"
            ],
            [
                "key" => "contractunit_edit_form",
                "default_en" => "Edit contract unit form",
                "default_ar" => "نموذج تعديل وحدة عقد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract unit"

            ],
        ]);
        //Contract
        Translation::insert([
            [
                "key" => "contract_create_form",
                "default_en" => "Add new contract",
                "default_ar" => "اضف عقد جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract"
            ],
            [
                "key" => "contract_edit_form",
                "default_en" => "Edit contract form",
                "default_ar" => "تعديل نموذج العقد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract"

            ],
            [
                "key" => "customer",
                "default_en" => "Customer name",
                "default_ar" => "اسم الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract"
            ],
            [
                "key" => "contract_date",
                "default_en" => "Contract date",
                "default_ar" => "تاريخ العقد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract"
            ],
            [
                "key" => "sale_man",
                "default_en" => "Sale man name",
                "default_ar" => "اسم رجل المبيعات",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract"

            ],
            [
                "key" => "reservation_date",
                "default_en" => "Reservation date",
                "default_ar" => "تاريخ الحجز",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"contract"

            ],
        ]);
        //real estate units
        Translation::insert([
            [
                "key" => "realEstate_unit_create_form",
                "default_en" => "Add New Unit",
                "default_ar" => "اضف وحده جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"
            ],
            [
                "key" => "realEstate_unit_edit_form",
                "default_en" => "Edit color form",
                "default_ar" => "نموذج تعديل الوحده",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_name_ar",
                "default_en" => "Unit Name (arabic)",
                "default_ar" => "اسم وحده (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_name_en",
                "default_en" => "Unit Name (english)",
                "default_ar" => "اسم وحده (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_description_ar",
                "default_en" => "Unit Description (arabic)",
                "default_ar" => "وصف  الوحده (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_description_en",
                "default_en" => "Unit Description (english)",
                "default_ar" => "وصف الوحده (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_code",
                "default_en" => "Unit Code",
                "default_ar" => "كود الوحده (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_unit_ty",
                "default_en" => "Unit Ty (realEstate)",
                "default_ar" => "Unit Ty",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_status_date",
                "default_en" => "Status Date (realEstate)",
                "default_ar" => "وقت الحاله",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_unit_area",
                "default_en" => "Unit Area (realEstate)",
                "default_ar" => "مساحه الوحده",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_building",
                "default_en" => "Unit building (realEstate)",
                "default_ar" => "وحده المبنا (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_owner",
                "default_en" => "Unit Owner (realEstate)",
                "default_ar" => "مالك المبني (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_currency",
                "default_en" => "Unit Currency (realEstate)",
                "default_ar" => "عمله الوحده (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_wallet",
                "default_en" => "Unit wallet (realEstate)",
                "default_ar" => "محفظه الوحده (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_wallet",
                "default_en" => "Unit wallet (realEstate)",
                "default_ar" => "محفظه الوحده (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_status",
                "default_en" => "Unit Status (realEstate)",
                "default_ar" => "حاله الوحده (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_price",
                "default_en" => "price (realEstate)",
                "default_ar" => "سعر (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_commission_ty",
                "default_en" => "Commission ty (realEstate)",
                "default_ar" => "Commission Ty (realEstate)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_commission_value",
                "default_en" => "Commission Value (realEstate)",
                "default_ar" => "قيمة العموله (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_commission_ty",
                "default_en" => "Commission ty (realEstate)",
                "default_ar" => "Commission Ty",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_rooms",
                "default_en" => "Rooms (realEstate)",
                "default_ar" => "الغرف (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_path",
                "default_en" => "Path (realEstate)",
                "default_ar" => "حمام (عقارات) ",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_floor",
                "default_en" => "Floor (realEstate)",
                "default_ar" => "الارضيه (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_view",
                "default_en" => "View (realEstate)",
                "default_ar" => "View (realEstate)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_rank",
                "default_en" => "Rank (realEstate)",
                "default_ar" => "مرتبه (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ],
            [
                "key" => "realEstate_unit_module",
                "default_en" => "Module (realEstate)",
                "default_ar" => "موديول (عقارات)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"realEstate units"

            ]
        ]);
        //Owners
        Translation::insert([
            [
                "key" => "owner_create_form",
                "default_en" => "Add new owner",
                "default_ar" => "اضف مالك جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"
            ],
            [
                "key" => "owner_edit_form",
                "default_en" => "Edit owner form",
                "default_ar" => "نموذج تعديل المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_name_ar",
                "default_en" => "Owner name (arabic)",
                "default_ar" => "اسم المالك (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_name_en",
                "default_en" => "Owner name (english)",
                "default_ar" => "اسم المالك (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_phone",
                "default_en" => "Owner phone",
                "default_ar" => "هاتف المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_email",
                "default_en" => "Owner email",
                "default_ar" => "بريد الكترون المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_nationality",
                "default_en" => "Owner nationality",
                "default_ar" => "جنسية المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_national_id",
                "default_en" => "Owner national id",
                "default_ar" => "الرقم القومي للمالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_contact_person",
                "default_en" => "Owner contact person",
                "default_ar" => "معلومات المالك الشخصية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_contact_phones",
                "default_en" => "Owner contact phones",
                "default_ar" => "هواتف اتصال المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "city",
                "default_en" => "City name",
                "default_ar" => "اسم المدينة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "bank_account",
                "default_en" => "Bank account name",
                "default_ar" => "اسم الحساب البنكي",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_whatsapp",
                "default_en" => "Owner whatsapp",
                "default_ar" => "رقم واتساب المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
            [
                "key" => "owner_code",
                "default_en" => "Owner code",
                "default_ar" => "كود المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"owners"

            ],
        ]);
        //Buildings
        Translation::insert([
            [
                "key" => "building_create_form",
                "default_en" => "Add new building",
                "default_ar" => "اضف بناء جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"
            ],
            [
                "key" => "building_edit_form",
                "default_en" => "Edit building form",
                "default_ar" => "نموذج تعديل البناء",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_name_ar",
                "default_en" => "Building name (arabic)",
                "default_ar" => "اسم البناء (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_name_en",
                "default_en" => "Building name (english)",
                "default_ar" => "اسم البناء (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_description_ar",
                "default_en" => "Building description (arabic)",
                "default_ar" => "وصف البناء (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_description_en",
                "default_en" => "Building description (english)",
                "default_ar" => "وصف البناء (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_area",
                "default_en" => "Building area (m)",
                "default_ar" => "مساحة البناء (متر)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_land_area",
                "default_en" => "Building land area (m)",
                "default_ar" => "مساحةارض البناء (متر)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_construction_year",
                "default_en" => "Building construction year",
                "default_ar" => "سنة تاسيس البناء",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "module",
                "default_en" => "Module name",
                "default_ar" => "اسم الوحدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "city",
                "default_en" => "City name",
                "default_ar" => "اسم المدينة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"
            ],

            [
                "key" => "governorate",
                "default_en" => "Governorate name",
                "default_ar" => "اسم المحافظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],

            [
                "key" => "avenue",
                "default_en" => "Avenue name",
                "default_ar" => "اسم المنطقة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_longitude",
                "default_en" => "Building longitude",
                "default_ar" => "خطوط طول المبنى",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
            [
                "key" => "building_latitude",
                "default_en" => "Building latitude",
                "default_ar" => "خطوط عرض المبنى",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"building"

            ],
        ]);
        //Customers
        Translation::insert([
            [
                "key" => "customer_create_form",
                "default_en" => "Add new customer",
                "default_ar" => "اضف زبون جديد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"
            ],
            [
                "key" => "customer_edit_form",
                "default_en" => "Edit customer form",
                "default_ar" => "نموذج تعديل الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "country",
                "default_en" => "Country name",
                "default_ar" => "اسم الدولة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "city",
                "default_en" => "City name",
                "default_ar" => "اسم المدينة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_name_ar",
                "default_en" => "Customer name (arabic)",
                "default_ar" => "اسم الزبون (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_name_en",
                "default_en" => "Customer name (english)",
                "default_ar" => "اسم الزبون (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_phone",
                "default_en" => "Customer phone",
                "default_ar" => "هاتف الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_email",
                "default_en" => "Customer email",
                "default_ar" => "بريد الزبون الالكتروني",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_nationality",
                "default_en" => "Customer nationality",
                "default_ar" => "جنسية الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_national_id",
                "default_en" => "Customer national id",
                "default_ar" => "الرقم القومي للزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_contact_person",
                "default_en" => "Customer contact person",
                "default_ar" => "معلومات الزبون الشخصية",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_contact_phones",
                "default_en" => "Customer contact phones",
                "default_ar" => "هواتف اتصال الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_whatsapp",
                "default_en" => "Customer whatsapp",
                "default_ar" => "رقم واتساب الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_code",
                "default_en" => "Customer code",
                "default_ar" => "كود الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
            [
                "key" => "customer_passport_number",
                "default_en" => "Customer passport number",
                "default_ar" => "رقم جواز سفر الزبون",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"customer"

            ],
        ]);
        //Building wallet
        Translation::insert([
            [
                "key" => "building_wallet_create_form",
                "default_en" => "Add new building wallet",
                "default_ar" => "اضافة محفظة بناء جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
            ],
            [
                "key" => "building_wallet_edit_form",
                "default_en" => "Edit building wallet form",
                "default_ar" => "نموذج تعديل محفظة البناء",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
            ],
            [
                "key" => "building",
                "default_en" => "Building name",
                "default_ar" => "اسم البناء",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
            ],
            [
                "key" => "wallet",
                "default_en" => "Wallet name",
                "default_ar" => "اسم المحفظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
            ],
            [
                "key" => "building_wallet_bu_ty",
                "default_en" => "Buty",
                "default_ar" => "الزبد",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
            ],
        ]);
        //Wallet
        Translation::insert([
            [
                "key" => "wallet_create_form",
                "default_en" => "Add new wallet",
                "default_ar" => "اضافة محفظة جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallets"
            ],
            [
                "key" => "wallet_edit_form",
                "default_en" => "Edit wallet form",
                "default_ar" => "نموذج تعديل محفظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallets"

            ],
            [
                "key" => "wallet_name_ar",
                "default_en" => "Wallet name (arabic)",
                "default_ar" => "اسم المحفظة (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallets"
            ],
            [
                "key" => "wallet_name_en",
                "default_en" => "Wallet name (english)",
                "default_ar" => "اسم المحفظة (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallets"

            ],
        ]);
        //Wallet owner
        Translation::insert([
            [
                "key" => "wallet_owner_create_form",
                "default_en" => "Add new wallet owner",
                "default_ar" => "اضافة محفظة مالك جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallet owner"
            ],
            [
                "key" => "wallet_owner_edit_form",
                "default_en" => "Edit wallet owner form",
                "default_ar" => "نموذج تعديل محفظة المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallet owner"
            ],
            [
                "key" => "wallet",
                "default_en" => "Wallet name",
                "default_ar" => "اسم المحفظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallet owner"
            ],
            [
                "key" => "owner",
                "default_en" => "Owner name",
                "default_ar" => "اسم المالك",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallet owner"
            ],
            [
                "key" => "wallet_owner_percentage",
                "default_en" => "Wallet owner percentage",
                "default_ar" => "النسبة المئوية لمالك المحفظة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallet owner"
            ],
        ]);
        //Installment Status
        Translation::insert([
            [
                "key" => "installment_status_create_form",
                "default_en" => "Add new Installment Status",
                "default_ar" => "اضافة حاله تقسيط جديدة",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"installment status"
            ],
            [
                "key" => "installment_status_edit_form",
                "default_en" => "Edit  Installment Status",
                "default_ar" => "نموذج تعديل حاله التقسيط",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"installment status"
            ],
            [
                "key" => "installment_status_name",
                "default_en" => "Installment Status name (arabic)",
                "default_ar" => "اسم حاله التقسيط (عربي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"installment status"
            ],
            [
                "key" => "installment_status_name_e",
                "default_en" => "installment_status name (english)",
                "default_ar" => "اسم حاله التقسيط (انجليزي)",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"installment status"
            ],
            [
                "key" => "installment_status_default",
                "default_en" => "Installment Status Default",
                "default_ar" => "الحالة الافتراضية لحاله التقسيط",
                "new_ar" => "",
                "new_en" => "",
                "company_id" => 0,
                "screen"=>"wallet owner"
            ],
        ]);
    }
}
