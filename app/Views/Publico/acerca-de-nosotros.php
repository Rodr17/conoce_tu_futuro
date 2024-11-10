<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Acerca de nosotros<?= $this->endSection() ?>

<?= $this->section('contenido') ?>
<!-- Main Start -->
<main class="main">
    <!-- Breadcrumb Start -->
    <div class="breadcrumb-wrap">
        <div class="banner">
            <img class="bg-img bg-top" src="/imagenes/banner-p.jpg" alt="banner" />
            <div class="container-lg">
                <div class="breadcrumb-box">
                    <div class="heading-box">
                        <h1>Acerca de nosotros</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Acerca de nosotros</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- About Us Section Start -->
    <section class="about-section">
        <div class="container-lg">
            <div class="row g-0 g-lg-4 g-xl-5">
                <div class="col-lg-7 order-2 order-lg-1">
                    <div class="align-ment">
                        <div class="contenten-wrap">
                            <div class="content-box">
                                <h5>Conoce tu futuro es el mejor mercado para adquirir tu próximo auto</h5>
                                <h4>Ofrecemos confianza, seguridad y atención mecánica especializada</h4>

                                <p>
                                    Con nuestros servicios posventa extiendes la vida de tu auto. Puedes solicitar verificación vehicular, revisamos mecánica, estética y documentación. También puedes visitarnos directamente y conocer tu auto para una mejor seguridad y confianza.
                                </p>
                            </div>
                            <div class="row g-3 g-lg-2 g-xl-3 widget-list">
                                <div class="col-6 col-sm-4">
                                    <div class="widget">
                                        <span><i data-feather="users"></i></span>

                                        <div>
                                            <h6>1,000</h6>
                                            <p>Registros</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-sm-4">
                                    <div class="widget">
                                        <span><i data-feather="shopping-bag"></i></span>

                                        <div>
                                            <h6>500+</h6>
                                            <p>Ventas</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-sm-4">
                                    <div class="widget">
                                        <span><i data-feather="shopping-cart"></i></span>

                                        <div>
                                            <h6>100+</h6>
                                            <p>Separaciones diariamente</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-6 col-sm-4">
                                    <div class="widget">
                                        <span><i data-feather="graph"></i></span>

                                        <div>
                                            <h6>80%</h6>
                                            <p>Crecimiento por mes</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2">
                    <div class="img-box">
                        <img class="img-fluid" src="/imagenes/acerca-de-nosotros.jpg" alt="Imágen acerca de nosotros" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Us Section End -->

    <!-- Service Section Start -->
    <section class="service-section2 about-service about-section">
        <div class="container-lg">
            <div class="title-box">
                <h4 class="unique-heading">Nuestro servicio</h4>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p></p>
            </div>

            <div class="row g-3 g-lg-4">
                <div class="col-md-6">
                    <div class="service-box">
                        <div class="media">
                            <span class="svg-wrap">
                                <svg>
                                    <use href="/iconos/_sprite_services.svg#component"></use>
                                </svg>
                            </span>
                            <div class="media-body">
                                <h5>Ofrecemos garantía de reemplazo de 15 días</h5>
                                <span>Ofrecemos diferentes tipos de servicios para los automóviles adquiridos en nuestro sitio.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="service-box">
                        <div class="media">
                            <span class="svg-wrap">
                                <svg>
                                    <use href="/iconos/_sprite_services.svg#dollar"></use>
                                </svg>
                            </span>
                            <div class="media-body">
                                <h5>Ofrecemos un método de pago de alta seguridad</h5>
                                <span>Ofrecemos un método de pago de alta seguridad, nadie viola el muro de protección</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="service-box">
                        <div class="media">
                            <span class="svg-wrap">
                                <svg>
                                    <use href="/iconos/_sprite_services.svg#thum"></use>
                                </svg>
                            </span>
                            <div class="media-body">
                                <h5>Tenemos más de 1,000 autmóviles</h5>
                                <span>Todos son únicos y diferentes entre sí</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Service Section End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>