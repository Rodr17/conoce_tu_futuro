<?php

namespace App\Models;

use CodeIgniter\Model;

class Colores extends Model
{
	protected $table            = 'colores';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = [
        'nombre',
        'hexadecimal',
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
			'label' => 'color',
			'rules' => [
				'if_exist',
				'is_not_unique[colores.id]'
			]
		],
		'nombre'  => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'min_length[3]',
				'is_unique[colores.nombre, id, {id}]',
			],
            'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		],
		'hexadecimal'  => [
			'label' => 'nombre',
			'rules' => [
				'required',
				'max_length[7]',
			],
            'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		]
	];
}