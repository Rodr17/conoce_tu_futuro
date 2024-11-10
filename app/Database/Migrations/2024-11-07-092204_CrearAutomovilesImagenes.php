<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearAutomovilesImagenes extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'           => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'id_automovil' => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'nombre'       => [
                'type'       => 'VARCHAR',
                'constraint' => 150,
                'unique'     => true,
            ],
            'creado'       => [
                'type' => 'DATETIME',
            ],
            'actualizado'  => [
                'type' => 'DATETIME',
            ],
            'eliminado'    => [
                'type'    => 'DATETIME',
                'default' => null,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_automovil', 'automoviles', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('automoviles_imagenes');
    }

    public function down()
    {
        $this->db->disableForeignKeyChecks();

        $this->forge->dropTable('automoviles_imagenes', true);
    }
}
