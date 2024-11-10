<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Contáctanos<?= $this->endSection() ?>

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
                        <h1>Contáctanos</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Contáctanos</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <section class="contact-section">
        <div class="container-lg">
            <div class="row justify-content-center gy-4 gy-xl-0 gx-0 gx-xl-4">
                <div class="col-xl-10 order-1 order-xl-2">
                    <div class="address-content round-wrap-content">
                        <div class="title-box4">
                            <h4 class="heading">Pongámonos en contacto<span class="bg-theme-blue"></span></h4>
                        </div>

                        <div class="steps-wrap">
                            <div class="row">
                                <?php if ($direccion) : ?>
                                    <div class="col-12">
                                        <div class="steps-box mt-0">
                                            <span><i data-feather="map-pin"></i></span>
                                            <div class="content">
                                                <h4 class="title-color">Dirección</h4>
                                                <p class="content-color"><?= $direccion ?></p>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif ?>

                                <?php if ($telefono) : ?>
                                    <div class="col-sm-6">
                                        <div class="steps-box">
                                            <span><i data-feather="phone"></i></span>
                                            <div class="content">
                                                <h4 class="title-color">Número de contacto</h4>
                                                <p class="content-color"><?= $telefono ?></p>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif ?>

                                <?php if ($correo) : ?>
                                    <div class="col-sm-6">
                                        <div class="steps-box">
                                            <span><i data-feather="mail"></i></span>
                                            <div class="content">
                                                <h4 class="title-color">Correo electrónico</h4>
                                                <p class="content-color"><?= $correo ?></p>
                                            </div>
                                        </div>
                                    </div>
                                <?php endif ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<!-- Main End -->
<?= $this->endSection() ?>