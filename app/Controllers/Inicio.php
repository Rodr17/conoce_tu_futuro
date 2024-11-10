<?php

namespace App\Controllers;

use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\Exceptions\PageNotFoundException;

class Inicio extends BaseController
{
    /**
     * Muestra una vista
     *
     * @return string
     */
    public function index()
    {
        return view('Publico/inicio');
    }

    /**
     * Muestra una vista
     *
     * @return string
     */
    public function acerca_de_nosotros()
    {
        return view('Publico/acerca-de-nosotros');
    }

    /**
     * Muestra una vista
     *
     * @return string
     */
    public function terminos_y_condiciones()
    {
        return view('Publico/terminos-y-condiciones');
    }

    /**
     * Muestra una vista
     *
     * @return string
     */
    public function aviso_de_privacidad()
    {
        return view('Publico/aviso-de-privacidad');
    }

    /**
     * Muestra una vista
     *
     * @return string
     */
    public function contactanos()
    {
        $datos['direccion'] = obtener_configuracion('contacto_direccion');
        $datos['telefono']  = obtener_configuracion('contacto_telefono');
        $datos['correo']    = obtener_configuracion('contacto_correo');

        return view('Publico/contactanos', $datos);
    }

    public function automoviles()
    {
        $automoviles_query = model('Automoviles')
            ->select([
                'automoviles.id',
                'automoviles.año',
                'automoviles.precio',
                'automoviles.imagen',
                'automoviles.estatus',
                'marcas.nombre AS marca',
                'CONCAT(
                    modelos.nombre, " ",
                    versiones.nombre, " ", 
                    automoviles.año 
                ) AS nombre',
                'automoviles.descripcion',
                'colores.nombre AS color_nombre',
                'colores.hexadecimal AS color_hexadecimal',
            ])
            ->join('modelos', 'modelos.id = automoviles.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->join('versiones', 'versiones.id = automoviles.id_version', 'left')
            ->join('colores', 'colores.id = automoviles.id_color', 'left')
            ->join('transmisiones', 'transmisiones.id = automoviles.id_transmision', 'left')
            ->join('tipos_de_combustible', 'tipos_de_combustible.id = automoviles.id_tipo_de_combustible', 'left');

        // Filtro de busqueda por texto
        $datos['texto_busqueda'] = '';

        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $automoviles_query->like('modelos.nombre', $texto_busqueda)
                ->orLike('marcas.nombre', $texto_busqueda)
                ->orLike('año', $texto_busqueda)
                ->orLike('precio', $texto_busqueda)
                ->orLike('motor', $texto_busqueda)
                ->orLike('descripcion', $texto_busqueda)
                ->orLike('descripcion_larga', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        // Filtro precio mínimo
        $precio = $this->request->getGet('precio_minimo');
        if (!empty($precio)) {
            $automoviles_query->where('precio >=', $precio);

            $datos['precio_minimo'] = $precio;
        }

        // Filtro precio máximo
        $precio = $this->request->getGet('precio_maximo');
        if (!empty($precio)) {
            $automoviles_query->where('precio <=', $precio);

            $datos['precio_maximo'] = $precio;
        }

        // Filtro color
        $datos['parametros_colores'] = [];

        $colores = $this->request->getGet('colores');
        if (!empty($colores)) {
            $automoviles_query->whereIn('colores.hexadecimal', $colores);

            $datos['parametros_colores'] = $colores;
        }

        // Filtro marca
        $datos['parametros_marcas'] = [];

        $marcas = $this->request->getGet('marcas');
        if (!empty($marcas)) {
            $automoviles_query->whereIn('marcas.nombre', $marcas);

            $datos['parametros_marcas'] = $marcas;
        }

        // Filtro transmisión
        $datos['parametros_transmisiones'] = [];

        $transmisiones = $this->request->getGet('transmisiones');
        if (!empty($transmisiones)) {
            $automoviles_query->whereIn('transmisiones.nombre', $transmisiones);

            $datos['parametros_transmisiones'] = $transmisiones;
        }

        // Filtro transmisión
        $datos['parametros_tipos_de_combustible'] = [];

        $tipos_de_combustible = $this->request->getGet('tipos_de_combustible');
        if (!empty($tipos_de_combustible)) {
            $automoviles_query->whereIn('tipos_de_combustible.nombre', $tipos_de_combustible);

            $datos['parametros_tipos_de_combustible'] = $tipos_de_combustible;
        }

        $automoviles_query->orderBy('id', 'DESC');

        $datos['automoviles'] = $automoviles_query->paginate(config('Pager')->perPage);
        $datos['paginacion']  = $automoviles_query->pager;

        $datos['request'] = service('request');

        $datos['precio_min'] = model('Automoviles')
            ->selectMin('precio')
            ->first()['precio'] ?? 0;

        $datos['precio_max'] = model('Automoviles')
            ->selectMax('precio')
            ->first()['precio'] ?? 0;

        $datos['colores'] = model('Colores')
            ->select([
                'id',
                'nombre',
                'hexadecimal',
            ])
            ->find();

        $datos['marcas'] = model('Marcas')
            ->select([
                'id',
                'nombre',
            ])
            ->find();

        $datos['transmisiones'] = model('Transmisiones')
            ->select([
                'id',
                'nombre',
            ])
            ->find();

        $datos['tipos_de_combustible'] = model('TiposDeCombustible')
            ->select([
                'id',
                'nombre',
            ])
            ->find();

        return view('Publico/automoviles', $datos);
    }

    /**
     * Muestra una vista
     *
     * @return string
     */
    public function automovil($id = null)
    {
        $datos['automovil'] = model('Automoviles')
            ->select([
                'automoviles.*',
                'marcas.nombre AS marca',
                'modelos.nombre AS modelo',
                'CONCAT(
                    modelos.nombre, " ",
                    versiones.nombre
                ) AS nombre',
                'versiones.nombre AS version',
                'colores.nombre AS color_nombre',
                'colores.hexadecimal AS color_hexadecimal',
                'transmisiones.nombre AS transmision',
                'tipos_de_combustible.nombre AS tipo_de_combustible',
            ])
            ->join('modelos', 'modelos.id = automoviles.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->join('versiones', 'versiones.id = automoviles.id_version', 'left')
            ->join('colores', 'colores.id = automoviles.id_color', 'left')
            ->join('transmisiones', 'transmisiones.id = automoviles.id_transmision', 'left')
            ->join('tipos_de_combustible', 'tipos_de_combustible.id = automoviles.id_tipo_de_combustible', 'left')
            ->find($id);

        if (!$datos['automovil']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['imagenes'] = model('AutomovilesImagenes')
            ->select('nombre')
            ->where('id_automovil', $id)
            ->find();

        return view('Publico/automovil', $datos);
    }

    /**
     * Muestra una vista
     *
     * @return string
     */
    public function me_interesa($id = null)
    {
        $datos['automovil'] = model('Automoviles')
            ->select([
                'automoviles.*',
                'marcas.nombre AS marca',
                'CONCAT(
                    modelos.nombre, " ",
                    versiones.nombre
                ) AS nombre',
                'colores.nombre AS color_nombre',
                'colores.hexadecimal AS color_hexadecimal',
            ])
            ->join('modelos', 'modelos.id = automoviles.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->join('versiones', 'versiones.id = automoviles.id_version', 'left')
            ->join('colores', 'colores.id = automoviles.id_color', 'left')
            ->first();

        if (!$datos['automovil']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['imagenes'] = model('AutomovilesImagenes')
            ->select('nombre')
            ->where('id_automovil', $id)
            ->find();

        return view('Publico/me-interesa', $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['modulos']        = config('AuthGroups')->modules_actions;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Inicio/nuevo", $datos);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string
     */
    public function edit($id = null)
    {
        $datos = [];
        return view("Administrador/Inicio/editar", $datos);
    }
}
