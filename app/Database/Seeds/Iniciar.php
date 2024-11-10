<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;

class Iniciar extends Seeder
{
	public function run()
	{
		$this->call(SistemasConexionOpenpay::class);
		$this->call(SistemasMontoSeparacion::class);
		$this->call(SistemasContacto::class);
		$this->call(SistemasRedesSociales::class);
		$this->call(Paises::class);
		$this->call(Estados::class);
		$this->call(Roles::class);
		$this->call(Usuarios::class);
	}
}