<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CrearSistemas extends Migration
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
			'descripcion' => [
				'type' => 'TEXT',
			],
		]);

		$this->forge->addPrimaryKey('id');
		$this->forge->createTable('sistemas');
	}

	public function down()
	{
		$this->forge->dropTable('sistemas', true);
	}
}