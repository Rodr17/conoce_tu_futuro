<?php

namespace App\Models;

use CodeIgniter\Model;

class AutomovilesImagenes extends Model
{
	protected $table            = 'automoviles_imagenes';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = [
        'id_automovil',
        'nombre',
    ];

	// Fechas
	protected $useTimestamps = true;
	protected $dateFormat    = 'datetime';
	protected $createdField  = 'creado';
	protected $updatedField  = 'actualizado';
	protected $deletedField  = 'eliminado';

	// Validation
	protected $validationRules = [
        'id' => [
			'label' => 'automóvil',
			'rules' => [
				'if_exist',
				'is_not_unique[automoviles_imagenes.id]'
			]
		],
        'id_automovil' => [
			'label' => 'automóvil',
			'rules' => [
				'required',
				'is_not_unique[automoviles.id]',
			],
		],
		'nombre'  => [
			'label' => 'año',
			'rules' => [
				'required',
				'string',
			],
		],
	];
}