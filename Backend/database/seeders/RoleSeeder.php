<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['role_name' => 'Admin', 'description' => 'Full system control']);
        Role::create(['role_name' => 'Management', 'description' => 'Manages daily tasks']);
        Role::create(['role_name' => 'Customer', 'description' => 'Makes reservations']);
        Role::create(['role_name' => 'Kitchen Staff', 'description' => 'Making dishes']);
    }
}
