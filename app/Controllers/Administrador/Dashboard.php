<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;

class Dashboard extends BaseController
{
    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $datos['es_administrador'] = auth()->user()->inGroup('superadmin', 'admin');

        return view("Administrador/Dashboard/inicio", $datos);
    }
}