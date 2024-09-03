<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    //2024_09_03_023914 semester
    //2024_09_03_014934_table_jadwal_pelajaran
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jadwal_matpels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_kelas')->constrained('kelas')->onDelete('cascade');
            $table->foreignId('id_semester')->constrained('semesters')->onDelete('cascade');
            $table->string('hari');
            $table->time('waktu_mulai');
            $table->time('waktu_selesai');
            $table->string('ruang');
            $table->foreignId('id_guru')->constrained('gurus')->onDelete('cascade');
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
