<?php

namespace App\Models;

use CodeIgniter\Model;

class SistemasConfiguraciones extends Model
{
	protected $table            = 'sistemas_configuraciones';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = false;
	protected $protectFields    = true;
	protected $allowedFields    = [
		'id_sistema',
		'nombre',
		'etiqueta',
		'tipo',
		'opciones',
		'valor',
		'atributos',
		'orden',
	];

	// Validation
	protected $validationRules = [
		'id'         => [
			'label' => 'módulo',
			'rules' => [
				'if_exist',
				'is_not_unique[sistemas_configuraciones.id]',
			],
		],
		'id_sistema' => [
			'label' => 'módulo',
			'rules' => [
				'if_exist',
				'is_not_unique[sistemas.id]',
			],
		],
		'nombre'     => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'min_length[3]',
				'max_length[100]',
			],
		],
		'etiqueta'   => [
			'label' => 'etiqueta',
			'rules' => [
				'required',
				'string',
				'min_length[3]',
				'max_length[150]',
			],
		],
		'tipo'       => [
			'label' => 'tipo',
			'rules' => [
				'required',
				'string',
				'min_length[3]',
				'max_length[150]',
			],
		],
		'opciones'   => [
			'label' => 'opciones',
			'rules' => [
				'permit_empty',
				'min_length[3]',
			],
		],
		'valor'      => [
			'label' => 'valor',
			'rules' => [
				'permit_empty',
			],
		],
		'atributos'  => [
			'label' => 'atributos',
			'rules' => [
				'permit_empty',
				'min_length[3]',
			],
		],
		'orden'      => [
			'label' => 'orden',
			'rules' => [
				'permit_empty',
				'is_natural',
			],
		],
	];
}