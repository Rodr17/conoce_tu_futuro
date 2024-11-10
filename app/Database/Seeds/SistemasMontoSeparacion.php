<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class SistemasMontoSeparacion extends Seeder
{
	public function run()
	{
		$id_sistema = model('Sistemas')->insert([
			'nombre'      => 'Monto Separación',
			'descripcion' => 'Para hacer cargos a nivel cliente es necesario contar con los datos requeridos de este módulo.',
		]);

		if (!$id_sistema) {
			echo "****Módulo Monto Separación NO insertado****\n";
			return;
		}

		$configuraciones_insertadas = model('SistemasConfiguraciones')->insertBatch([
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'monto_separacion',
				'etiqueta'   => 'Precio de separación',
				'tipo'       => 'input:number',
				'opciones'   => null,
				'valor'      => '5000',
			],
		]);

		if (!$configuraciones_insertadas) {
			echo "****Configuraciones Monto Separación NO insertadas****\n";
		}
	}
}