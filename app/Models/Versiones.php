<?php

namespace App\Models;

use CodeIgniter\Model;

class Versiones extends Model
{
	protected $table            = 'versiones';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = [
        'id_modelo',
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
			'label' => 'versión',
			'rules' => [
				'if_exist',
				'is_not_unique[versiones.id]'
			]
		],
        'id_modelo' => [
			'label' => 'modelo',
			'rules' => [
				'required',
				'is_not_unique[modelos.id]',
			],
		],
		'nombre'  => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'min_length[3]',
				'is_unique[versiones.nombre, id, {id}]',
			],
            'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		]
	];
}