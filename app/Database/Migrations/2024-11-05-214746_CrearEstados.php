<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearEstados extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'      => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'id_pais' => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true
            ],
            'nombre'  => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_pais', 'paises', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('estados');
    }

    public function down()
    {
        $this->db->disableForeignKeyChecks();

        $this->forge->dropTable('estados', true);

        $this->db->enableForeignKeyChecks();
    }
}