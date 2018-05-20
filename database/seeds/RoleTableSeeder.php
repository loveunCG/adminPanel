<?php

use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        factory(App\Models\Role::class)->create()->each(function ($role) {
            $role->attachPermission((factory(App\Models\Permission::class)->make()));
        });
    }
}
