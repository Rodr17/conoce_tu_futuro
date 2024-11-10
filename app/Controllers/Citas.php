<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\RESTful\ResourceController;

class Citas extends ResourceController
{
    /**
	 * Devuelve una vista de todos los registros
	 *
	 * @return string
	 */
    public function index()
    {
        return view("Publico/Administrador/Citas/inicio");
    }

    /**
	 * Muestra una vista de creación de un registro
	 *
	 * @return string
	 */
    public function new()
    {
        //
    }

    /**
	 * Crea un nuevo registro
	 *
	 * @return RedirectResponse
	 */
    public function create()
    {
        //
    }

    /**
     * Return the editable properties of a resource object.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function edit($id = null)
    {
        //
    }

    /**
     * Add or update a model resource, from "posted" properties.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function update($id = null)
    {
        //
    }

    /**
     * Delete the designated resource object from the model.
     *
     * @param int|string|null $id
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        //
    }
}
