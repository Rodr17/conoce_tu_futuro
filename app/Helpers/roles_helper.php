<?php

if (!function_exists('filtrar_rol_titulo')) {
	/**
	 * Obtiene Nombre (title) del rol por slug (nombre)
	 * @param array $roles
	 * @param mixed $nombre_grupo
	 * @return string
	 */
	function filtrar_rol_titulo($roles, $nombre_grupo)
	{
		$result = array_filter($roles, function ($arreglo) use ($nombre_grupo) {
			return $arreglo['nombre'] === $nombre_grupo;
		});

		if (!empty($result)) {
			return reset($result)['title'];
		}

		// Retornar algo por defecto si no se encuentra el nombre
		return "Sin rol para '$nombre_grupo'";
	}
}

if (!function_exists('checkboxes_modulo')) {
	/**
	 * Evalua si tiene acceso al contexto permitido
	 * @param string $modulo
	 * @param array $acciones
	 * @param array $permisos
	 * @return string
	 */
	function checkboxes_modulo($modulo, $acciones, $permisos = [])
	{
		$todos_accesos = in_array("$modulo.*", $permisos);
		$html          = "
            <div x-data=\"contenedor_checks('$modulo')\">
                <h2 class=\"text-lg text-slate-600 font-bold mb-3 mt-6\">" . ucfirst(str_replace("-", " ", $modulo)) . "</h2>";

		$html .= "<div class=\"flex flex-wrap items-center -m-3\">";

		// Check todos
		$html .= "
            <div class=\"m-3\">
                <label class=\"flex items-center cursor-pointer\">
                    <input id=\"parent-checkbox-$modulo\" type=\"checkbox\" class=\"form-checkbox\" name=\"permisos[$modulo][]\" value=\"*\" " . ($todos_accesos ? 'checked' : '') . " @click=\"toggleAll\">
                    <span class=\"text-sm ml-2 italic\">Todos</span>
                </label>
            </div>";

		// Permisos
		foreach ($acciones as $accion) {
			$checked = $todos_accesos || in_array("$modulo.$accion", $permisos) ? 'checked' : '';
			$html .= "
                <div class=\"m-3\">
                    <label class=\"flex items-center cursor-pointer\">
                        <input class=\"checkbox-select-$modulo form-checkbox\" type=\"checkbox\" name=\"permisos[$modulo][]\" value=\"$accion\" $checked @click=\"uncheckParent\">
                        <span class=\"text-sm ml-2\">" . ucfirst($accion) . "</span>
                    </label>
                </div>";
		}

		$html .= "
            </div>
        </div>";

		return $html;
	}
}