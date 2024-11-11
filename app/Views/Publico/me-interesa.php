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
    <section class="about-section shop-page">
        <div class="container-lg">
            <div class="row g-0 g-lg-4 g-xl-5 justify-content-center">
                <div class="content-box">
                    <h4>¿Cómo te gustaría conseguir tu pŕoximo automóvil?</h5>
                        <h5>"Conoce tu futuro" es el mejor mercado para adquirir tu próximo auto</h5>
                        <p>Te ofrecemos las siguientes opciones</p>
                </div>
                
                <!-- Automóvil -->
                <div class="col-12 col-md-10 col-xl-8 align-self-center">
                    <div class="product-tab-content mb-5">
                        <div class="list-section view-option row g-3 g-xl-4 ratio_asos">
                            <!-- Automóvil card -->
                            <?= view('Publico/componentes/automovil', compact('automovil')) ?>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 justify-content-center order-2 order-lg-1">
                    <div class="contenten-wrap">
                        <form action="<?= base_url(route_to('me_interesa_opciones', $automovil['id'])) ?>" class="row g-3 g-md-4 mb-4" method="POST" id="form-me-interesa">
                            <?= csrf_field() ?>

                            <div class="col-12 col-xl-6">
                                <div class="address-box checked">
                                    <div class="radio-box">
                                        <div>
                                            <input class="radio-input" type="radio" checked id="radio1" name="radio1" />
                                            <label class="radio-label" for="radio1">Quiero separarlo</label>
                                        </div>
                                        <span class="badges badges-pill badges-theme">Recomendado</span>
                                    </div>
                                    <div class="address-detail">
                                        <lo class="content-color font-default">La mejor opción que te asegura obtener tu automóvil sin que alguien más te lo gane</lo>
                                        <p class="content-color font-default">Anímate, el proceso es en línea, tus pagos están 100% protegidos y seguros</p>
                                        <span class="content-color font-default">Costo: <span class="title-color font-default fw-500"><?= $costo_separacion ?></span></span>
                                        <span class="content-color font-default mt-1">Garantía: <span class="title-color font-default fw-500"> 7 días, a partir del día de pago</span></span>
                                        <span class="content-color font-default mt-1">Método de pago: <span class="title-color font-default fw-500">Tarjetas de crédito ó débito</span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-xl-6">
                                <div class="address-box">
                                    <div class="radio-box">
                                        <div>
                                            <input class="radio-input" type="radio" id="radio3" name="radio1" />
                                            <label class="radio-label" for="radio3">Quiero conocerlo (agendar visita)</label>
                                        </div>
                                        <span class="badges badges-pill bg-warning">Poco recomendado</span>
                                    </div>
                                    <div class="address-detail">
                                        <p class="content-color font-default">Buena opción para ti que te gusta ver, conocerlo y vivir la experiencia en persona de tu próximo automóvil</p>
                                        <p class="content-color font-default">Sujeto a cambios, recuerda que sigue estando disponible el automóvil y alguien más puede separarlo. Te recomendamos separarlo</p>
                                        <span class="content-color font-default">Costo: <span class="title-color font-default fw-500"> Sin costo</span></span>
                                        <span class="content-color font-default mt-1">Disponibilidad: <span class="title-color font-default fw-500">No asegurado, previo a la fecha agendada</span></span>
                                    </div>
                                </div>
                            </div>
                        </form>





                        <div class="row justify-content-end">
                            <div class="col-12 text-end">
                                <button type="submit" form="form-me-interesa" class="btn-solid btn-sm mb-line">Aceptar</button>
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

<?= $this->section('scripts') ?>
<script>

</script>
<?= $this->endSection() ?>