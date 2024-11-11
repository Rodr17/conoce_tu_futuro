<?php

namespace App\Controllers\Administrador;

use CodeIgniter\Files\File;
use App\Controllers\BaseController;
use CodeIgniter\HTTP\RedirectResponse;
use CodeIgniter\HTTP\ResponseInterface;
use App\Models\Automoviles as AutomovilesModelo;
use CodeIgniter\Exceptions\PageNotFoundException;

class Automoviles extends BaseController
{
    public $modelo;

    public function __construct()
    {
        helper('number');
        $this->modelo = new AutomovilesModelo();
    }

    /**
     * Devuelve una vista de todos los registros
     *
     * @return string
     */
    public function index()
    {
        $automoviles_query = $this->modelo
            ->select([
                'automoviles.id',
                'automoviles.año',
                'automoviles.precio',
                'automoviles.imagen',
                'automoviles.estatus',
                'automoviles.creado',
                'marcas.nombre AS marca',
                'modelos.nombre AS modelo',
                'colores.nombre AS color_nombre',
                'colores.hexadecimal AS color_hexadecimal',
            ])
            ->join('modelos', 'modelos.id = automoviles.id_modelo', 'left')
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->join('colores', 'colores.id = automoviles.id_color', 'left');

        // Filtro de busqueda por texto
        $texto_busqueda = $this->request->getGet('buscar');
        if (!empty($texto_busqueda)) {
            $automoviles_query->like('modelos.nombre', $texto_busqueda)
                ->orLike('marcas.nombre', $texto_busqueda)
                ->orLike('año', $texto_busqueda)
                ->orLike('precio', $texto_busqueda)
                ->orLike('estatus', $texto_busqueda);

            $datos['texto_busqueda'] = $texto_busqueda;
        }

        $automoviles_query->orderBy('id', 'DESC');

        $datos['automoviles']    = $automoviles_query->paginate(config('Pager')->perPage);
        $datos['paginacion']     = $automoviles_query->pager;
        $datos['usuario_actual'] = auth()->user();

        return view("Administrador/Automoviles/inicio", $datos);
    }

