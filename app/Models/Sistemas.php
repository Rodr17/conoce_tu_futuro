<?php

namespace App\Models;

use CodeIgniter\Model;

class Sistemas extends Model
{
	protected $table            = 'sistemas';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = false;
	protected $protectFields    = true;
	protected $allowedFields    = [
		'nombre',
		'descripcion',
	];

	// Validation
	protected $validationRules = [
		'id'          => [
			'label' => 'módulo',
			'rules' => [
				'if_exist',
				'is_not_unique[sistemas.id]',
			],
		],
		'nombre'      => [
			'label'  => 'nombre',
			'rules'  => [
				'string',
				'required',
				'min_length[3]',
				'max_length[100]',
				'is_unique[sistemas.nombre, id, {id}]',
			],
			'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		],
		'descripcion' => [
			'label' => 'descripción',
			'rules' => [
				'string',
				'min_length[3]',
				'max_length[250]',
			],
		],
	];
}