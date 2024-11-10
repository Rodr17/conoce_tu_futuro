<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\RedirectResponse;
use App\Models\Versiones as VersionesModelo;
use CodeIgniter\Exceptions\PageNotFoundException;

class Versiones extends BaseController
{
    public $modelo;

    public function __construct()
    {
        $this->modelo = new VersionesModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $versiones_query = $this->modelo
            ->select([
                'versiones.*',
                'marcas.nombre AS marca',
                'modelos.nombre AS modelo'
            ])
            ->join('modelos', 'modelos.id = versiones.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left');

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $versiones_query->like('versiones.nombre', $texto_busqueda)
                ->orLike('marcas.nombre', $texto_busqueda)
                ->orLike('modelos.nombre', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $versiones_query->orderBy('id', 'DESC');

        $datos['versiones']      = $versiones_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $versiones_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Versiones/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual'] = auth()->user();
        $datos['modelos']        = model('Modelos')
            ->select([
                'modelos.id',
                'CONCAT(marcas.nombre, " - ", modelos.nombre) AS nombre',
            ])
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->find();

        return view("Administrador/Versiones/nuevo", $datos);
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

            return redirect()->route('agregar_versiones')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar la versión!']);

        }

        return redirect()->route('versiones')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Versión creada!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['version'] = $this->modelo
        ->select([
            'versiones.*',
            'marcas.nombre AS marca'
        ])
        ->join('modelos', 'modelos.id = versiones.id_modelo', 'left')
        ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
        ->find($id);

        if (!$datos['version']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual'] = auth()->user();
        $datos['modelos']        = model('Modelos')
            ->select([
                'modelos.id',
                'CONCAT(marcas.nombre, " - ", modelos.nombre) AS nombre',
            ])
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->find();

        return view("Administrador/Versiones/editar", $datos);
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

            return redirect()->route('editar_versiones', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar la versión!']);
        }

        return redirect()->route('editar_versiones', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Versión actualizada!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Versión eliminada!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('versiones')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar la versión!';

        return redirect()->route('versiones')->with('alerta', $datos_mensaje);
    }

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch()
    {
        $versiones = $this->request->getPost('versiones');

        $datos_mensaje = [
            'tipo'    => 'alerta-denegada',
            'mensaje' => '¡No se pudo eliminar las versiones!',
        ];

        if (!$this->modelo->delete($versiones, true)) {
            return session()->setFlashdata([
                'alerta'                => $datos_mensaje,
                '_ci_validation_errors' => $this->modelo->errors()
            ]);
        }

        $datos_mensaje['tipo']    = 'alerta-satisfactoria';
        $datos_mensaje['mensaje'] = '¡Versiones eliminadas!';

        return session()->setFlashdata(['alerta' => $datos_mensaje]);
    }
}