    /**
     * Muestra una vista de creación de un registro
     *
     * @return string
     */
    public function new()
    {
        $datos['usuario_actual']   = auth()->user();
        $datos['es_administrador'] = $datos['usuario_actual']->inGroup('superadmin', 'admin');

        $datos['vendedores'] = auth()->getProvider()
            ->join('authn_identidades', 'authn_identidades.user_id = usuarios.id')
            ->join('authn_grupos_usuarios', 'authn_grupos_usuarios.user_id = usuarios.id', 'left')
            ->where('group', 'vendedor')
            ->orderBy('usuarios.nombre')
            ->find();

        $datos['modelos'] = model('Modelos')
            ->select([
                'modelos.id',
                'CONCAT(marcas.nombre, " - ", modelos.nombre) AS nombre',
            ])
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->find();

        $id_modelo = old('id_modelo');

        if ($id_modelo) {
            $datos['versiones'] = model('Versiones')
                ->select([
                    'id',
                    'nombre',
                ])
                ->where('id_modelo', $id_modelo)
                ->orderBy('nombre')
                ->find();
        }

        $datos['colores'] = model('Colores')
            ->select([
                'id',
                'nombre',
                'hexadecimal',
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

        $datos['estatus'] = [
            'Disponible',
            'Separado',
            'Vendido',
        ];

        // Listado años
        $datos['año_maximo'] = date('Y') + 1;
        $rango_años          = 60;
        $datos['año_minimo'] = $datos['año_maximo'] - $rango_años;

        return view("Administrador/Automoviles/nuevo", $datos);
    }

    /**
     * Crea un nuevo registro
     *
     * @return RedirectResponse
     */
    public function create()
    {
        $datos            = $this->request->getPost();
        $archivos         = $this->request->getFiles();
        $es_administrador = auth()->user()->inGroup('superadmin', 'admin');

        $datos['id_version'] = $datos['id_version'] ?: null;
        $datos['id_color']   = $datos['id_color'] ?: null;

        // Asignacion de asesor automático
        if (!$es_administrador) {
            $datos['id_usuario'] = auth()->user()->id;
        }

        // Almacenar imágen principal 
        if ($archivos['imagen']->isValid()) {
            $datos['imagen'] = $this->store_file($archivos['imagen']);
        }

        // Almacenar imágenes secundarias
        foreach ($archivos['imagenes'] as $imagen) {
            if (!$imagen->getSize()) continue;

            if ($imagen->isValid()) {
                $imagenes[] = $this->store_file($imagen);
            }
        }

        // Se validan campos antes de insertar, si hay errores se muestra a usuario
        $id_automovil = $this->modelo->insert($datos);
        if (!$id_automovil) {
            session()->setFlashdata([
                '_ci_validation_errors' => $this->modelo->errors(),
            ]);

            // Eliminar todas las imágenes por validación de datos
            if ($archivos['imagen']->isValid()) $this->delete_file($this->directorio_archivos . $datos['imagen']);

            if (isset($imagenes)) {
                foreach ($imagenes as $imagen) {
                    $this->delete_file("{$this->directorio_archivos}$imagen");
                }
            }

            return redirect()->route('agregar_automoviles')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo agregar el automóvil!']);
        }

        // Al menos una imágen secundaria subida
        if (isset($imagenes) && $imagenes) {
            // Preparación de datos a BD
            $imagenes = array_map(function ($archivo) use ($id_automovil) {
                return [
                    'id_automovil' => $id_automovil,
                    'nombre'       => $archivo
                ];
            }, $imagenes);

            // Guardar en BD
            if (!model('AutomovilesImagenes')->insertBatch($imagenes)) {
                session()->setFlashdata([
                    '_ci_validation_errors' => model('AutomovilesImagenes')->errors(),
                ]);

                // Eliminar todas las imágenes por validación de datos
                if ($archivos['imagen']->isValid()) $this->delete_file($this->directorio_archivos . $datos['imagen']);

                foreach ($imagenes as $imagen) {
                    $this->delete_file($this->directorio_archivos . $imagen['nombre']);
                }

                $this->modelo->delete($id_automovil, true);

                return redirect()->route('agregar_automoviles')->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo guardar las imágenes!']);
            }
        }

        return redirect()->route('automoviles_admin')->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Automóvil creado!']);
    }

    /**
     * Muestra una vista de edición de un registro
     *
     * @return string|RedirectResponse
     */
    public function edit($id = null)
    {
        $datos['automovil'] = $this->modelo->find($id);

        if (!$datos['automovil']) {
            throw PageNotFoundException::forPageNotFound();
        }

        $datos['usuario_actual']   = auth()->user();
        $datos['es_administrador'] = $datos['usuario_actual']->inGroup('superadmin', 'admin');

        $datos['imagenes'] = model('AutomovilesImagenes')
            ->select([
                'id',
                'nombre'
            ])
            ->where('id_automovil', $id)
            ->find();

        $datos['vendedores'] = auth()->getProvider()
            ->join('authn_identidades', 'authn_identidades.user_id = usuarios.id')
            ->join('authn_grupos_usuarios', 'authn_grupos_usuarios.user_id = usuarios.id', 'left')
            ->where('group', 'vendedor')
            ->orderBy('usuarios.nombre')
            ->find();

        $datos['modelos'] = model('Modelos')
            ->select([
                'modelos.id',
                'CONCAT(marcas.nombre, " - ", modelos.nombre) AS nombre',
            ])
            ->join('marcas', 'marcas.id = modelos.id_marca', 'left')
            ->find();

        $id_modelo = old('id_modelo', $datos['automovil']['id_modelo']);

        if ($id_modelo) {
            $datos['versiones'] = model('Versiones')
                ->select([
                    'id',
                    'nombre',
                ])
                ->where('id_modelo', $id_modelo)
                ->orderBy('nombre')
                ->find();
        }

        $datos['colores'] = model('Colores')
            ->select([
                'id',
                'nombre',
                'hexadecimal',
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

        $datos['estatus'] = [
            'Disponible',
            'Separado',
            'Vendido',
        ];

        // Listado años
        $datos['año_maximo'] = date('Y') + 1;
        $rango_años          = 60;
        $datos['año_minimo'] = $datos['año_maximo'] - $rango_años;

        return view("Administrador/Automoviles/editar", $datos);
    }

    /**
     * Actualiza un registro
     *
     * @return RedirectResponse
     */
    public function update($id = null)
    {
        $datos            = $this->request->getPost();
        $archivos         = $this->request->getFiles();
        $es_administrador = auth()->user()->inGroup('superadmin', 'admin');

        $datos['id']         = $id;
        $datos['id_version'] = $datos['id_version'] ?: null;
        $datos['id_color']   = $datos['id_color'] ?: null;

        $imagenes_anteriores = model('AutomovilesImagenes')
            ->select(['id', 'nombre'])
            ->where('id_automovil', $id)
            ->find();

        if ($imagenes_anteriores) {
            $ids_imagenes_anteriores = array_column($imagenes_anteriores, 'id');
        }

        // Asignacion de asesor automático
        if (!$es_administrador) {
            $datos['id_usuario'] = auth()->user()->id;
        }

        // Almacenar imágen principal 
        if ($archivos['imagen']->isValid()) {
            $datos['imagen'] = $this->store_file($archivos['imagen']);
        } else {
            // Usar la existente (sobreescribe)
            $datos['imagen'] = $this->request->getPost('imagen_actual');
        }

        // Almacenar imágenes secundarias
        foreach ($archivos['imagenes'] as $imagen) {
            if (!$imagen->getSize()) continue;

            if ($imagen->isValid()) {
                $imagenes[] = $this->store_file($imagen);
            }
        }

        // Se validan campos antes de insertar, si hay errores se muestra a usuario
        $id_automovil = $this->modelo->save($datos);
        if (!$id_automovil) {
            session()->setFlashdata([
                '_ci_validation_errors' => $this->modelo->errors(),
            ]);

            // Eliminar todas las imágenes por validación de datos
            if ($archivos['imagen']->isValid()) $this->delete_file($this->directorio_archivos . $datos['imagen']);

            if (isset($imagenes)) {
                foreach ($imagenes as $imagen) {
                    $this->delete_file("{$this->directorio_archivos}$imagen");
                }
            }

            return redirect()->route('editar_automoviles', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudo actualizar el automóvil!']);
        }

        // Al menos una imágen secundaria subida
        if (isset($imagenes) && $imagenes) {
            // Preparación de datos a BD
            $imagenes = array_map(function ($archivo) use ($id_automovil) {
                return [
                    'id_automovil' => $id_automovil,
                    'nombre'       => $archivo
                ];
            }, $imagenes);

            // Guardar en BD
            if (!model('AutomovilesImagenes')->insertBatch($imagenes)) {
                session()->setFlashdata([
                    '_ci_validation_errors' => model('AutomovilesImagenes')->errors(),
                ]);

                // Eliminar todas las imágenes por validación de datos
                if ($archivos['imagen']->isValid()) $this->delete_file($this->directorio_archivos . $datos['imagen']);

                foreach ($imagenes as $imagen) {
                    $this->delete_file($this->directorio_archivos . $imagen['nombre']);
                }

                return redirect()->route('editar_automoviles', [$id])->withInput()->with('alerta', ['tipo' => 'alerta-denegada', 'mensaje' => '¡No se pudieron actualizar las imágenes!']);
            }

            // Eliminar imagenes anteriores del directorio y BD
            if ($imagenes_anteriores) {
                foreach ($imagenes_anteriores as $imagen) {
                    $this->delete_file($this->directorio_archivos . $imagen['nombre']);
                }

                model('AutomovilesImagenes')->where('id_automovil', $id)->delete($ids_imagenes_anteriores);
            }
        }


        return redirect()->route('editar_automoviles', [$id])->with('alerta', ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Automóvil actualizado!']);
    }

    /**
     * Elimina un registro
     *
     * @return RedirectResponse
     */
    public function delete($id = null)
    {
        $datos_mensaje = ['tipo' => 'alerta-satisfactoria', 'mensaje' => '¡Automóvil eliminado!'];

        if ($this->modelo->delete($id, true)) {
            return redirect()->route('automoviles_admin')->with('alerta', $datos_mensaje);
        }

        $datos_mensaje['tipo']    = 'alerta-denegada';
        $datos_mensaje['mensaje'] = '¡No se pudo eliminar el automóvil!';

        return redirect()->route('automoviles_admin')->with('alerta', $datos_mensaje);
    }

    /**
     * Obtiene las versiones del modelo
     *
     * @param int $id ID del modelo del automóvil
     *
     * @return ResponseInterface
     */
    public function version($id = null)
    {
        $versiones = model('Versiones')
            ->select(['id', 'nombre'])
            ->where('id_modelo', $id)
            ->orderBy('nombre')
            ->find();

        return $this->response->setJSON($versiones ?? []);
    }

    /**
     * Almacena el archivo
     * @param File $archivo Instancia `\CodeIgniter\Files\File` con el archivo ya en ruta temporal
     * @return bool|string Devuelve `false` si no se pudo almacenar el archivo, caso contrario (`true`) devuelve la ruta donde se guardó
     */
    public function store_file($archivo)
    {
        $directorio = "{$this->directorio_archivos}Automoviles";

        if (!$archivo->isValid() || !$archivo->move($directorio)) {
            return false;
        }

        return "Automoviles/{$archivo->getName()}";
    }

    /**
     * Elimina el archivo del directorio
     * @param string $ruta_archivo ruta donde se encuentra el archivo
     * @return bool Devuelve `true` o `false` si eliminó el archivo o no
     */
    public function delete_file($ruta_archivo)
    {
        if (!file_exists($ruta_archivo)) {
            return false;
        }

        return unlink($ruta_archivo);
    }
}
