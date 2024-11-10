<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class Roles extends Seeder
{
	public function run()
	{
		$roles_insertados = model('Roles')->insertBatch([
			[
				'nombre'         => 'superadmin',
				'permisos'       => 'usuarios.*, automoviles.*, marcas.*, modelos.*, versiones.*, colores.*, transmisiones.*, tipos_de_combustible.*, sistemas.*',
				'title'          => 'Super administrador',
				'description'    => 'Control completo del sitio',
				'predeterminado' => false,
			],
			[
				'nombre'         => 'admin',
				'permisos'       => 'usuarios.*, automoviles.*, marcas.*, modelos.*, versiones.*, colores.*, transmisiones.*, tipos_de_combustible.*, sistemas.*',
				'title'          => 'Administrador',
				'description'    => 'Administración de todos los accesos',
				'predeterminado' => false,
			],
			[
				'nombre'         => 'vendedor',
				'permisos'       => 'automoviles.*',
				'title'          => 'Vendedor',
				'description'    => 'Administra los automóviles y su perfil',
				'predeterminado' => true,
            ],
			[
				'nombre'         => 'cliente',
				'permisos'       => 'separaciones.*, citas.*, favoritos.*, direcciones.*, perfil.*',
				'title'          => 'Cliente',
				'description'    => 'Usuario visitante al sitio web',
				'predeterminado' => true,
			]
		]);

		if (!$roles_insertados) {
            echo "****Roles NO insertados****\n";
			return;
		}
	}
}