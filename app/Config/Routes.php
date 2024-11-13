<?php

use App\Controllers\Citas;
use App\Controllers\Inicio;
use App\Controllers\Registro;
use App\Controllers\Dashboard;
use App\Controllers\Favoritos;
use App\Controllers\InicioSesion;
use App\Controllers\Separaciones;
use CodeIgniter\Router\RouteCollection;
use App\Controllers\Administrador\Marcas;
use App\Controllers\Administrador\Colores;
use App\Controllers\Administrador\Modelos;
use App\Controllers\Administrador\Sistemas;
use App\Controllers\Administrador\Usuarios;
use App\Controllers\Administrador\Versiones;
use App\Controllers\Administrador\Automoviles;
use App\Controllers\Administrador\Transmisiones;
use App\Controllers\Administrador\TiposDeCombustible;
use App\Controllers\Administrador\Dashboard as DashboardAdmin;

/**
 * @var RouteCollection $routes
 */
$routes->group('', function ($routes) {
    // Autenticación
    $routes->get('/', [Inicio::class, 'index']);
    $routes->get('iniciar-sesion', [InicioSesion::class, 'loginView'], ['as' => 'login']);
    $routes->post('iniciar-sesion', [InicioSesion::class, 'loginAction']);
    $routes->get('cerrar-sesion', [InicioSesion::class, 'logoutAction']);

    $routes->get('registrarme', [Registro::class, 'registerView'], ['as' => 'registrar']);
    $routes->post('registrarme', [Registro::class, 'registerAction']);

    $routes->get('acerca-de-nosotros', [Inicio::class, 'acerca_de_nosotros'], ['as' => 'acerca_de_nosotros']);
    $routes->get('terminos-y-condiciones', [Inicio::class, 'terminos_y_condiciones'], ['as' => 'terminos_y_condiciones']);
    $routes->get('aviso-de-privacidad', [Inicio::class, 'aviso_de_privacidad'], ['as' => 'aviso_de_privacidad']);
    $routes->get('contactanos', [Inicio::class, 'contactanos'], ['as' => 'contactar']);

    $routes->group('autos', function ($routes) {
        $routes->get('/', [Inicio::class, 'automoviles'], ['as' => 'automoviles']);
        $routes->get('(:num)', [Inicio::class, 'automovil'], ['as' => 'automovil']);
        $routes->get('(:num)/me-interesa', [Inicio::class, 'me_interesa/$1'], ['as' => 'me_interesa']);
        $routes->get('(:num)/me-interesa/proceso', [Inicio::class, 'me_interesa_opciones/$1'], ['filter' => 'group:cliente', 'as' => 'me_interesa_opciones']);

        $routes->post('(:num)/separar', [Separaciones::class, 'create'], ['filter' => 'group:cliente', 'as' => 'crear_separaciones']);

        $routes->get('(:num)/separacion-exitosa', [Separaciones::class, 'show/$1'], ['filter' => 'group:cliente', 'as' => 'separacion_exitosa']);
    });

    $routes->group('admin', function ($routes) {
        $routes->get('/', [DashboardAdmin::class, 'index'], ['as' => 'admin']);

        $routes->group('usuarios', function ($routes) {
            $routes->post('/', [Usuarios::class, 'create'], ['filter' => 'permission:usuarios.crear', 'as' => 'crear_usuarios']);
            $routes->get('agregar', [Usuarios::class, 'new'], ['filter' => 'permission:usuarios.crear', 'as' => 'agregar_usuarios']);
            $routes->get('/', [Usuarios::class, 'index'], ['filter' => 'permission:usuarios.ver', 'as' => 'usuarios']);
            $routes->get('(:num)/editar', [Usuarios::class, 'edit/$1'], ['filter' => 'permission:usuarios.editar', 'as' => 'editar_usuarios']);
            $routes->match(['put', 'patch'], '(:num)', [Usuarios::class, 'update/$1'], ['filter' => 'permission:usuarios.editar', 'as' => 'actualizar_usuarios']);
            $routes->delete('(:num)', [Usuarios::class, 'delete/$1'], ['filter' => 'permission:usuarios.eliminar', 'as' => 'eliminar_usuarios']);
            $routes->delete('/', [Usuarios::class, 'delete_batch'], ['filter' => 'permission:usuarios.eliminar', 'as' => 'eliminar_lotes_usuarios']);
        });

        $routes->group('automoviles', function ($routes) {
            $routes->post('/', [Automoviles::class, 'create'], ['filter' => 'permission:automoviles.crear', 'as' => 'crear_automoviles']);
            $routes->get('agregar', [Automoviles::class, 'new'], ['filter' => 'permission:automoviles.crear', 'as' => 'agregar_automoviles']);
            $routes->get('/', [Automoviles::class, 'index'], ['filter' => 'permission:automoviles.ver', 'as' => 'automoviles_admin']);
            $routes->get('(:num)/editar', [Automoviles::class, 'edit/$1'], ['filter' => 'permission:automoviles.editar', 'as' => 'editar_automoviles']);
            $routes->match(['put', 'patch'], '(:num)', [Automoviles::class, 'update/$1'], ['filter' => 'permission:automoviles.editar', 'as' => 'actualizar_automoviles']);
            $routes->delete('(:num)', [Automoviles::class, 'delete/$1'], ['filter' => 'permission:automoviles.eliminar', 'as' => 'eliminar_automoviles']);
            $routes->delete('/', [Automoviles::class, 'delete_batch'], ['filter' => 'permission:automoviles.eliminar', 'as' => 'eliminar_lotes_automoviles']);

            $routes->get('(:num)/version', [Automoviles::class, 'version/$1'], ['filter' => 'permission:automoviles.crear']);
        });

        $routes->group('marcas', function ($routes) {
            $routes->post('/', [Marcas::class, 'create'], ['filter' => 'permission:marcas.crear', 'as' => 'crear_marcas']);
            $routes->get('agregar', [Marcas::class, 'new'], ['filter' => 'permission:marcas.crear', 'as' => 'agregar_marcas']);
            $routes->get('/', [Marcas::class, 'index'], ['filter' => 'permission:marcas.ver', 'as' => 'marcas']);
            $routes->get('(:num)/editar', [Marcas::class, 'edit/$1'], ['filter' => 'permission:marcas.editar', 'as' => 'editar_marcas']);
            $routes->match(['put', 'patch'], '(:num)', [Marcas::class, 'update/$1'], ['filter' => 'permission:marcas.editar', 'as' => 'actualizar_marcas']);
            $routes->delete('(:num)', [Marcas::class, 'delete/$1'], ['filter' => 'permission:marcas.eliminar', 'as' => 'eliminar_marcas']);
            $routes->delete('/', [Marcas::class, 'delete_batch'], ['filter' => 'permission:marcas.eliminar', 'as' => 'eliminar_lotes_marcas']);
        });

        $routes->group('modelos', function ($routes) {
            $routes->post('/', [Modelos::class, 'create'], ['filter' => 'permission:modelos.crear', 'as' => 'crear_modelos']);
            $routes->get('agregar', [Modelos::class, 'new'], ['filter' => 'permission:modelos.crear', 'as' => 'agregar_modelos']);
            $routes->get('/', [Modelos::class, 'index'], ['filter' => 'permission:modelos.ver', 'as' => 'modelos']);
            $routes->get('(:num)/editar', [Modelos::class, 'edit/$1'], ['filter' => 'permission:modelos.editar', 'as' => 'editar_modelos']);
            $routes->match(['put', 'patch'], '(:num)', [Modelos::class, 'update/$1'], ['filter' => 'permission:modelos.editar', 'as' => 'actualizar_modelos']);
            $routes->delete('(:num)', [Modelos::class, 'delete/$1'], ['filter' => 'permission:modelos.eliminar', 'as' => 'eliminar_modelos']);
            $routes->delete('/', [Modelos::class, 'delete_batch'], ['filter' => 'permission:modelos.eliminar', 'as' => 'eliminar_lotes_modelos']);
        });

        $routes->group('versiones', function ($routes) {
            $routes->post('/', [Versiones::class, 'create'], ['filter' => 'permission:versiones.crear', 'as' => 'crear_versiones']);
            $routes->get('agregar', [Versiones::class, 'new'], ['filter' => 'permission:versiones.crear', 'as' => 'agregar_versiones']);
            $routes->get('/', [Versiones::class, 'index'], ['filter' => 'permission:versiones.ver', 'as' => 'versiones']);
            $routes->get('(:num)/editar', [Versiones::class, 'edit/$1'], ['filter' => 'permission:versiones.editar', 'as' => 'editar_versiones']);
            $routes->match(['put', 'patch'], '(:num)', [Versiones::class, 'update/$1'], ['filter' => 'permission:versiones.editar', 'as' => 'actualizar_versiones']);
            $routes->delete('(:num)', [Versiones::class, 'delete/$1'], ['filter' => 'permission:versiones.eliminar', 'as' => 'eliminar_versiones']);
            $routes->delete('/', [Versiones::class, 'delete_batch'], ['filter' => 'permission:versiones.eliminar', 'as' => 'eliminar_lotes_versiones']);
        });
        
        $routes->group('colores', function ($routes) {
            $routes->post('/', [Colores::class, 'create'], ['filter' => 'permission:colores.crear', 'as' => 'crear_colores']);
            $routes->get('agregar', [Colores::class, 'new'], ['filter' => 'permission:colores.crear', 'as' => 'agregar_colores']);
            $routes->get('/', [Colores::class, 'index'], ['filter' => 'permission:colores.ver', 'as' => 'colores']);
            $routes->get('(:num)/editar', [Colores::class, 'edit/$1'], ['filter' => 'permission:colores.editar', 'as' => 'editar_colores']);
            $routes->match(['put', 'patch'], '(:num)', [Colores::class, 'update/$1'], ['filter' => 'permission:colores.editar', 'as' => 'actualizar_colores']);
            $routes->delete('(:num)', [Colores::class, 'delete/$1'], ['filter' => 'permission:colores.eliminar', 'as' => 'eliminar_colores']);
            $routes->delete('/', [Colores::class, 'delete_batch'], ['filter' => 'permission:colores.eliminar', 'as' => 'eliminar_lotes_colores']);
        });

        $routes->group('transmisiones', function ($routes) {
            $routes->post('/', [Transmisiones::class, 'create'], ['filter' => 'permission:transmisiones.crear', 'as' => 'crear_transmisiones']);
            $routes->get('agregar', [Transmisiones::class, 'new'], ['filter' => 'permission:transmisiones.crear', 'as' => 'agregar_transmisiones']);
            $routes->get('/', [Transmisiones::class, 'index'], ['filter' => 'permission:transmisiones.ver', 'as' => 'transmisiones']);
            $routes->get('(:num)/editar', [Transmisiones::class, 'edit/$1'], ['filter' => 'permission:transmisiones.editar', 'as' => 'editar_transmisiones']);
            $routes->match(['put', 'patch'], '(:num)', [Transmisiones::class, 'update/$1'], ['filter' => 'permission:transmisiones.editar', 'as' => 'actualizar_transmisiones']);
            $routes->delete('(:num)', [Transmisiones::class, 'delete/$1'], ['filter' => 'permission:transmisiones.eliminar', 'as' => 'eliminar_transmisiones']);
            $routes->delete('/', [Transmisiones::class, 'delete_batch'], ['filter' => 'permission:transmisiones.eliminar', 'as' => 'eliminar_lotes_transmisiones']);
        });

        $routes->group('tipos-de-combustible', function ($routes) {
            $routes->post('/', [TiposDeCombustible::class, 'create'], ['filter' => 'permission:tipos_de_combustible.crear', 'as' => 'crear_tipos_de_combustible']);
            $routes->get('agregar', [TiposDeCombustible::class, 'new'], ['filter' => 'permission:tipos_de_combustible.crear', 'as' => 'agregar_tipos_de_combustible']);
            $routes->get('/', [TiposDeCombustible::class, 'index'], ['filter' => 'permission:tipos_de_combustible.ver', 'as' => 'tipos_de_combustible']);
            $routes->get('(:num)/editar', [TiposDeCombustible::class, 'edit/$1'], ['filter' => 'permission:tipos_de_combustible.editar', 'as' => 'editar_tipos_de_combustible']);
            $routes->match(['put', 'patch'], '(:num)', [TiposDeCombustible::class, 'update/$1'], ['filter' => 'permission:tipos_de_combustible.editar', 'as' => 'actualizar_tipos_de_combustible']);
            $routes->delete('(:num)', [TiposDeCombustible::class, 'delete/$1'], ['filter' => 'permission:tipos_de_combustible.eliminar', 'as' => 'eliminar_tipos_de_combustible']);
            $routes->delete('/', [TiposDeCombustible::class, 'delete_batch'], ['filter' => 'permission:tipos_de_combustible.eliminar', 'as' => 'eliminar_lotes_tipos_de_combustible']);
        });

        $routes->group('sistemas', function ($routes) {
			$routes->get('(:num)/editar', [Sistemas::class, 'edit/$1'], ['filter' => 'permission:sistemas.editar', 'as' => 'editar_sistemas']);
			$routes->match(['put', 'patch'], '(:num)', [Sistemas::class, 'update/$1'], ['filter' => 'permission:sistemas.editar', 'as' => 'actualizar_sistemas']);
			$routes->delete('(:num)', [Sistemas::class, 'delete/$1'], ['filter' => 'permission:sistemas.eliminar', 'as' => 'eliminar_sistemas']);
		});
    });

    $routes->group('mi-cuenta', function ($routes) {
        $routes->get('/', [Dashboard::class, 'index'], ['as' => 'mi_cuenta']);

        $routes->group('separaciones', function ($routes) {
            $routes->get('agregar', [Separaciones::class, 'new'], ['filter' => 'permission:separaciones.crear', 'as' => 'agregar_separaciones']);
            $routes->get('/', [Separaciones::class, 'index'], ['filter' => 'permission:separaciones.ver', 'as' => 'separaciones']);
            $routes->get('(:num)/editar', [Separaciones::class, 'edit/$1'], ['filter' => 'permission:separaciones.editar', 'as' => 'editar_separaciones']);
            $routes->match(['put', 'patch'], '(:num)', [Separaciones::class, 'update/$1'], ['filter' => 'permission:separaciones.editar', 'as' => 'actualizar_separaciones']);
            $routes->delete('(:num)', [Separaciones::class, 'delete/$1'], ['filter' => 'permission:separaciones.eliminar', 'as' => 'eliminar_separaciones']);
            $routes->delete('/', [Separaciones::class, 'delete_batch'], ['filter' => 'permission:separaciones.eliminar', 'as' => 'eliminar_lotes_separaciones']);
        });

        $routes->group('favoritos', function ($routes) {
            $routes->post('/', [Favoritos::class, 'create'], ['filter' => 'permission:favoritos.crear', 'as' => 'crear_favoritos']);
            $routes->get('agregar', [Favoritos::class, 'new'], ['filter' => 'permission:favoritos.crear', 'as' => 'agregar_favoritos']);
            $routes->get('/', [Favoritos::class, 'index'], ['filter' => 'permission:favoritos.ver', 'as' => 'favoritos']);
            $routes->get('(:num)/editar', [Favoritos::class, 'edit/$1'], ['filter' => 'permission:favoritos.editar', 'as' => 'editar_favoritos']);
            $routes->match(['put', 'patch'], '(:num)', [Favoritos::class, 'update/$1'], ['filter' => 'permission:favoritos.editar', 'as' => 'actualizar_favoritos']);
            $routes->delete('(:num)', [Favoritos::class, 'delete/$1'], ['filter' => 'permission:favoritos.eliminar', 'as' => 'eliminar_favoritos']);
            $routes->delete('/', [Favoritos::class, 'delete_batch'], ['filter' => 'permission:favoritos.eliminar', 'as' => 'eliminar_lotes_favoritos']);
        });
        
        $routes->group('citas', function ($routes) {
            $routes->post('/', [Citas::class, 'create'], ['filter' => 'permission:citas.crear', 'as' => 'crear_citas']);
            $routes->get('agregar', [Citas::class, 'new'], ['filter' => 'permission:citas.crear', 'as' => 'agregar_citas']);
            $routes->get('/', [Citas::class, 'index'], ['filter' => 'permission:citas.ver', 'as' => 'citas']);
            $routes->get('(:num)/editar', [Citas::class, 'edit/$1'], ['filter' => 'permission:citas.editar', 'as' => 'editar_citas']);
            $routes->match(['put', 'patch'], '(:num)', [Citas::class, 'update/$1'], ['filter' => 'permission:citas.editar', 'as' => 'actualizar_citas']);
            $routes->delete('(:num)', [Citas::class, 'delete/$1'], ['filter' => 'permission:citas.eliminar', 'as' => 'eliminar_citas']);
            $routes->delete('/', [Citas::class, 'delete_batch'], ['filter' => 'permission:citas.eliminar', 'as' => 'eliminar_lotes_citas']);
        });
    });
});
service('auth')->routes($routes, [
    'except' => [
        'login',
        'register',
        'logout',
    ],
]);
