<?php

namespace App\Models;

use CodeIgniter\Model;

class TiposDeCombustible extends Model
{
	protected $table            = 'tipos_de_combustible';
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
			'label' => 'tipo de combustible',
			'rules' => [
				'if_exist',
				'is_not_unique[tipos_de_combustible.id]'
			]
		],
		'nombre'  => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'min_length[3]',
				'is_unique[tipos_de_combustible.nombre, id, {id}]',
			],
            'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		]
	];
}