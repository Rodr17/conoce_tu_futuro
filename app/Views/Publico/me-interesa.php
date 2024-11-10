<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Me interesa<?= $this->endSection() ?>

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
                        <h1>Me interesa</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li><a href="<?= base_url(route_to('automoviles')) ?>">Compra tu automóvil</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li><a href="<?= base_url(route_to('automovil', $automovil['id'])) ?>"><?= $automovil['nombre'] ?></a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Me interesa</a></li>
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
                <div class="col-lg-10 justify-content-center order-2 order-lg-1">
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
            </div>
        </div>
    </section>
    <!-- About Us Section End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>