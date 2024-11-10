<?php

namespace App\Controllers\Administrador;

use App\Controllers\Registro;
use App\Controllers\BaseController;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Exceptions\PageNotFoundException;

class Usuarios extends BaseController
{
	/**
	 * Devuelve una vista de todos los registros
	 *
	 * @return string
	 */
	public function index()
	{
		$usuarios_query = auth()->getProvider()
		->join('authn_identidades', 'authn_identidades.user_id = usuarios.id', 'left')
		->join('authn_grupos_usuarios', 'authn_grupos_usuarios.user_id = usuarios.id', 'left');

		// Filtro de busqueda por texto
		$texto_busqueda = $this->request->getGet('buscar');

		if (!empty($texto_busqueda)) {
			$usuarios_query
				->like('nombre', $texto_busqueda)
				->orLike('secret', $texto_busqueda);

			$datos['texto_busqueda'] = $texto_busqueda;
		}

		// Filtro de busqueda por estatus
		$datos['estatus'] = $this->request->getGet('estatus');

		if (is_numeric($datos['estatus'])) {
			$usuarios_query->where('status', $datos['estatus'] ? null : 'banned');
		}

		// Filtro de busqueda por roles
		$datos['grupo'] = $this->request->getGet('rol');

		if (is_string($datos['grupo'])) {
			$usuarios_query->where('group', $datos['grupo']);
		}

		$usuarios_query
		->where('group !=', 'superadmin')
		->orderBy('usuarios.id', 'DESC');

		// Exportación de datos
		$exportar         = $this->request->getGet('exportar');
		$tipo_exportacion = $this->request->getGet('tipo_exportacion');

		if (is_numeric($exportar) && $exportar) {

			if ($tipo_exportacion == 'pagina') {
				return $this->exportar_csv($usuarios_query->paginate(config('Pager')->perPage));
			}

			return $this->exportar_csv($usuarios_query->findAll());
		}

		$datos['usuarios']       = $usuarios_query->paginate(config('Pager')->perPage);
		$datos['paginacion']     = $usuarios_query->pager;
		$datos['usuario_actual'] = auth()->user();
		$datos['roles']          = model('Roles')
		->select(['nombre', 'title'])
		->where([
			'estatus' => true,
			'nombre !=' => 'superadmin'
		])
		->find();

		// Selección con dropdown, clave => estatus del usuario / valor => seleccion del html en dropdown
		$datos['seleccion'] = [
			0 => 2,
			1 => 1,
		];

		return view("Administrador/Usuarios/inicio", $datos);
	}

	/**
	 * Muestra una vista de creación de un registro
	 *
	 * @return string
	 */
	public function new ()
	{
		$datos['roles'] = model('Roles')
		->select(['id', 'nombre', 'title'])
		->where([
			'estatus' => true,
			'nombre !=' => 'superadmin'
		])
		->find();
		$datos['usuario_actual'] = auth()->user();
        $datos['es_administrador'] = $datos['usuario_actual']->inGroup('superadmin', 'admin');

		return view("Administrador/Usuarios/nuevo", $datos);
	}

	/**
	 * Crea un nuevo registro
	 *
	 * @return RedirectResponse
	 */
	public function create()
	{
		$registro = new Registro();

		return $registro->registerAction();
	}

