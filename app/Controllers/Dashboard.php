<?php

namespace App\Controllers;

class Dashboard extends BaseController
{
    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $datos['usuario_actual'] = auth()->user();

        return view("Publico/Administrador/Dashboard/inicio", $datos);
    }
}