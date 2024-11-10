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

        $imagen = model('Automovil')
            ->select('imagen')
            ->find($datos['id_automovil'] ?? null)['imagen'] ?? null;

        $id_favorito = $this->modelo->insert($datos);

        $respuesta = [
            'guardado' => (bool) $id_favorito,
            'imágen'   => $imagen
        ];

        return $this->response->setJSON($respuesta);
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
