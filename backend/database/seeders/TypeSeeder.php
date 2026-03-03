<?php

namespace Database\Seeders;

use App\Models\Type;
use Illuminate\Database\Seeder;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $types = [
            ['id' => 1, 'name' => 'Érzékelő'],
            ['id' => 2, 'name' => 'Aktuátor'],
            ['id' => 3, 'name' => 'Átjáró'],
            ['id' => 4, 'name' => 'Vezérlő'],
            ['id' => 5, 'name' => 'Kamera'],
            ['id' => 6, 'name' => 'Mérőműszer'],
            ['id' => 7, 'name' => 'Adatgyűjtő'],
            ['id' => 8, 'name' => 'Mikrokontroller'],
            ['id' => 9, 'name' => 'Szenzorhub'],
            ['id' => 10, 'name' => 'Kommunikációs modul'],
            ['id' => 11, 'name' => 'Intelligens szenzor'],
            ['id' => 12, 'name' => 'Robotikai egység'],
            ['id' => 13, 'name' => 'Energiagazdálkodó'],
            ['id' => 14, 'name' => 'Biztonsági rendszer'],
            ['id' => 15, 'name' => 'Hálózati eszköz'],
        ];

        Type::insert($types);
    }
}
