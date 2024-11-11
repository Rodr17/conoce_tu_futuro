<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?><?= $automovil['nombre'] ?><?= $this->endSection() ?>

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
                        <h1><?= $automovil['nombre'] ?></h1>
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
                        <li class="current"><a><?= $automovil['nombre'] ?></a></li>
                        <li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Product Section Start -->
    <section class="product-page">
        <div class="container-lg">
            <div class="row g-3 g-xl-4 view-product">
                <div class="col-md-7">
                    <div class="slider-box sticky off-50 position-sticky">
                        <div class="row g-2">
                            <div class="col-2">
                                <div class="thumbnail-box">
                                    <div class="swiper thumbnail-img-box thumbnailSlider2">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <img src="<?= base_url($automovil['imagen']) ?>" alt="Imágen automóvil principal" />
                                            </div>
                                            <?php foreach ($imagenes as $imagen) : ?>
                                                <div class="swiper-slide">
                                                    <img src="<?= base_url($imagen['nombre']) ?>" alt="Imágen automóvil secundarias" />
                                                </div>
                                            <?php endforeach ?>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-10 ratio_square">
                                <div class="swiper mainslider2">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <img class="bg-img" src="<?= base_url($automovil['imagen']) ?>" alt="Imágen automóvil principal" />
                                        </div>
                                        <?php foreach ($imagenes as $imagen) : ?>
                                            <div class="swiper-slide">
                                                <img class="bg-img" src="<?= base_url($imagen['nombre']) ?>" alt="Imágen automóvil secundarias" />
                                            </div>
                                        <?php endforeach ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-5">
                    <div class="product-detail-box">
                        <div class="product-option">
                            <h2><?= $automovil['nombre'] ?></h2>

                            <div class="option price"><span> <?= "$" . number_format($automovil['precio']) ?> </span></div>

                            <div class="option">
                                <p class="content-color">
                                    <?= $automovil['descripcion'] ?>
                                </p>
                            </div>
                            <?php if ($automovil['color_hexadecimal']) : ?>
                                <div class="option-side">
                                    <div class="option">
                                        <div class="title-box4">
                                            <h4 class="heading">Color:<span class="bg-theme-blue"></span></h4>
                                        </div>
                                        <ul class="filter-color">
                                            <li>
                                                <div class="color-box" style="background-color: <?= $automovil['color_hexadecimal'] ?>;"></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            <?php endif ?>

                            <div class="option size">
                                <?php if ($automovil['version']) : ?>
                                    <div class="title-box4 justify-content-start gap-2">
                                        <h4 class="heading">Versión: <span class="bg-theme-blue"></span></h4>
                                        <p><?= $automovil['version'] ?></p>
                                    </div>
                                <?php endif ?>
                                <div class="title-box4 justify-content-start gap-2">
                                    <h4 class="heading">Transmisión: <span class="bg-theme-blue"></span></h4>
                                    <p><?= $automovil['transmision'] ?></p>
                                </div>
                            </div>

                            <div class="btn-group">
                                <a href="<?= base_url(route_to('me_interesa', $automovil['id'])) ?>" class="btn-solid btn-sm">Me interesa</a>
                                <a href="javascript:void(0)" class="btn-outline btn-sm <?= $automovil['es_favorito'] ?? false ? 'wishlist-delete-btn' : 'wishlist-btn' ?>" id="<?= $automovil['id'] ?>"><?= $automovil['es_favorito']  ?? false ? 'Eliminar de favoritos' : 'Agregar a favoritos' ?></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs Start -->
            <div class="description-box">
                <div class="row gy-4">
                    <div class="col-12">
                        <!-- Tabs Filter Start -->
                        <ul class="nav nav-pills nav-tabs2 row-tab" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="description-tab" data-bs-toggle="pill" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">
                                    Descripción
                                </button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="specification-tab" data-bs-toggle="pill" data-bs-target="#specification" type="button" role="tab" aria-controls="specification" aria-selected="false">
                                    Especificaciones
                                </button>
                            </li>
                        </ul>
                        <!-- Tabs Filter End -->
                    </div>

                    <div class="col-12">
                        <!-- Tab Content Start -->
                        <div class="tab-content" id="pills-tabContent">
                            <!-- Description Tab Content Start -->
                            <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                <div class="details-product">
                                    <p><?= $automovil['descripcion'] ?></p>
                                    <p><?= $automovil['descripcion_larga'] ?></p>
                                </div>
                            </div>
                            <!-- Description Tab Content End -->

                            <!-- Specification Tab Content Start -->
                            <div class="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="specification-tab">
                                <div class="specification-wrap">
                                    <div class="table-responsive">
                                        <table class="specification-table table striped">
                                            <tr>
                                                <th>Marca</th>
                                                <td><?= $automovil['marca'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Modelo</th>
                                                <td><?= $automovil['modelo'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Año</th>
                                                <td><?= $automovil['año'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Versión</th>
                                                <td><?= $automovil['version'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Color</th>
                                                <td><?= $automovil['color_nombre'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Transmisión</th>
                                                <td><?= $automovil['transmision'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Tipo de combustible</th>
                                                <td><?= $automovil['tipo_de_combustible'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Motor</th>
                                                <td><?= $automovil['motor'] ?></td>
                                            </tr>
                                            <tr>
                                                <th>Número de puertas</th>
                                                <td><?= $automovil['numero_de_puertas'] ?></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- Specification Tab Content End -->
                        </div>
                        <!-- Tab Content End -->
                    </div>
                </div>
            </div>
            <!-- Tabs End -->
        </div>
    </section>
    <!-- Product Section End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>