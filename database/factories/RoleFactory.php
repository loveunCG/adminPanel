<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Role::class, function (Faker $faker) {
    return [
        //
        'name' => $faker->unique()->domainWord,
        'display_name' => $faker->name,
        'description' => $faker->realText($maxNbChars = 100, $indexSize = 2),
    ];
});
