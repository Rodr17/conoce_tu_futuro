<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class SistemasConexionOpenpay extends Seeder
{
	public function run()
	{
		$id_sistema = model('Sistemas')->insert([
			'nombre'      => 'Conexión Openpay',
			'descripcion' => 'Para hacer cargos a nivel cliente es necesario contar con los datos requeridos de este módulo.',
		]);

		if (!$id_sistema) {
			echo "****Módulo Conexión Openpay NO insertado****\n";
			return;
		}

		$configuraciones_insertadas = model('SistemasConfiguraciones')->insertBatch([
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'openpay_id',
				'etiqueta'   => 'ID (Merchant ID)',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => 'm0cg7ejhvxzg5un84zsw',
				'orden'      => 0,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'openpay_llave_publica',
				'etiqueta'   => 'Llave pública (Private key)',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => 'pk_ed4e7862824e45228f93f39a477f6ab6',
				'orden'      => 1,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'openpay_llave_privada',
				'etiqueta'   => 'Llave privada (Secret Key)',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => 'sk_8544adc7767140969b19522140d80618',
				'orden'      => 2,
			],
		]);

		if (!$configuraciones_insertadas) {
			echo "****Configuraciones Conexión Openpay NO insertadas****\n";
		}
	}
}