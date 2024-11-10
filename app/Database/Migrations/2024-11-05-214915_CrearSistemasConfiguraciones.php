<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearSistemasConfiguraciones extends Migration
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
            'id_sistema' => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'nombre'     => [
                'type'       => 'VARCHAR',
                'constraint' => 100,
                'unique'     => true,
            ],
            'etiqueta'   => [
                'type'       => 'VARCHAR',
                'constraint' => 150,
            ],
            'tipo'       => [
                'type'       => 'VARCHAR',
                'constraint' => 50,
                'default'    => 'input',
            ],
            'opciones'   => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'valor'      => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'atributos'  => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'orden'      => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
                'default'    => 0,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_sistema', 'sistemas', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('sistemas_configuraciones');
    }

    public function down()
    {
        $this->db->disableForeignKeyChecks();

        $this->forge->dropTable('sistemas_configuraciones', true);
    }
}