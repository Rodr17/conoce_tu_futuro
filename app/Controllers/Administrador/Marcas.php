<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use App\Models\Marcas as MarcasModelo;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Exceptions\PageNotFoundException;

class Marcas extends BaseController
{
    public $modelo;

    public function __construct()
    {
        $this->modelo = new MarcasModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $marcas_query = $this->modelo;

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $marcas_query->like('nombre', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $marcas_query->orderBy('id', 'DESC');

        $datos['marcas']         = $marcas_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $marcas_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Marcas/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Marcas/nuevo", $datos);
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

            return redirect()->route('agregar_marcas')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar la marca!']);

        }

        return redirect()->route('marcas')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Marca creada!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['marca'] = $this->modelo->find($id);

        if (!$datos['marca']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Marcas/editar", $datos);
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

            return redirect()->route('editar_marcas', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar la marca!']);
        }

        return redirect()->route('editar_marcas', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Marca actualizada!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Marca eliminada!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('marcas')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar la marca!';

        return redirect()->route('marcas')->with('alerta', $datos_mensaje);
    }

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch()
    {
        $marcas = $this->request->getPost('marcas');

        $datos_mensaje = [
            'tipo'    => 'alerta-denegada',
            'mensaje' => '¡No se pudo eliminar las marcas!',
        ];

        if (!$this->modelo->delete($marcas, true)) {
            return session()->setFlashdata([
                'alerta'                => $datos_mensaje,
                '_ci_validation_errors' => $this->modelo->errors()
            ]);
        }

        $datos_mensaje['tipo']    = 'alerta-satisfactoria';
        $datos_mensaje['mensaje'] = '¡Marcas eliminadas!';

        return session()->setFlashdata(['alerta' => $datos_mensaje]);
    }
}
