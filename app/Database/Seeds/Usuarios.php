<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use CodeIgniter\Events\Events;
use CodeIgniter\Shield\Entities\User;

class Usuarios extends Seeder
{
	public function run()
	{
		$proveedor_usuario = auth()->getProvider();

		// Usuario super admin
		$usuario = new User([
			'nombre'    => 'Rodrigo',
			'apellidos' => 'Dev',
			'email'     => 'rvazquez@tresesenta.mx',
			'password'  => 'Talia.384*',
		]);

		// Salta validaciones del modelo para utilizar las reglas anteriores
		$proveedor_usuario->skipValidation(true);
		$proveedor_usuario->save($usuario);

		if(!$proveedor_usuario->getInsertID()) {
			echo "Usuario Super Administrador NO insertado\n";
			return;
		}

		$usuario = $proveedor_usuario->findById($proveedor_usuario->getInsertID());

		$usuario->addGroup('superadmin');

		Events::trigger('register', $usuario);

		// Usuario administrativo
		$usuario = new User([
			'nombre'    => 'Hector Orlando',
			'apellidos' => 'Ruiz Lopez',
			'email'     => 'orlandoruiz1914@gmail.com',
			'password'  => 'M@ngo0312',
		]);

		// Salta validaciones del modelo para utilizar las reglas anteriores
		$proveedor_usuario->skipValidation(true);
		$proveedor_usuario->save($usuario);

		if(!$proveedor_usuario->getInsertID()) {
			echo "Usuario Administrador NO insertado\n";
			return;
		}

		$usuario = $proveedor_usuario->findById($proveedor_usuario->getInsertID());

		$usuario->addGroup('admin');

		Events::trigger('register', $usuario);

        // Usuario vendedor
        $usuario = new User([
			'nombre'    => 'Luz Elizabeth',
			'apellidos' => 'Tamez Morales',
			'email'     => 'Luz.tamez.morales06@gmail.com',
			'password'  => 'AmorSL07',
		]);

		// Salta validaciones del modelo para utilizar las reglas anteriores
		$proveedor_usuario->skipValidation(true);
		$proveedor_usuario->save($usuario);

		if(!$proveedor_usuario->getInsertID()) {
			echo "Usuario Administrador NO insertado\n";
			return;
		}

		$usuario = $proveedor_usuario->findById($proveedor_usuario->getInsertID());

		$usuario->addGroup('vendedor');

		Events::trigger('register', $usuario);

        // Usuario cliente
        $usuario = new User([
			'nombre'    => 'Daeed Jair',
			'apellidos' => 'Garcia Alvarez',
			'email'     => 'daeedgar@gmail.com',
			'password'  => 'MaleyMax',
		]);

		// Salta validaciones del modelo para utilizar las reglas anteriores
		$proveedor_usuario->skipValidation(true);
		$proveedor_usuario->save($usuario);

		if(!$proveedor_usuario->getInsertID()) {
			echo "Usuario Administrador NO insertado\n";
			return;
		}

		$usuario = $proveedor_usuario->findById($proveedor_usuario->getInsertID());

		$usuario->addGroup('cliente');

		Events::trigger('register', $usuario);
	}
}