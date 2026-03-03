<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            // Típus 1: Érzékelő
            [
                'manufacturer' => 'Bosch',
                'product_name' => 'BME280 Hőmérséklet és páratartalom érzékelő',
                'type_id' => 1,
                'stock' => 12,
                'price' => 12000,
            ],
            [
                'manufacturer' => 'Honeywell',
                'product_name' => 'HIH6130 Páratartalom érzékelő',
                'type_id' => 1,
                'stock' => 8,
                'price' => 11000,
            ],
            [
                'manufacturer' => 'Sensirion',
                'product_name' => 'SHT31 Intelligens érzékelő',
                'type_id' => 1,
                'stock' => 0,
                'price' => 12500,
            ],
            // Típus 2: Aktuátor
            [
                'manufacturer' => 'Siemens',
                'product_name' => 'Sinamics Aktuátor',
                'type_id' => 2,
                'stock' => 15,
                'price' => 45000,
            ],
            [
                'manufacturer' => 'ABB',
                'product_name' => 'ACS Aktuátor',
                'type_id' => 2,
                'stock' => 10,
                'price' => 47000,
            ],
            [
                'manufacturer' => 'Schneider Electric',
                'product_name' => 'Altivar Aktuátor',
                'type_id' => 2,
                'stock' => 0,
                'price' => 46000,
            ],
            // Típus 3: Átjáró
            [
                'manufacturer' => 'Cisco',
                'product_name' => 'IoT Átjáró One',
                'type_id' => 3,
                'stock' => 20,
                'price' => 55000,
            ],
            [
                'manufacturer' => 'Digi',
                'product_name' => 'IoT Átjáró Pro',
                'type_id' => 3,
                'stock' => 18,
                'price' => 53000,
            ],
            [
                'manufacturer' => 'Netgear',
                'product_name' => 'Smart Átjáró',
                'type_id' => 3,
                'stock' => 0,
                'price' => 54000,
            ],
            // Típus 4: Vezérlő
            [
                'manufacturer' => 'Rockwell',
                'product_name' => 'I/O Vezérlő',
                'type_id' => 4,
                'stock' => 12,
                'price' => 80000,
            ],
            [
                'manufacturer' => 'Siemens',
                'product_name' => 'Simatic Vezérlő',
                'type_id' => 4,
                'stock' => 7,
                'price' => 82000,
            ],
            [
                'manufacturer' => 'Mitsubishi',
                'product_name' => 'PLC Vezérlő',
                'type_id' => 4,
                'stock' => 0,
                'price' => 81000,
            ],
            // Típus 5: Kamera
            [
                'manufacturer' => 'Hikvision',
                'product_name' => 'IP Kamera',
                'type_id' => 5,
                'stock' => 25,
                'price' => 35000,
            ],
            [
                'manufacturer' => 'Dahua',
                'product_name' => 'HD Kamera',
                'type_id' => 5,
                'stock' => 30,
                'price' => 36000,
            ],
            [
                'manufacturer' => 'Axis',
                'product_name' => 'Biztonsági Kamera',
                'type_id' => 5,
                'stock' => 0,
                'price' => 37000,
            ],
            // Típus 6: Mérőműszer
            [
                'manufacturer' => 'Fluke',
                'product_name' => 'Multiméter',
                'type_id' => 6,
                'stock' => 14,
                'price' => 20000,
            ],
            [
                'manufacturer' => 'Extech',
                'product_name' => 'Digital Multiméter',
                'type_id' => 6,
                'stock' => 9,
                'price' => 21000,
            ],
            [
                'manufacturer' => 'Klein Tools',
                'product_name' => 'Elektronikus Mérőműszer',
                'type_id' => 6,
                'stock' => 0,
                'price' => 20500,
            ],
            // Típus 7: Adatgyűjtő
            [
                'manufacturer' => 'Raspberry Pi',
                'product_name' => 'Data Collector Pi',
                'type_id' => 7,
                'stock' => 22,
                'price' => 15000,
            ],
            [
                'manufacturer' => 'Arduino',
                'product_name' => 'Data Logger Uno',
                'type_id' => 7,
                'stock' => 18,
                'price' => 14000,
            ],
            [
                'manufacturer' => 'BeagleBoard',
                'product_name' => 'Adatgyűjtő BeagleBone',
                'type_id' => 7,
                'stock' => 0,
                'price' => 15500,
            ],
            // Típus 8: Mikrokontroller
            [
                'manufacturer' => 'Arduino',
                'product_name' => 'Arduino Uno R3',
                'type_id' => 8,
                'stock' => 35,
                'price' => 7000,
            ],
            [
                'manufacturer' => 'ESP',
                'product_name' => 'ESP8266 Modul',
                'type_id' => 8,
                'stock' => 30,
                'price' => 7500,
            ],
            [
                'manufacturer' => 'STMicroelectronics',
                'product_name' => 'STM32F103C8',
                'type_id' => 8,
                'stock' => 0,
                'price' => 8000,
            ],
            // Típus 9: Szenzorhub
            [
                'manufacturer' => 'Samsung',
                'product_name' => 'Smart Hub',
                'type_id' => 9,
                'stock' => 11,
                'price' => 22000,
            ],
            [
                'manufacturer' => 'LG',
                'product_name' => 'IoT Hub',
                'type_id' => 9,
                'stock' => 13,
                'price' => 21000,
            ],
            [
                'manufacturer' => 'Panasonic',
                'product_name' => 'Sensor Hub Pro',
                'type_id' => 9,
                'stock' => 0,
                'price' => 23000,
            ],
            // Típus 10: Kommunikációs modul
            [
                'manufacturer' => 'Quectel',
                'product_name' => 'LTE Modul',
                'type_id' => 10,
                'stock' => 19,
                'price' => 27000,
            ],
            [
                'manufacturer' => 'SimCom',
                'product_name' => '4G Modul',
                'type_id' => 10,
                'stock' => 16,
                'price' => 26000,
            ],
            [
                'manufacturer' => 'USI',
                'product_name' => '5G Modul',
                'type_id' => 10,
                'stock' => 0,
                'price' => 28000,
            ],
            // Típus 11: Intelligens szenzor
            [
                'manufacturer' => 'Bosch',
                'product_name' => 'Smart Sensor Pro',
                'type_id' => 11,
                'stock' => 18,
                'price' => 32000,
            ],
            [
                'manufacturer' => 'Honeywell',
                'product_name' => 'Intelli Sensor',
                'type_id' => 11,
                'stock' => 20,
                'price' => 31000,
            ],
            [
                'manufacturer' => 'Siemens',
                'product_name' => 'SmartSense',
                'type_id' => 11,
                'stock' => 0,
                'price' => 33000,
            ],
            // Típus 12: Robotikai egység
            [
                'manufacturer' => 'Universal Robots',
                'product_name' => 'UR3',
                'type_id' => 12,
                'stock' => 10,
                'price' => 150000,
            ],
            [
                'manufacturer' => 'KUKA',
                'product_name' => 'KR QUANTEC',
                'type_id' => 12,
                'stock' => 5,
                'price' => 155000,
            ],
            [
                'manufacturer' => 'ABB',
                'product_name' => 'IRB 1600',
                'type_id' => 12,
                'stock' => 0,
                'price' => 160000,
            ],
            // Típus 13: Energiagazdálkodó
            [
                'manufacturer' => 'Schneider Electric',
                'product_name' => 'Energy Manager',
                'type_id' => 13,
                'stock' => 12,
                'price' => 45000,
            ],
            [
                'manufacturer' => 'Siemens',
                'product_name' => 'Energy Controller',
                'type_id' => 13,
                'stock' => 7,
                'price' => 46000,
            ],
            [
                'manufacturer' => 'ABB',
                'product_name' => 'Power Optimizer',
                'type_id' => 13,
                'stock' => 0,
                'price' => 47000,
            ],
            // Típus 14: Biztonsági rendszer
            [
                'manufacturer' => 'Honeywell',
                'product_name' => 'Security Suite',
                'type_id' => 14,
                'stock' => 14,
                'price' => 85000,
            ],
            [
                'manufacturer' => 'Bosch',
                'product_name' => 'Safe Control',
                'type_id' => 14,
                'stock' => 10,
                'price' => 83000,
            ],
            [
                'manufacturer' => 'ADT',
                'product_name' => 'Secure System',
                'type_id' => 14,
                'stock' => 0,
                'price' => 87000,
            ],
            // Típus 15: Hálózati eszköz
            [
                'manufacturer' => 'Cisco',
                'product_name' => 'Router Pro',
                'type_id' => 15,
                'stock' => 20,
                'price' => 90000,
            ],
            [
                'manufacturer' => 'Juniper',
                'product_name' => 'Switch X',
                'type_id' => 15,
                'stock' => 15,
                'price' => 88000,
            ],
            [
                'manufacturer' => 'Netgear',
                'product_name' => 'Access Point',
                'type_id' => 15,
                'stock' => 0,
                'price' => 86000,
            ],
        ];

        Product::insert($products);
    }
}
