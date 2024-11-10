<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearColores extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'          => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'nombre'      => [
                'type'       => 'VARCHAR',
                'constraint' => 150,
                'unique'     => true,
            ],
            'hexadecimal' => [
                'type'       => 'VARCHAR',
                'constraint' => 8,
                'unique'     => true,
            ],
            'creado'      => [
                'type' => 'DATETIME',
            ],
            'actualizado' => [
                'type' => 'DATETIME',
            ],
            'eliminado'   => [
                'type'    => 'DATETIME',
                'default' => null,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('colores');
    }

    public function down()
    {
        $this->forge->dropTable('colores', true);
    }
}