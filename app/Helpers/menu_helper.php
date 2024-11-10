<?php

if (!function_exists('en_submenu')) {
	/**
	 * Se valida si está en una seccion específica actual del menú
	 * @param string $nombre_ruta
	 * @return bool
	 */
	function en_submenu($nombre_ruta)
	{
		if(!$nombre_ruta) return false;

		return route_to($nombre_ruta) == "/" . uri_string();
	}
}