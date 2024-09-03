<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\KehadiranController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\MapelController;
use App\Http\Controllers\GuruController;

Route::get('/', function(){
    return view('welcome');
})->name('home');

// Route::get('/siswa', [SiswaController::class, 'index'])->name('siswa');
// Route::get('/siswa/create', [SiswaController::class, 'create'])->name('siswa-create');
// Route::get('/kehadiran', [KehadiranController::class, 'index'])->name('kehadiran');
// Route::get('/kehadiran/create', [KehadiranController::class, 'create'])->name('kehadiran-create');

// // kelas
// Route::get('/kelas', [KelasController::class, 'index'])->name('kelas');
// Route::get('/kelas/create', [KelasController::class, 'create'])->name('kelas-create');
// Route::post('/kelas/store', [KelasController::class, 'store'])->name('kelas-store');
// Route::get('/kelas/edit/{id}', [KelasController::class, 'edit'])->name('kelas-edit');
// Route::post('/kelas/update/{id}', [KelasController::class, 'update'])->name('kelas-update');

// // mapel
// Route::get('/mapel', [MapelController::class, 'index'])->name('mapel');

// // guru
// Route::get('/guru', [GuruController::class, 'index'])->name('guru');
