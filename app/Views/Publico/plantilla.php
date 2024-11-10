<!DOCTYPE html>
<html lang="es">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Conoce tu futuro" />
        <meta name="keywords" content="Conoce tu futuro" />
        <meta name="author" content="Conoce tu futuro" />

        <link rel="icon" href="/imagenes/logo-transparente.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/imagenes/logo-transparente.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/imagenes/logo-transparente.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/imagenes/logo-transparente.png" />

        <meta name="theme-color" content="#0f8fac" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Conoce tu futuro" />

        <meta name="msapplication-TileImage" content="/imagenes/logo-transparente.png" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />

        <!-- <meta name="theme-color" content="#C8203F"> -->
        <?= csrf_meta() ?>
        <title><?= $this->renderSection('titulo') ?> - Conoce tu futuro</title>

        <!-- Open Graph -->
        <meta property="og:title" content="Conoce tu futuro">
        <meta property="og:description" content="Sitio web Conoce tu futuro">
        <meta property="og:image" content="<?= base_url('imagenes/logo.jpeg') ?>">
        <meta property="og:url" content="<?= base_url() ?>">

        <!-- Google Jost Font -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <!-- Google Monsterrat Font -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet" />

        <!-- Google Leckerli Font -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap" rel="stylesheet" />

        <!-- Bootstrap Css -->
        <link id="rtl-link" rel="stylesheet" type="text/css" href="<?= base_url('css/vendors/bootstrap/bootstrap.css') ?>" />

        <!-- Wow Animation Css -->
        <link rel="stylesheet" type="text/css" href="<?= base_url('css/vendors/wow/wow-animate.css') ?>" />

        <!-- Swiper Slider Css -->
        <link rel="stylesheet" type="text/css" href="<?= base_url('css/vendors/swiper/swiper-bundle.min.css') ?>" />

        <!-- Style Css -->
        <link id="change-link" rel="stylesheet" type="text/css" href="<?= base_url('css/style.css') ?>" />
    </head>

    <body>
        <!-- Loader Start -->
        <div class="loader-wrapper">
            <div class="loader animate">
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>o</span>
                <span>c</span>
                <span>e &nbsp;</span>
                <span>t</span>
                <span>u &nbsp;</span>
                <span>f</span>
                <span>u</span>
                <span>t</span>
                <span>u</span>
                <span>r</span>
                <span>o</span>
            </div>
        </div>
        <!-- Loader End -->

        <!-- Overlay -->
        <a href="javascript:void(0)" class="overlay-general overlay-common"></a>

        <!-- Encabezado -->
        <?= $this->include("Publico/includes/encabezado") ?>

        <!-- Área de contenido -->
        <?= $this->renderSection('contenido') ?>

        <!-- Pié de página -->
        <?= $this->include("Publico/includes/pie-pagina") ?>

        <!-- Notification Start -->
        <div class="notification-wrap addToWishlist">
            <div class="notification">
                <img src="" alt="product" />
                <div>
                    <h5>Added To Wishlist</h5>
                </div>
            </div>
        </div>
        <!-- Notification End -->

        <!-- Botón hacia arriba Start -->
        <div class="tap-to-top-box hide">
            <button class="tap-to-top-button"><i data-feather="chevrons-up"></i></button>
        </div>
        <!-- Botón hacia arriba End -->

        <!-- Bootstrap Js -->
        <script src="<?= base_url('js/vendors/bootstrap/bootstrap.bundle.min.js') ?>"></script>

        <!-- Feather Icon -->
        <script src="<?= base_url('js/vendors/feather/feather.min.js') ?>"></script>

        <!-- Swiper Slider Js -->
        <script src="<?= base_url('js/vendors/swiper/swiper-bundle.min.js') ?>"></script>
        <script src="<?= base_url('js/vendors/swiper/swiper-custom.min.js') ?>"></script>

        <!-- Header Sticky js  -->
        <script src="<?= base_url('js/sticky-header.js') ?>"></script>

        <!-- Active Class js  -->
        <script src="<?= base_url('js/active-class.js') ?>"></script>

        <!-- Wow Js -->
        <script src="<?= base_url('js/vendors/wow/wow.js') ?>"></script>
        <script src="<?= base_url('js/vendors/wow/wow-custom.js') ?>"></script>

        <!-- Script Js -->
        <script src="<?= base_url('js/script.js') ?>"></script>

        <!-- Personalizado por página -->
        <?= $this->renderSection('scripts') ?>
    </body>

</html>