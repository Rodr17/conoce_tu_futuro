<header class="header-common">
    <!-- Top Header -->
    <div class="top-header">
        <p class="marquee"><span>Bienvenido(a) a nuestra gran ignauguración. Eres de nuestros primeros usuarios en visitarnos</span></p>
    </div>
    <div class="container-lg">
        <div class="nav-wrap">
            <!-- Navigation Start -->
            <nav class="navigation">
                <div class="nav-section">
                    <div class="header-section">
                        <div class="navbar navbar-expand-xl navbar-light navbar-sticky p-0">
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu" aria-controls="primaryMenu">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a href="<?= base_url() ?>" class="logo-link">
                                <img class="logo" src="/imagenes/logo-transparente.png" alt="logo" />
                            </a>
                            <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                                <div class="offcanvas-header navbar-shadow">
                                    <h5 class="mt-1 mb-0">Menu</h5>
                                    <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>

                                <div class="offcanvas-body">
                                    <!-- Menu-->
                                    <ul class="navbar-nav">
                                        <!-- Inicio -->
                                        <li class="nav-item dropdown dropdown-mega">
                                            <a class="nav-link dropdown-toggle" href="<?= base_url() ?>">Inicio</a>
                                        </li>

                                        <!-- Automóviles -->
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="<?= base_url(route_to('automoviles')) ?>">Compra tu automóvil</a>
                                        </li>

                                        <!-- Acerca de -->
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="<?= base_url(route_to('acerca_de_nosotros')) ?>">Nosotros</a>
                                        </li>

                                        <!-- Contacto -->
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="<?= base_url(route_to('contactar')) ?>">Contáctanos</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navigation End -->

            <!-- Menu Right Start  -->
            <div class="menu-right">
                <!-- Icon Menu Start -->
                <ul class="icon-menu">
                    <li>
                        <button class="search-button"><i data-feather="search"></i></button>
                        <!-- Search Input Start -->
                        <form action="<?= base_url(route_to('automoviles')) ?>" class="search-full">
                            <div class="input-group">
                                <span class="input-group-text">
                                    <i data-feather="search"></i>
                                </span>
                                <input type="text" class="form-control search-type" name="buscar" placeholder="Buscar..." />
                                <span class="input-group-text close-search">
                                    <i data-feather="x"></i>
                                </span>
                            </div>
                        </form>
                        <!-- Search Input End -->
                    </li>

                    <li class="user">
                        <div class="dropdown user-dropdown">
                            <a href="javascript:void(0)"><i data-feather="user"></i></a>
                            <ul class="onhover-show-div">
                                <?php
                                $usuario = auth()->user();

                                if (auth()->loggedIn() && $usuario->inGroup('cliente')) : ?>
                                    <li><a href="<?= base_url(route_to('mi_cuenta')) ?>">Mi cuenta</a></li>
                                    <li><a href="<?= base_url(route_to('separaciones')) ?>">Separaciones</a></li>
                                    <li><a href="<?= base_url(route_to('citas')) ?>">Mis citas</a></li>
                                    <li><a href="<?= base_url('cerrar-sesion') ?>">Cerrar sesión</a></li>
                                <?php else : ?>
                                    <li><a href="<?= base_url('iniciar-sesion') ?>">Iniciar sesión</a></li>
                                    <li><a href="<?= base_url(route_to('registrarme')) ?>">Registrate</a></li>
                                <?php endif ?>
                            </ul>
                        </div>
                    </li>

                    <?php

                    $id_usuario = auth()->id();

                    $cantidad_favoritos = model('FavoritosAutomoviles')
                        ->selectCount('id_automovil')
                        ->where('id_usuario', $id_usuario)
                        ->first()['id_automovil'];
                    ?>
                    <li>
                        <div class="dropdown whislist-dropdown">
                            <a href="javascript:void(0)"><i data-feather="heart"></i><span class="notification-label"><?= $cantidad_favoritos ?></span></a>
                            <div class="onhover-show-div">
                                <?php if ($cantidad_favoritos) : ?>
                                    <a href="<?= base_url(route_to('favoritos')) ?>"></a>
                                    <div class="content">
                                        <a href="<?= base_url(route_to('favoritos')) ?>">
                                            <h6>¡Da clic para ir a tus favoritos!</h6>
                                            <p>Elige lo mejor de lo mejor para ti</p>
                                        </a>
                                    </div>
                                <?php else : ?>
                                    <a href="<?= base_url(route_to('automoviles')) ?>"> <img src="/iconos/box.svg" class="img-fluid" alt="box" /> </a>
                                    <div class="content">
                                        <a href="<?= base_url(route_to('automoviles')) ?>">
                                            <h6>¡Lista de favoritos vacía!</h6>
                                            <p>Explora más y selecciona elementos</p>
                                        </a>
                                    </div>
                                <?php endif ?>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- Icon Menu End -->
            </div>
            <!-- Menu Right End  -->
        </div>
    </div>
</header>