<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;
use App\Models\FavoritosAutomoviles;

class Favoritos extends BaseController
{

    public $modelo;

    public function __construct()
    {
        helper('number');
        $this->modelo = new FavoritosAutomoviles();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $datos['usuario_actual'] = auth()->user();

        $automoviles_query = $this->modelo
            ->select([
                'favoritos_automoviles.*',
                'automoviles.precio',
                'automoviles.imagen',
                'marcas.nombre AS marca',
                'modelos.nombre AS modelo',
                'CONCAT(
                    modelos.nombre, " ",
                    versiones.nombre
                ) AS nombre',
            ])
            ->join('usuarios', 'usuarios.id = favoritos_automoviles.id_usuario', 'left')
            ->join('automoviles', 'automoviles.id = favoritos_automoviles.id_automovil', 'left')
            ->join('modelos', 'modelos.id = automoviles.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->join('versiones', 'versiones.id = automoviles.id_version', 'left');

        $automoviles_query
            ->where('favoritos_automoviles.id_usuario', $datos['usuario_actual']->id)
            ->orderBy('favoritos_automoviles.id', 'DESC');

        $datos['automoviles'] = $automoviles_query->paginate(config('Pager')->perPage);
        $datos['paginacion']  = $automoviles_query->pager;

        return view("Publico/Administrador/Favoritos/inicio", $datos);
    }

    /**
     * Crea un nuevo registro
     *
     * @return ResponseInterface
     */
    public function create()
    {
        if (!auth()->loggedIn() || !auth()->user()->inGroup('cliente')) {
            return $this->response
            ->setStatusCode(401)
            ->setJSON(['url' => route_to('login')]);
        }

        $datos               = $this->request->getPost();
        $datos['id_usuario'] = auth()->user()->id;

        $imagen = model('Automoviles')
            ->select('imagen')
            ->find($datos['id_automovil'] ?? null)['imagen'] ?? null;

        $id_favorito = $this->modelo->insert($datos);

        $respuesta = [
            'guardado' => (bool) $id_favorito,
            'imagen'   => "/$imagen"
        ];

        return $this->response->setJSON($respuesta);
    }

    /**
     * Elimina un registro
     *
     * @param int $id ID del automóvil
     *
     * @return ResponseInterface
     */
    public function delete($id = null)
    {
        if (!auth()->loggedIn() || !auth()->user()->inGroup('cliente')) {
            return $this->response
            ->setStatusCode(401)
            ->setJSON(['url' => route_to('login')]);
        }

        $datos['id_usuario'] = auth()->user()->id;
        $datos['id_automovil'] = $id;

        $imagen = model('Automoviles')
            ->select('imagen')
            ->find($datos['id_automovil'] ?? null)['imagen'] ?? null;

        $favorito_eliminado = $this->modelo
        ->where($datos)
        ->delete(null, true);

        $respuesta = [
            'eliminado' => (bool) $favorito_eliminado,
            'imagen'   => "/$imagen"
        ];

        return $this->response->setJSON($respuesta);
    }
}
