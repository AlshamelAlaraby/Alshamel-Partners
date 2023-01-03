<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        for ($i = 0; $i < 50; $i++) {
            Country::create([
                "name" => "name $i",
                "name_e" => "name_e $i",
                "phone_key" => "123468$i",
                "national_id_length" => "46579$i",
                "long_name" => "long_name $i",
                "long_name_e" => "long_name_e $i",
                "short_code" => "$i",
            ]);

        }
    }
}
