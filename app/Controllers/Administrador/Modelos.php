<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\RedirectResponse;
use App\Models\Modelos as ModelosModelo;
use CodeIgniter\Exceptions\PageNotFoundException;

class Modelos extends BaseController
{
    public $modelo;

    public function __construct()
    {
        $this->modelo = new ModelosModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $modelos_query = $this->modelo
            ->select([
                'modelos.*',
                'marcas.nombre AS marca'
            ])
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left');

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $modelos_query->like('modelos.nombre', $texto_busqueda)
            ->orLike('marcas.nombre', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $modelos_query->orderBy('id', 'DESC');

        $datos['modelos']        = $modelos_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $modelos_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Modelos/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual'] = auth()->user();
        $datos['marcas']         = model('Marcas')
            ->select(['id', 'nombre'])
            ->find();

        return view("Administrador/Modelos/nuevo", $datos);
    }

    /**
     * Crea un nuevo registro
     *
     * @return RedirectResponse
     */
    public function create()
    {
        $datos = $this->request->getPost();

        // Se validan campos antes de insertar, si hay errores se muestra a usuario
        if (!$this->modelo->insert($datos)) {
            session()->setFlashdata([
                '_ci_validation_errors' => $this->modelo->errors(),
            ]);

            return redirect()->route('agregar_modelos')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar el modelo!']);

        }

        return redirect()->route('modelos')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Modelo creado!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['modelo'] = $this->modelo->find($id);

        if (!$datos['modelo']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual'] = auth()->user();
        $datos['marcas']         = model('Marcas')
            ->select(['id', 'nombre'])
            ->find();

        return view("Administrador/Modelos/editar", $datos);
    }

    /**
     * Actualiza un registro
     *
     * @return RedirectResponse
     */
    public function update($id = null)
    {
        $datos       = $this->request->getPost();
        $datos['id'] = $id;

        // Se validan campos antes de insertar, si hay errores se muestra a usuario
        if (!$this->modelo->save($datos)) {
            session()->setFlashdata([
                '_ci_validation_errors' => $this->modelo->errors(),
            ]);

            return redirect()->route('editar_modelos', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar el modelo!']);
        }

        return redirect()->route('editar_modelos', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Modelo actualizado!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Modelo eliminado!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('modelos')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar el modelo!';

        return redirect()->route('modelos')->with('alerta', $datos_mensaje);
    }

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch()
    {
        $modelos = $this->request->getPost('modelos');

        $datos_mensaje = [
            'tipo'    => 'alerta-denegada',
            'mensaje' => '¡No se pudo eliminar los modelos!',
        ];

        if (!$this->modelo->delete($modelos, true)) {
            return session()->setFlashdata([
                'alerta'                => $datos_mensaje,
                '_ci_validation_errors' => $this->modelo->errors()
            ]);
        }

        $datos_mensaje['tipo']    = 'alerta-satisfactoria';
        $datos_mensaje['mensaje'] = '¡Modelos eliminadas!';

        return session()->setFlashdata(['alerta' => $datos_mensaje]);
    }
}