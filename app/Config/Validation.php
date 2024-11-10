<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;
use CodeIgniter\Validation\StrictRules\CreditCardRules;
use CodeIgniter\Validation\StrictRules\FileRules;
use CodeIgniter\Validation\StrictRules\FormatRules;
use CodeIgniter\Validation\StrictRules\Rules;

class Validation extends BaseConfig
{
    // --------------------------------------------------------------------
    // Setup
    // --------------------------------------------------------------------

    /**
     * Stores the classes that contain the
     * rules that are available.
     *
     * @var list<string>
     */
    public array $ruleSets = [
        Rules::class,
        FormatRules::class,
        FileRules::class,
        CreditCardRules::class,
    ];

    /**
     * Specifies the views that are used to display the
     * errors.
     *
     * @var array<string, string>
     */
    public array $templates = [
        'list'   => 'CodeIgniter\Validation\Views\list',
        'single' => 'App\Views\Errores\Validacion\single',
    ];

    // --------------------------------------------------------------------
    // Rules
    // --------------------------------------------------------------------

    public $registration = [
		'username'         => [
			'label' => 'Auth.username',
			'rules' => [
				'permit_empty',
				'max_length[30]',
				'min_length[3]',
				'regex_match[/\A[a-zA-Z0-9\.]+\z/]',
				'is_unique[usuarios.username]',
			],
		],
		'rol'           => [
			'label' => 'rol',
			'rules' => [
				'required',
				'is_not_unique[roles.id]',
			],
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
                'is_unique[authn_identidades.secret]'
			],
			'errors' => [
				'is_unique' => 'Este {field} ya existe',
			],
		],
        'password' => [
            'label' => 'Auth.password',
            'rules' => [
                    'required',
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
