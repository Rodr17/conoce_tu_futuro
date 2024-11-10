<?php

namespace App\Models;

use CodeIgniter\Model;

class Automoviles extends Model
{
	protected $table            = 'automoviles';
	protected $primaryKey       = 'id';
	protected $useAutoIncrement = true;
	protected $returnType       = 'array';
	protected $useSoftDeletes   = true;
	protected $protectFields    = true;
	protected $allowedFields    = [
        'id_usuario',
        'id_modelo',
        'id_version',
        'id_color',
        'id_transmision',
        'id_tipo_de_combustible',
        'año',
        'numero_de_puertas',
        'motor',
        'descripcion',
        'descripcion_larga',
        'precio',
        'imagen',
        'estatus',
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
				'is_not_unique[automoviles.id]'
			]
		],
        'id_usuario' => [
			'label' => 'usuario',
			'rules' => [
				'required',
				'is_not_unique[usuarios.id]',
			],
		],
        'id_modelo' => [
			'label' => 'modelo',
			'rules' => [
				'required',
				'is_not_unique[modelos.id]',
			],
		],
        'id_version' => [
			'label' => 'versión',
			'rules' => [
				'permit_empty',
				'is_not_unique[versiones.id]',
			],
		],
        'id_color' => [
			'label' => 'color',
			'rules' => [
				'permit_empty',
				'is_not_unique[colores.id]',
			],
		],
        'id_transmision' => [
			'label' => 'transmisión',
			'rules' => [
				'required',
				'is_not_unique[transmisiones.id]',
			],
		],
        'id_tipo_de_combustible' => [
			'label' => 'tipo de combustible',
			'rules' => [
				'required',
				'is_not_unique[tipos_de_combustible.id]',
			],
		],
		'año'  => [
			'label' => 'año',
			'rules' => [
				'required',
				'numeric',
			],
		],
		'numero_de_puertas'  => [
			'label' => 'número de puertas',
			'rules' => [
				'required',
				'numeric',
			],
		],
		'motor'  => [
			'label' => 'motor',
			'rules' => [
				'required',
				'string',
			],
		],
		'descripcion'  => [
			'label' => 'descripción',
			'rules' => [
				'required',
				'string',
				'max_length[255]',
			],
		],
		'descripcion_larga'  => [
			'label' => 'descripción detallada',
			'rules' => [
				'required',
				'string',
			],
		],
		'precio'  => [
			'label' => 'precio',
			'rules' => [
				'required',
				'numeric',
			],
		],
		'imagen'  => [
			'label' => 'imágen principal',
			'rules' => [
				'required',
				'string',
			],
		],
		'estatus'  => [
			'label' => 'estatus',
			'rules' => [
				'required',
				'in_list[Disponible, Separado, Vendido]',
			],
		],
	];
}