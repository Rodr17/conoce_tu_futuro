<?php

declare(strict_types=1);

/**
 * This file is part of CodeIgniter Shield.
 *
 * (c) CodeIgniter Foundation <admin@codeigniter.com>
 *
 * For the full copyright and license information, please view
 * the LICENSE file that was distributed with this source code.
 */

namespace Config;

use CodeIgniter\Shield\Config\AuthGroups as ShieldAuthGroups;

class AuthGroups extends ShieldAuthGroups
{
    /**
     * --------------------------------------------------------------------
     * Default Group
     * --------------------------------------------------------------------
     * The group that a newly registered user is added to.
     */
    public string $defaultGroup;

    /**
     * --------------------------------------------------------------------
     * Groups
     * --------------------------------------------------------------------
     * An associative array of the available groups in the system, where the keys
     * are the group names and the values are arrays of the group info.
     *
     * Whatever value you assign as the key will be used to refer to the group
     * when using functions such as:
     *      $user->addGroup('superadmin');
     *
     * @var array<string, array<string, string>>
     *
     * @see https://codeigniter4.github.io/shield/quick_start_guide/using_authorization/#change-available-groups for more info
     */
    public array $groups;

    /**
     * --------------------------------------------------------------------
     * Permissions
     * --------------------------------------------------------------------
     * The available permissions in the system.
     *
     * If a permission is not listed here it cannot be used.
     */
    public array $permissions= [
		'usuarios'     => [
			'ver',
			'crear',
			'editar',
			'eliminar',
		],
		'sistemas'     => [
			'ver',
			'crear',
			'editar',
			'eliminar',
		],
	];

    /**
     * --------------------------------------------------------------------
     * Permissions Matrix
     * --------------------------------------------------------------------
     * Maps permissions to groups.
     *
     * This defines group-level permissions.
     */
    public array $matrix;

	public function __construct()
	{
		$configuraciones = $this->obtener_configuracion_roles();

		$this->groups       = $configuraciones['roles_filtrados'];
		$this->matrix       = $configuraciones['mapeo_permisos'];
		$this->defaultGroup = $configuraciones['rol_predeterminado'];
	}

	/**
	 * Obtiene los grupos para ser utilizado en Shield Codeigniter
	 * @return array
	 */
	protected function obtener_configuracion_roles()
	{
		$roles                                 = model("Roles")->select(['nombre', 'permisos', 'title', 'description', 'predeterminado'])->find();
		$configuraciones['roles_filtrados']    = [];
		$configuraciones['mapeo_permisos']     = [];
		$configuraciones['rol_predeterminado'] = '';

		foreach ($roles as $rol) {
			$configuraciones['roles_filtrados'][$rol['nombre']] = ['title' => $rol['title'], 'description' => $rol['title']];
			$configuraciones['mapeo_permisos'][$rol['nombre']]  = explode(", ", $rol['permisos'] ?? '');

			if ($rol['predeterminado']) {
				$configuraciones['rol_predeterminado'] = $rol['nombre'];
			}

		}

		return $configuraciones;
	}
}
