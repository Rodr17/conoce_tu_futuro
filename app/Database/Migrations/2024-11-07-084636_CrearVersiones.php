<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearVersiones extends Migration
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
            'id_modelo'   => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'nombre'      => [
                'type'       => 'VARCHAR',
                'constraint' => 150,
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
        $this->forge->addForeignKey('id_modelo', 'modelos', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('versiones');
    }

    public function down()
    {
        $this->db->disableForeignKeyChecks();

        $this->forge->dropTable('versiones', true);
    }
}
