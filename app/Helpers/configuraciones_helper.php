<?php

if (!function_exists('obtener_configuracion')) {
    /**
     * Obtiene el valor de un módulo por su identificador
     * @param string $identificador nombre del campo identificador
     * @return mixed
     */
    function obtener_configuracion($identificador)
    {
        if (empty($identificador)) return null;

        return model('SistemasConfiguraciones')
            ->select('valor')
            ->where('nombre', $identificador)
            ->first()['valor'] ?? '';
    }
}

if (!function_exists('guardar_configuracion')) {
    /**
     * Obtiene el valor de un módulo por su identificador
     * @param string $identificador nombre del campo identificador
     * @return mixed
     */
    function guardar_configuracion($identificador, $valor)
    {
        if (empty($identificador) || empty($valor)) return false;

        return model('SistemasConfiguraciones')
            ->set(['valor' => $valor])
            ->where('nombre', $identificador)
            ->update();
    }
}