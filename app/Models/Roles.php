<?php

namespace App\Models;

use CodeIgniter\Model;

class Roles extends Model
{
	protected $table            = 'roles';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = [
		'nombre',
		'permisos',
		'title',
		'description',
		'predeterminado',
		'estatus'
	];

	// Dates
	protected $useTimestamps = true;
	protected $dateFormat    = 'datetime';
	protected $createdField  = 'creado';
	protected $updatedField  = 'actualizado';
	protected $deletedField  = 'eliminado';

	// Validation
	protected $validationRules = [
		'id'          => [
			'label' => 'rol',
			'rules' => [
				'if_exist',
				'is_not_unique[roles.id]',
			],
		],
		'nombre'      => [
			'label'  => 'nombre',
			'rules'  => [
				'string',
				'required',
				'min_length[3]',
				'max_length[25]',
				'is_unique[roles.nombre, id, {id}]',
			],
			'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		],
		'permisos'    => [
			'label' => 'permisos',
			'rules' => [
				'string',
			],
		],
		'title'       => [
			'label'  => 'nombre',
			'rules'  => [
				'string',
				'required',
				'min_length[3]',
				'max_length[25]',
				'is_unique[roles.title, id, {id}]',
			],
			'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		],
		'description' => [
			'label' => 'descripción',
			'rules' => [
				'string',
				'permit_empty',
				'min_length[3]',
				'max_length[250]',
			],
		],
	];
}