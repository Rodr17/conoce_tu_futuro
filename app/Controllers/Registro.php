<?php

/**
 * This file is part of CodeIgniter Shield.
 *
 * (c) CodeIgniter Foundation <admin@codeigniter.com>
 *
 * For the full copyright and license information, please view
 * the LICENSE file that was distributed with this source code.
 */

namespace App\Controllers;

use CodeIgniter\Events\Events;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Shield\Authentication\Authenticators\Session;
use CodeIgniter\Shield\Entities\User;
use CodeIgniter\Shield\Exceptions\ValidationException;
use CodeIgniter\Shield\Controllers\RegisterController as ShieldRegister;

/**
 * Class RegisterController
 *
 * Handles displaying registration form,
 * and handling actual registration flow.
 */
class Registro extends ShieldRegister
{
    /**
     * Attempts to register the user.
     */
    public function registerAction(): RedirectResponse
    {
        $request = service('request');
		$datos_usuario = $request->getPost();

		$datos_usuario['status'] = !isset($datos_usuario['status']) ? 'banned' : null;

		$proveedor_usuario = auth()->getProvider();

        // Validaciones de config('Validation.registration')
        $rules = $this->getValidationRules();

        if (! $this->validateData($datos_usuario, $rules, [], config('Auth')->DBGroup)) {
            return redirect()->back()->withInput()->with('_ci_validation_errors', $this->validator->getErrors());
        }

        $usuario = new User($datos_usuario);
		
		try {
            // Salta validaciones del modelo para utilizar las reglas anteriores
            $proveedor_usuario->skipValidation(true);

			$proveedor_usuario->save($usuario);
		} catch (ValidationException $e) {
			return redirect()->back()->withInput()->with('_ci_validation_errors', $proveedor_usuario->errors());
		}

		$usuario_insertado = $proveedor_usuario->findById($proveedor_usuario->getInsertID());

		// Definición del rol
		if(!isset($datos_usuario['rol'])) {
			$proveedor_usuario->addToDefaultGroup($usuario_insertado);
		}
		else {
			$nombre = model('Roles')
            ->select('nombre')
            ->where([
                'estatus' => true,
                'nombre !=' => 'superadmin'
            ])
            ->find($datos_usuario['rol'])['nombre'] ?? '';
            
			$usuario_insertado->addGroup($nombre);
		}

		Events::trigger('register', $usuario_insertado);

		// Se activa usuario
		$usuario_insertado->activate();

        if(auth()->user()->inGroup('cliente')) {
            // Success!
            return redirect()->to(config('Auth')->registerRedirect())->with('message', lang('Auth.registerSuccess'));
        }

		return redirect()->route('usuarios')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => lang('Auth.registerSuccess')]);
    }
}
