<?php

namespace App\Controllers\Administrador;

use App\Controllers\BaseController;
use App\Models\Sistemas as SistemasModelo;

class Sistemas extends BaseController
{
	public $modelo,
		$generador_campos;

	public function __construct()
	{
		$this->modelo = new SistemasModelo();

		$this->generador_campos = [
			'input'    => 'input',
			'select'   => 'select',
			'radio'    => 'radio_group',
			'checkbox' => 'checkbox',
		];
	}

	private function renderizar_campos($campos)
	{
		if (!$campos) {
			return "";
		}

		$html = "";

		foreach ($campos as $campo) {
			// [0] => etiqueta html | [1] = atributo type html ó ""
			$etiqueta_html = explode(":", $campo['tipo'])[0] ?? 'input';

			$funcion = $this->generador_campos[$etiqueta_html];

			$html .= "<div>";
			$html .= $funcion($campo);
			$html .= "</div>";
		}

		return $html;
	}

	/**
	 * Muestra una vista de edición de un registro
	 *
	 * @return string
	 */
	public function edit($id = null)
	{
		$datos['modulo'] = $this->modelo->find($id);

		$configuraciones = model('SistemasConfiguraciones')
		->where('id_sistema', $id)
		->orderBy('orden')
		->find();

		$datos['campos'] = $this->renderizar_campos($configuraciones);

		return view("Administrador/Sistemas/editar", $datos);
	}

	/**
	 * Actualiza un registro
	 *
	 * @return object
	 */
	public function update($id = null)
	{
		$datos = $this->request->getPost();

		unset($datos['_method'], $datos['csrf_test_name']);

		$campos = [];

		foreach ($datos as $nombre => $campo) {
			$campos[] = [
				'id_sistema' => $id,
				'nombre'     => $nombre,
				'valor'      => $campo,
			];
		}

		$configuraciones_guardadas = model('SistemasConfiguraciones')->updateBatch($campos, 'nombre');

		// Error al actualizar en BD
		if ($configuraciones_guardadas === false) {
			session()->setFlashdata([
				'_ci_validation_errors' => model('SistemasConfiguraciones')->errors(),
			]);

			return redirect()->route('editar_sistemas', [$id])->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar!']);
		}

		// Evalua 0 => No se actualiza porque mantiene los mismos valores a guardar que en BD
		elseif (!$configuraciones_guardadas) {
			return redirect()->route('editar_sistemas', [$id])->with('alerta', ['tipo' => 'alerta-advertencia', 'mensaje' => '¡Sin cambios por actualizar!']);
		}

		return redirect()->route('editar_sistemas', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Módulo actualizado!']);
	}
}