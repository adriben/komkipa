<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommandsController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/commandKeeper', function () {
    return view('commandKeeper');
});

Route::post('/commandKeeper', [CommandsController::class, 'create'])->name('commandKeeper');

