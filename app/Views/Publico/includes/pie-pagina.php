<?php

$direccion = obtener_configuracion('contacto_direccion');
$telefono  = obtener_configuracion('contacto_telefono');
$correo    = obtener_configuracion('contacto_correo');

$facebook  = obtener_configuracion('rs_facebook');
$instagram = obtener_configuracion('rs_instagram');
$rs_x      = obtener_configuracion('rs_x');
$pinterest = obtener_configuracion('rs_pinterest');
?>

<!-- Document Footer Start -->
<footer class="footer-document ratio_asos mb-xxl">
    <div class="bg-footer-l">
        <img src="/imagenes/bg-footer-l.png" alt="banner" />
    </div>
    <div class="bg-footer-r">
        <img src="/imagenes/bg-footer-r.png" alt="banner" />
    </div>
    <div>
        <div class="container-lg">
            <div class="main-footer">
                <div class="row gy-3 gy-md-4 gy-xl-0">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="content-box">
                            <img class="logo" src="/imagenes/logo-transparente.png" alt="logo-white" />
                            <ul>
                                <?php if ($direccion) : ?>
                                    <li><i data-feather="map-pin"></i> <span><?= $direccion ?></span></li>
                                <?php endif ?>

                                <?php if ($telefono) : ?>
                                    <li>
                                        <i data-feather="phone"></i><a class="nav" href="tel:<?= $telefono ?>"><span><?= $telefono ?></span></a>
                                    </li>
                                <?php endif ?>

                                <?php if ($correo) : ?>
                                    <li>
                                        <i data-feather="mail"></i><a class="nav" href="mailto:<?= $correo ?>"><span><?= $correo ?></span></a>
                                    </li>
                                <?php endif ?>
                            </ul>
                        </div>
                    </div>

                    <div class="nav-footer col-lg-2 col-md-4 order-md-3 order-lg-2">
                        <div class="nav content-box d-md-block">
                            <h5 class="heading-footer">Compra tu automóvil</h5>
                            <ul>
                                <li><a class="nav" href="<?= base_url(route_to('automoviles')) ?>">Automóviles</a></li>
                                <li><a class="nav" href="<?= base_url(route_to('automoviles')) ?>">Encuentra el ideal</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="nav-footer col-xl-2 col-lg-3 col-md-4 order-md-4 order-lg-3">
                        <div class="nav d-md-block content-box">
                            <h5 class="heading-footer">Información</h5>
                            <ul>
                                <li><a class="nav" href="<?= base_url(route_to('acerca_de_nosotros')) ?>">Acerca de</a></li>
                                <li><a class="nav" href="<?= base_url(route_to('terminos_y_condiciones')) ?>">Términos y condiciones</a></li>
                                <li><a class="nav" href="<?= base_url(route_to('aviso_de_privacidad')) ?>">Aviso de privacidad</a></li>
                                <li><a class="nav" href="<?= base_url(route_to('contactar')) ?>">Contáctanos</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="nav-footer col-xl-2 col-lg-3 col-md-4 order-md-5 order-lg-4">
                        <div class="nav d-md-block content-box">
                            <h5 class="heading-footer">Mi cuenta</h5>
                            <ul>
                                <li><a class="nav" href="<?= base_url(route_to('mi_cuenta')) ?>">Mi cuenta</a></li>
                                <li><a class="nav" href="<?= base_url(route_to('separaciones')) ?>">Mis separaciones</a></li>
                                <li><a class="nav" href="<?= base_url(route_to('citas')) ?>">Mis citas</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-3 col-md-6 col-lg-4 order-md-2 order-lg-5">
                        <div class="content-box">
                            <h5 class="heading-footer">Síguenos</h5>
                            <div class="follow-wrap">
                                <ul>
                                    <?php if($facebook) : ?>
                                        <li>
                                            <a href="<?= $facebook ?>"> <img src="/iconos/fb.svg" alt="fb" /> </a>
                                        </li>
                                    <?php endif ?>

                                    <?php if($instagram) : ?>
                                        <li>
                                            <a href="<?= $instagram ?>"> <img src="/iconos/inta.svg" alt="fb" /> </a>
                                        </li>
                                    <?php endif ?>

                                    <?php if($rs_x) : ?>
                                        <li>
                                            <a href="<?= $rs_x ?>"> <img src="/iconos/tw.svg" alt="fb" /> </a>
                                        </li>
                                    <?php endif ?>

                                    <?php if($pinterest) : ?>
                                        <li>
                                            <a href="<?= $pinterest ?>"> <img src="/iconos/pint.svg" alt="fb" /> </a>
                                        </li>
                                    <?php endif ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sub-footer">
                <div class="row gy-3">
                    <div class="col-md-6">
                        <ul>
                            <li>
                                <a href="javascript:void(0)"> <img src="/iconos/mastercard.png" class="img-fluid blur-up lazyload" alt="payment icon" /></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"> <img src="/iconos/visa.png" class="img-fluid blur-up lazyload" alt="payment icon" /></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"> <img src="/iconos/discover-b.png" class="img-fluid blur-up lazyload" alt="payment icon" /></a>
                            </li>
                            <li>
                                <a href="javascript:void(0)"> <img src="/iconos/maestro.png" class="img-fluid blur-up lazyload" alt="payment icon" /></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <p class="mb-0">© <?= date('Y') ?>, Conoce tu futuro – “Compra o vende, toma el control de tu camino”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Document Footer End -->

<!-- Mobile Menu Footer Start -->
<footer class="mobile-menu-footer d-sm-none">
    <ul>
        <li>
            <a href="index.html">
                <i data-feather="home"></i>
                <span>Home</span>
            </a>
        </li>
        <li>
            <a href="search.html" class="search-link">
                <i data-feather="search"></i>
                <span>Search</span>
            </a>
        </li>
        <li>
            <a href="cart.html">
                <i data-feather="shopping-bag"></i>
                <span>Cart</span>
            </a>
        </li>
        <li>
            <a href="wishlist.html">
                <i data-feather="heart"></i>
                <span>Wishlist</span>
            </a>
        </li>
        <li>
            <a href="user-dashboard.html">
                <i data-feather="user"></i>
                <span>Account</span>
            </a>
        </li>
    </ul>
</footer>
<!-- Mobile Menu Footer End -->