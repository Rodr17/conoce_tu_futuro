<?php

namespace App\Models;

use CodeIgniter\Model;

class Modelos extends Model
{
	protected $table            = 'modelos';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = [
        'id_marca',
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
			'label' => 'modelo',
			'rules' => [
				'if_exist',
				'is_not_unique[modelos.id]'
			]
		],
        'id_marca' => [
			'label' => 'marca',
			'rules' => [
				'required',
				'is_not_unique[marcas.id]',
			],
		],
		'nombre'  => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'min_length[2]',
				'is_unique[modelos.nombre, id, {id}]',
			],
            'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		]
	];
}