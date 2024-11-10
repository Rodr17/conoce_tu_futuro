<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearFavoritosAutomoviles extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'         => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'id_usuario' => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'id_automovil' => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_usuario', 'usuarios', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('id_automovil', 'automoviles', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('favoritos_automoviles');
    }

    public function down()
    {
        $this->db->disableForeignKeyChecks();

        $this->forge->dropTable('favoritos_automoviles', true);
    }
}
