<?php

namespace App\Models;

use CodeIgniter\Model;

class Marcas extends Model
{
	protected $table            = 'marcas';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = ['nombre'];

	// Fechas
	protected $useTimestamps = true;
	protected $dateFormat    = 'datetime';
	protected $createdField  = 'creado';
	protected $updatedField  = 'actualizado';
	protected $deletedField  = 'eliminado';

	// Validation
	protected $validationRules = [
        'id' => [
			'label' => 'marca',
			'rules' => [
				'if_exist',
				'is_not_unique[marcas.id]'
			]
		],
		'nombre'  => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'min_length[2]',
				'is_unique[marcas.nombre, id, {id}]',
			],
            'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		]
	];
}