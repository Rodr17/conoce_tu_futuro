<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class SistemasRedesSociales extends Seeder
{
	public function run()
	{
		$id_sistema = model('Sistemas')->insert([
			'nombre'      => 'Redes sociales',
			'descripcion' => 'Para visualizar los datos de contacto y dirección en el sitio es necesario contar con los datos requeridos de este módulo.',
		]);

		if (!$id_sistema) {
			echo "****Módulo Redes sociales NO insertado****\n";
			return;
		}

		$configuraciones_insertadas = model('SistemasConfiguraciones')->insertBatch([
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'rs_facebook',
				'etiqueta'   => 'Facebook',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => '',
				'orden'      => 0,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'rs_instagram',
				'etiqueta'   => 'Instagram',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => '',
				'orden'      => 1,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'rs_x',
				'etiqueta'   => 'X (Twitter)',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => '',
				'orden'      => 2,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'rs_pinterest',
				'etiqueta'   => 'Pinterest',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => '',
				'orden'      => 3,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'rs_whatsapp',
				'etiqueta'   => 'Whatsapp',
				'tipo'       => 'input:number',
				'opciones'   => null,
				'valor'      => '8181818181',
				'orden'      => 4,
			],
		]);

		if (!$configuraciones_insertadas) {
			echo "****Configuraciones Redes sociales NO insertadas****\n";
		}
	}
}