<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearAutomoviles extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'                     => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true,
            ],
            'id_usuario'              => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'id_modelo'              => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'id_version'             => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
                'null'       => true,
            ],
            'id_color'               => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
                'null'       => true,
            ],
            'id_transmision'         => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'id_tipo_de_combustible' => [
                'type'       => 'INT',
                'constraint' => 11,
                'unsigned'   => true,
            ],
            'año'                    => [
                'type'       => 'VARCHAR',
                'constraint' => 5,
            ],
            'numero_de_puertas'      => [
                'type'       => 'INT',
                'constraint' => 5,
            ],
            'motor'                  => [
                'type'       => 'VARCHAR',
                'constraint' => 150,
            ],
            'descripcion'            => [
                'type'       => 'VARCHAR',
                'constraint' => 255,
            ],
            'descripcion_larga'      => [
                'type' => 'TEXT',
            ],
            'precio'                 => [
                'type'       => 'DECIMAL',
                'constraint' => '10,2',
            ],
            'imagen'                 => [
                'type' => 'TEXT',
            ],
            'estatus'                 => [
                'type' => 'ENUM',
                'constraint' => [
                    'Disponible',
                    'Separado',
                    'Vendido'
                ],
            ],
            'creado'                 => [
                'type' => 'DATETIME',
            ],
            'actualizado'            => [
                'type' => 'DATETIME',
            ],
            'eliminado'              => [
                'type'    => 'DATETIME',
                'default' => null,
            ],
        ]);

        $this->forge->addPrimaryKey('id');
        $this->forge->addForeignKey('id_usuario', 'usuarios', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('id_modelo', 'modelos', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('id_version', 'versiones', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('id_color', 'colores', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('id_transmision', 'transmisiones', 'id', 'CASCADE', 'CASCADE');
        $this->forge->addForeignKey('id_tipo_de_combustible', 'tipos_de_combustible', 'id', 'CASCADE', 'CASCADE');
        $this->forge->createTable('automoviles');
    }

    public function down()
    {
        $this->db->disableForeignKeyChecks();

        $this->forge->dropTable('automoviles', true);
    }
}
