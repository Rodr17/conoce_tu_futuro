<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use App\Models\Transmisiones as TransmisionesModelo;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Exceptions\PageNotFoundException;

class Transmisiones extends BaseController
{
    public $modelo;

    public function __construct()
    {
        $this->modelo = new TransmisionesModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $transmisiones_query = $this->modelo;

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $transmisiones_query->like('nombre', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $transmisiones_query->orderBy('id', 'DESC');

        $datos['transmisiones']         = $transmisiones_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $transmisiones_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Transmisiones/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Transmisiones/nuevo", $datos);
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

            return redirect()->route('agregar_transmisiones')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar la transmisión!']);

        }

        return redirect()->route('transmisiones')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Transmisión creada!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['transmision'] = $this->modelo->find($id);

        if (!$datos['transmision']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Transmisiones/editar", $datos);
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

            return redirect()->route('editar_transmisiones', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar la transmisión!']);
        }

        return redirect()->route('editar_transmisiones', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Transmisión actualizado!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Transmisión eliminada!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('transmisiones')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar el transmision!';

        return redirect()->route('transmisiones')->with('alerta', $datos_mensaje);
    }

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch()
    {
        $transmisiones = $this->request->getPost('transmisiones');

        $datos_mensaje = [
            'tipo'    => 'alerta-denegada',
            'mensaje' => '¡No se pudo eliminar las transmisiones!',
        ];

        if (!$this->modelo->delete($transmisiones, true)) {
            return session()->setFlashdata([
                'alerta'                => $datos_mensaje,
                '_ci_validation_errors' => $this->modelo->errors()
            ]);
        }

        $datos_mensaje['tipo']    = 'alerta-satisfactoria';
        $datos_mensaje['mensaje'] = '¡Transmisiones eliminadas!';

        return session()->setFlashdata(['alerta' => $datos_mensaje]);
    }
}