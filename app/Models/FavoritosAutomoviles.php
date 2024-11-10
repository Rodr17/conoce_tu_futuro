<?php

namespace App\Models;

use CodeIgniter\Model;

class FavoritosAutomoviles extends Model
{
	protected $table            = 'favoritos_automoviles';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = false;
	protected $protectFields    = true;
	protected $allowedFields    = [
		'id_usuario',
		'id_automovil',
	];

	// Validation
	protected $validationRules = [
		'id'         => [
			'label' => 'favorito',
			'rules' => [
				'if_exist',
				'is_not_unique[favoritos_automoviles.id]',
			],
		],
		'id_usuario' => [
			'label' => 'usuario',
			'rules' => [
				'required',
				'is_not_unique[usuarios.id]',
			],
		],
		'id_automovil' => [
			'label' => 'automóvil',
			'rules' => [
				'required',
				'is_not_unique[automoviles.id]',
			],
		],
	];
}