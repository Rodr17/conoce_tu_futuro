<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearRoles extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'             => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'nombre'         => [
                'type'       => 'VARCHAR',
                'constraint' => 25,
                'unique'     => true,
            ],
            'permisos'       => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'title'          => [
                'type'       => 'VARCHAR',
                'constraint' => 25,
            ],
            'description'    => [
                'type' => 'TEXT',
                'null' => true,
            ],
            'predeterminado' => [
                'type'    => 'BOOLEAN',
                'default' => false,
            ],
            'estatus'        => [
                'type'    => 'BOOLEAN',
                'default' => true,
            ],
            'creado'         => [
                'type' => 'DATETIME',
            ],
            'actualizado'    => [
                'type' => 'DATETIME',
            ],
            'eliminado'      => [
                'type'    => 'DATETIME',
                'default' => null,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('roles');
    }

    public function down()
    {
        $this->forge->dropTable('roles', true);
    }
}