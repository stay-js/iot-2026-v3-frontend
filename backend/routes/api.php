<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\TypeController;
use Illuminate\Support\Facades\Route;

Route::apiResources([
    'products' => ProductController::class,
    'types' => TypeController::class,
]);