	/**
	 * Muestra una vista de edición de un registro
	 *
	 * @return string|RedirectResponse
	 */
	public function edit($id = null)
	{
		$usuario_proveedor = auth()->getProvider();

		$datos['usuario'] = $usuario_proveedor->withIdentities()->findById($id);

        if (!$datos['usuario']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['es_administrador'] = auth()->user()->inGroup('superadmin', 'admin');

		$datos['roles'] = model('Roles')
		->select(['id', 'nombre', 'title'])
		->where([
			'estatus' => true,
			'nombre !=' => 'superadmin'
		])
		->find();

		return view("Administrador/Usuarios/editar", $datos);
	}

	/**
	 * Actualiza un registro
	 *
	 * @return RedirectResponse
	 */
	public function update($id = null)
	{
		$datos = $this->request->getPost();

		// Pasar id para excepcion de regla validación ID al mismo registro a actualizar
		$datos['id'] = $id;

		$datos['status'] = !isset($datos['status']) ? 'banned' : null;

		$proveedor_usuario = auth()->getProvider();

		// Validaciones
		if (!$proveedor_usuario->validate($datos)) {
			return redirect()->back()->withInput()->with('_ci_validation_errors', $proveedor_usuario->errors());
		}

		$usuario = $proveedor_usuario->findById($id);

		// Actualización de datos
		$usuario->fill($datos);
		$proveedor_usuario->save($usuario);

		// Definición del rol
		if (!isset($datos['rol'])) {
			$proveedor_usuario->addToDefaultGroup($usuario);
		} else {
			$nombre = model('Roles')
			->select('nombre')
			->where([
				'estatus' => true,
				'nombre !=' => 'superadmin'
			])->find($datos['rol'])['nombre'] ?? '';

			$usuario->syncGroups($nombre);
		}

		return redirect()->route('editar_usuarios', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Usuario actualizado!']);

	}

	/**
	 * Elimina un registro
	 *
	 * @return RedirectResponse
	 */
	public function delete($id = null)
	{
		$usuario = auth()->getProvider();

		$usuario->delete($id, true);

		return redirect()->route('usuarios')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Usuario eliminado!']);
	}

    /**
     * Elimina un lote de registros por ID
     * 
     * @return void
     */
    public function delete_batch(){
		$usuarios = $this->request->getPost('usuarios');
		
		$datos_mensaje = [
			'tipo'    => 'alerta-satisfactoria',
			'mensaje' => '¡Usuarios eliminados!',
		];

        $usuario = auth()->getProvider();

		if(!$usuario->delete($usuarios, true)){
            return session()->setFlashdata([
				'alerta' => $datos_mensaje,
				'_ci_validation_errors' => $usuario->errors()
			]);
		}
		
		$datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar los usuarios!';
		
        return session()->setFlashdata(['alerta' => $datos_mensaje]);
	}

	/**
	 * Exportación de usuarios
	 * @param array $usuarios
	 * @return string
	 */
	public function exportar_csv($usuarios)
	{
		$nombre_archivo = "Usuarios_" . time() . ".csv";

		// Establecer las cabeceras para la descarga
		$this->response
		->setHeader('Content-Type', 'text/csv; charset=utf-8')
		->setHeader('Content-Disposition', 'attachment; filename="' . $nombre_archivo . '"')
		->setHeader('Cache-Control', 'private')
		->setHeader('Pragma', 'private')
		->setHeader('Expires', '0');

		// Abre un flujo de salida temporal para el archivo CSV
		$archivo = fopen('php://output', 'w');

		// Agrega la BOM para que se reconozca como UTF-8
		fprintf($archivo, chr(0xEF) . chr(0xBB) . chr(0xBF));

		// Escribir los encabezados
		fputcsv($archivo, ['ID', 'Nombre', 'Apellidos', 'Correo', 'Teléfono', 'Fecha nacimiento', 'Rol de acceso', 'Estatus', 'Fecha alta']);

		// Escribir los datos
		foreach ($usuarios as $usuario) {
			fputcsv($archivo, [
				$usuario->id,
				$usuario->nombre,
				$usuario->apellidos,
				$usuario->email,
				$usuario->telefono,
				$usuario->fecha_nacimiento,
				$usuario->getGroups()[0],
				$usuario->isBanned() ? 'Inactivo' : 'Activo',
				$usuario->created_at->toDateTimeString(),
			]);
		}

		// Cierra el flujo de salida
		fclose($archivo);

		// String debe ser devuelto
		return '';
	}
}