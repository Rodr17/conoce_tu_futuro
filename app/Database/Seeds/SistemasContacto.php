<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class SistemasContacto extends Seeder
{
	public function run()
	{
		$id_sistema = model('Sistemas')->insert([
			'nombre'      => 'Datos contacto',
			'descripcion' => 'Para visualizar los datos de contacto y dirección en el sitio es necesario contar con los datos requeridos de este módulo.',
		]);

		if (!$id_sistema) {
			echo "****Módulo Datos contacto NO insertado****\n";
			return;
		}

		$configuraciones_insertadas = model('SistemasConfiguraciones')->insertBatch([
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'contacto_direccion',
				'etiqueta'   => 'Dirección',
				'tipo'       => 'input',
				'opciones'   => null,
				'valor'      => 'Calle de los Encinos 456, Colonia Valle Verde, Monterrey, Nuevo León, CP 64000',
				'orden'      => 0,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'contacto_telefono',
				'etiqueta'   => 'Teléfono',
				'tipo'       => 'input:number',
				'opciones'   => null,
				'valor'      => '8128954207',
				'orden'      => 1,
			],
			[
				'id_sistema' => $id_sistema,
				'nombre'     => 'contacto_correo',
				'etiqueta'   => 'Correo',
				'tipo'       => 'input:email',
				'opciones'   => null,
				'valor'      => 'conducetufuturo@gmail.com',
				'orden'      => 2,
			],
		]);

		if (!$configuraciones_insertadas) {
			echo "****Configuraciones Datos contacto NO insertadas****\n";
		}
	}
}