<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use App\Models\TiposDeCombustible as TiposDeCombustibleModelo;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Exceptions\PageNotFoundException;

class TiposDeCombustible extends BaseController
{
    public $modelo;

    public function __construct()
    {
        $this->modelo = new TiposDeCombustibleModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $combustibles_query = $this->modelo;

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $combustibles_query->like('nombre', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $combustibles_query->orderBy('id', 'DESC');

        $datos['combustibles']         = $combustibles_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $combustibles_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/TiposDeCombustible/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/TiposDeCombustible/nuevo", $datos);
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

            return redirect()->route('agregar_tipos_de_combustible')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar el tipo de combustible!']);

        }

        return redirect()->route('tipos_de_combustible')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Tipo de combustible creado!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['combustible'] = $this->modelo->find($id);

        if (!$datos['combustible']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/TiposDeCombustible/editar", $datos);
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

            return redirect()->route('editar_tipos_de_combustible', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar el tipo de combustible!']);
        }

        return redirect()->route('editar_tipos_de_combustible', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Tipo de combustible actualizado!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Tipo de combustible eliminado!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('tipos_de_combustible')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar el tipo de combustible!';

        return redirect()->route('tipos_de_combustible')->with('alerta', $datos_mensaje);
    }

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch()
    {
        $tipos_de_combustible = $this->request->getPost('tipos_de_combustible');

        $datos_mensaje = [
            'tipo'    => 'alerta-denegada',
            'mensaje' => '¡No se pudo eliminar los tipos de combustible!',
        ];

        if (!$this->modelo->delete($tipos_de_combustible, true)) {
            return session()->setFlashdata([
                'alerta'                => $datos_mensaje,
                '_ci_validation_errors' => $this->modelo->errors()
            ]);
        }

        $datos_mensaje['tipo']    = 'alerta-satisfactoria';
        $datos_mensaje['mensaje'] = '¡Tipos de combustible eliminados!';

        return session()->setFlashdata(['alerta' => $datos_mensaje]);
    }
}