<div class="min-w-fit">
    <!-- Menú backdrop (mobile only) -->
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true" x-cloak></div>

    <!-- Menú -->
    <div id="sidebar" class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-menu p-4 transition-all duration-200 ease-in-out"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'" @click.outside="sidebarOpen = false" @keydown.escape.window="sidebarOpen = false" x-cloak="lg">

        <!-- Menú header -->
        <div class="flex justify-between mb-10 pr-3 sm:px-2">
            <!-- Cerrar button -->
            <button class="lg:hidden text-slate-500 hover:text-slate-400" @click.stop="sidebarOpen = !sidebarOpen" aria-controls="sidebar" :aria-expanded="sidebarOpen">
                <span class="sr-only">Cerrar menú</span>
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z">
                </svg>
            </button>
            <!-- Logo -->
            <a class="block w-full object-center" href="<?= base_url() ?>">
                <img src="<?= base_url('imagenes/logo-transparente.png') ?>" width="100" style="margin: 0 auto;">
            </a>
        </div>

        <!-- Links -->
        <?php $usuario = auth()->user() ?>
        <div class="space-y-8">
            <!-- Pages group -->
            <div>
                <h3 class="text-xs uppercase text-success font-semibold pl-3">
                    <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
                    <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Menú</span>
                </h3>
                <ul class="mt-3">
                    <!-- Dashboard -->
                    <?php $en_dashboard = en_submenu('admin') ?>
                    <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
                        <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="<?= base_url(route_to('admin')) ?>">
                            <div class="flex items-center">
                                <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                    <path class="fill-current <?= $en_dashboard ? 'text-blue-500' : 'text-slate-500' ?>" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                                    <path class="fill-current <?= $en_dashboard ? 'text-blue-600' : 'text-slate-600' ?>" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                                    <path class="fill-current <?= $en_dashboard ? 'text-blue-200' : 'text-slate-200' ?>" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                                </svg>
                                <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <?php if ($usuario->can('usuarios.ver') || $usuario->can('usuarios.crear')) :
                $en_usuarios = url_is('admin/usuarios*') ?>
                <div>
                    <h3 class="text-xs uppercase text-success font-semibold pl-3">
                        <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
                        <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Acceso</span>
                    </h3>
                    <ul class="mt-3">
                        <!-- Usuarios -->
                        <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_usuarios ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_usuarios ? 'true' : 'false' ?> }">
                            <a class="block text-slate-200 truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                            <path class="fill-current <?= $en_usuarios ? 'text-blue-600' : 'text-slate-600' ?>"
                                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                                            <path class="fill-current <?= $en_usuarios ? 'text-blue-400' : 'text-slate-400' ?>" d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                                        </svg>
                                        <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Usuarios</span>
                                    </div>
                                    <!-- Icon -->
                                    <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                <ul class="pl-9 mt-1" :class="open ? '!block' : 'hidden'">
                                    <?php if ($usuario->can('usuarios.ver')) : ?>
                                        <li class="mb-1 last:mb-0">
                                            <a class="block <?= en_submenu('usuarios') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('usuarios')) ?>">
                                                <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de usuarios</span>
                                            </a>
                                        </li>
                                    <?php endif ?>
                                    <?php if ($usuario->can('usuarios.crear')) : ?>
                                        <li class="mb-1 last:mb-0">
                                            <a class="block <?= en_submenu('agregar_usuarios') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_usuarios')) ?>">
                                                <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar usuario</span>
                                            </a>
                                        </li>
                                    <?php endif ?>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            <?php endif ?>

            <?php if (
                $usuario->can('automoviles.ver') || $usuario->can('automoviles.crear') ||
                $usuario->can('marcas.ver') || $usuario->can('marcas.crear') ||
                $usuario->can('modelos.ver') || $usuario->can('modelos.crear') ||
                $usuario->can('versiones.ver') || $usuario->can('versiones.crear') ||
                $usuario->can('colores.ver') || $usuario->can('colores.crear') ||
                $usuario->can('transmisiones.ver') || $usuario->can('transmisiones.crear') ||
                $usuario->can('tipos_de_combustible.ver') || $usuario->can('tipos_de_combustible.crear')
            ) : ?>
                <div>
                    <h3 class="text-xs uppercase text-success font-semibold pl-3">
                        <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
                        <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Operaciones</span>
                    </h3>
                    <ul class="mt-3">
                        <?php if ($usuario->can('automoviles.*')) :
                            $en_automoviles = url_is('admin/automoviles*') ?>
                            <!-- Automóviles -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_automoviles ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_automoviles ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_automoviles ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_automoviles ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_automoviles ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Automóviles</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('automoviles.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('automoviles') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('automoviles_admin')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de automóviles</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('automoviles.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_automoviles') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_automoviles')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar automóvil</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>

                        <?php if ($usuario->can('marcas.*')) :
                            $en_marcas = url_is('admin/marcas*') ?>
                            <!-- Marcas -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_marcas ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_marcas ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_marcas ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_marcas ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_marcas ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Marcas</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('marcas.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('marcas') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('marcas')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de marcas</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('marcas.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_marcas') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_marcas')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar marca</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>

                        <?php if ($usuario->can('modelos.*')) :
                            $en_modelos = url_is('admin/modelos*') ?>
                            <!-- Modelos -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_modelos ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_modelos ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_modelos ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_modelos ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_modelos ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Modelos</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('modelos.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('modelos') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('modelos')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de modelos</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('modelos.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_modelos') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_modelos')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar modelo</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>

                        <?php if ($usuario->can('versiones.*')) :
                            $en_versiones = url_is('admin/versiones*') ?>
                            <!-- Versiones -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_versiones ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_versiones ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_versiones ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_versiones ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_versiones ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Versiones</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('versiones.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('versiones') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('versiones')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de versiones</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('versiones.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_versiones') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_versiones')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar versión</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>

                        <?php if ($usuario->can('colores.*')) :
                            $en_colores = url_is('admin/colores*') ?>
                            <!-- Colores -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_colores ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_colores ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_colores ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_colores ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_colores ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Colores</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('colores.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('colores') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('colores')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de colores</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('colores.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_colores') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_colores')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar color</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>

                        <?php if ($usuario->can('transmisiones.*')) :
                            $en_transmisiones = url_is('admin/transmisiones*') ?>
                            <!-- Transmisiones -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_transmisiones ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_transmisiones ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_transmisiones ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_transmisiones ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_transmisiones ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Transmisiones</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('transmisiones.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('transmisiones') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('transmisiones')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de transmisiones</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('transmisiones.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_transmisiones') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_transmisiones')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar transmisión</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>

                        <?php if ($usuario->can('tipos_de_combustible.*')) :
                            $en_tipos_de_combustible = url_is('admin/tipos_de_combustible*') ?>
                            <!-- Tipos de combustible -->
                            <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_tipos_de_combustible ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_tipos_de_combustible ? 'true' : 'false' ?> }">
                                <a class="block text-slate-200 hover:text-white truncate transition duration-150" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                                <path class="fill-current <?= $en_tipos_de_combustible ? 'text-blue-600' : 'text-slate-600' ?>" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                                                <path class="fill-current <?= $en_tipos_de_combustible ? 'text-blue-600' : 'text-slate-600' ?>" d="M1 1h22v23H1z" />
                                                <path class="fill-current <?= $en_tipos_de_combustible ? 'text-blue-400' : 'text-slate-400' ?>" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                                            </svg>
                                            <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tipos de combustible</span>
                                        </div>
                                        <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                                <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                    <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                        <?php if ($usuario->can('tipos_de_combustible.ver')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('tipos_de_combustible') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('tipos_de_combustible')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listado de tipos de combustible</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                        <?php if ($usuario->can('tipos_de_combustible.crear')) : ?>
                                            <li class="mb-1 last:mb-0">
                                                <a class="block <?= en_submenu('agregar_tipos_de_combustible') ? 'text-blue-500' : 'text-slate-400 hover:text-slate-200' ?> transition duration-150 truncate" href="<?= base_url(route_to('agregar_tipos_de_combustible')) ?>">
                                                    <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Agregar tipo</span>
                                                </a>
                                            </li>
                                        <?php endif ?>
                                    </ul>
                                </div>
                            </li>
                        <?php endif ?>
                    </ul>
                </div>
            <?php endif ?>

            <?php if ($usuario->can('sistemas.ver')) :
                $configuraciones = model('Sistemas')->select(['id', 'nombre'])->orderBy('id')->find() ?>
                <!-- More group -->
                <div>
                    <h3 class="text-xs uppercase text-success font-semibold pl-3">
                        <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
                        <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Configuración</span>
                    </h3>
                    <?php $en_sistema = url_is('admin/sistemas*') ?>
                    <ul class="mt-3">
                        <!-- General -->
                        <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0<?= $en_sistema ? ' bg-neutral' : '' ?>" x-data="{ open: <?= $en_sistema ? 'true' : 'false' ?> }">
                            <a class="block text-slate-200 hover:text-white transition duration-150" :class="open && 'hover:text-slate-200'" href="#0" @click.prevent="open = !open; sidebarExpanded = true">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <svg class="shrink-0 h-4 w-4" viewBox="0 0 24 24">
                                            <path class="fill-current <?= $en_sistema ? 'text-blue-600' : 'text-slate-600' ?>" d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                                            <path class="fill-current <?= $en_sistema ? 'text-blue-400' : 'text-slate-400' ?>" d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                                            <path class="fill-current <?= $en_sistema ? 'text-blue-600' : 'text-slate-600' ?>" d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                                            <path class="fill-current <?= $en_sistema ? 'text-blue-400' : 'text-slate-400' ?>" d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                                        </svg>
                                        <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Sistema</span>
                                    </div>
                                    <div class="flex shrink-0 ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="open ? 'rotate-180' : 'rotate-0'" viewBox="0 0 12 12">
                                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                                <ul class="pl-9 mt-1 hidden" :class="open ? '!block' : 'hidden'">
                                    <?php foreach ($configuraciones as $modulo) : ?>
                                        <li class="mb-1 last:mb-0">
                                            <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" href="<?= base_url(route_to('editar_sistemas', $modulo['id'])) ?>">
                                                <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"><?= $modulo['nombre'] ?></span>
                                            </a>
                                        </li>
                                    <?php endforeach ?>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            <?php endif ?>
        </div>

        <!-- Expandir / Colapsar button -->
        <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
            <div class="px-3 py-2">
                <button @click="sidebarExpanded = !sidebarExpanded">
                    <span class="sr-only">Expandir / Colapsar</span>
                    <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                        <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                        <path class="text-slate-600" d="M3 23H1V1h2z" />
                    </svg>
                </button>
            </div>
        </div>

    </div>
</div>