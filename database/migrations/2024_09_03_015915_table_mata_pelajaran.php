<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('matpels', function (Blueprint $table) {
            $table->id();
            $table->string('nama_mapel');
            $table->string('kode_mapel')->unique();
            $table->text('deskripsi')->nullable();
            $table->integer('jumlah_jam');
            $table->string('semester');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
