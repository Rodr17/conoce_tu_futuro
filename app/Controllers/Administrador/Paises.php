<?php

namespace App\Controllers\Administrador;

use App\Models\Estados;
use App\Controllers\BaseController;
use App\Models\Paises as PaisesModelo;
use CodeIgniter\HTTP\ResponseInterface;

class Paises extends BaseController
{
	public $modelo;

	public function __construct()
	{
		$this->modelo         = new PaisesModelo();
		$this->modelo_estados = new Estados();
	}

	/**
	 * Obtiene los estados del país (por ID del país)
	 *
	 * @return ResponseInterface
	 */
	public function estados($id_pais)
	{
		$estados = model('Estados')
		->select(['id', 'nombre'])
		->where('id_pais', $id_pais)
		->orderBy('nombre')
		->find();

		return $this->response->setJSON($estados ?? []);
	}
}