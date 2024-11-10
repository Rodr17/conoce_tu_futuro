<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearPaises extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'     => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'nombre' => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('paises');
    }

    public function down()
    {
        $this->forge->dropTable('paises', true);
    }
}