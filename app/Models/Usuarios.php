<?php

declare (strict_types = 1);

namespace App\Models;

use CodeIgniter\Shield\Models\UserModel as ShieldUserModel;

class Usuarios extends ShieldUserModel
{
	protected function initialize(): void
	{
		parent::initialize();

		$this->allowedFields = [
			...$this->allowedFields,
			'nombre',
			'apellidos',
			'telefono',
		];
	}

	protected $validationRules = [
		'id' => [
			'label' => 'usuario',
			'rules' => [
				'if_exist',
				'is_not_unique[usuarios.id]'
			]
		],
		'nombre'           => [
			'label' => 'Auth.name',
			'rules' => [
				'required',
				'max_length[30]',
				'min_length[3]',
				'string',
			],
		],
		'apellidos'        => [
			'label' => 'Auth.lastName',
			'rules' => [
				'required',
				'max_length[30]',
				'min_length[3]',
				'string',
			],
		],
		'email'            => [
			'label'  => 'Auth.email',
			'rules'  => [
				'required',
				'max_length[150]',
				'valid_email',
				'is_unique[authn_identidades.secret, user_id, {id}]'
			],
			'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		],
		'password' => [
			'label' => 'Auth.password',
			'rules' => [
					'permit_empty',
					'max_byte[72]',
					'strong_password[]',
				],
			'errors' => [
				'max_byte' => 'Auth.errorPasswordTooLongBytes'
			]
		],
		'telefono'         => [
			'label' => 'Auth.phone',
			'rules' => [
				'max_length[10]',
				'min_length[10]',
				'regex_match[/\A[0-9]+\z/]',
			],
		],
		'status' => [
			'label' => 'Auth.status',
			'rules' => [
				'permit_empty',
			],
		],
	];
}