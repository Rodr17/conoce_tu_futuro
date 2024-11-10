<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use App\Models\Colores as ColoresModelo;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Exceptions\PageNotFoundException;

class Colores extends BaseController
{
    public $modelo;

    public function __construct()
    {
        $this->modelo = new ColoresModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $colores_query = $this->modelo;

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $colores_query->like('nombre', $texto_busqueda)
            ->orLike('hexadecimal', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $colores_query->orderBy('id', 'DESC');

        $datos['colores']         = $colores_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $colores_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Colores/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Colores/nuevo", $datos);
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

            return redirect()->route('agregar_colores')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar el color!']);

        }

        return redirect()->route('colores')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Color creado!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['color'] = $this->modelo->find($id);

        if (!$datos['color']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Colores/editar", $datos);
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

            return redirect()->route('editar_colores', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar el color!']);
        }

        return redirect()->route('editar_colores', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Color actualizado!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Color eliminado!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('colores')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar el color!';

        return redirect()->route('colores')->with('alerta', $datos_mensaje);
    }

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch()
    {
        $colores = $this->request->getPost('colores');

        $datos_mensaje = [
            'tipo'    => 'alerta-denegada',
            'mensaje' => '¡No se pudo eliminar los colores!',
        ];

        if (!$this->modelo->delete($colores, true)) {
            return session()->setFlashdata([
                'alerta'                => $datos_mensaje,
                '_ci_validation_errors' => $this->modelo->errors()
            ]);
        }

        $datos_mensaje['tipo']    = 'alerta-satisfactoria';
        $datos_mensaje['mensaje'] = '¡Colores eliminados!';

        return session()->setFlashdata(['alerta' => $datos_mensaje]);
    }
}