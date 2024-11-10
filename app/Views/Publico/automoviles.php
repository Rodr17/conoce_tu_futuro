<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Compra tu automóvil<?= $this->endSection() ?>

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
                        <h1>Compra tu automóvil</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Compra tu automóvil</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Listado automóviles Start -->
    <section class="shop-page">
        <div class="container-lg">
            <div class="row gy-4 g-lg-3 g-xxl-4">
                <div class="col-4 col-xl-3 sidebar-controll sidebar-responsive">
                    <div class="sidebar-inner sticky">
                        <div class="back-box d-flex d-lg-none">
                            <span>Back</span>
                            <span><i data-feather="x"></i></span>
                        </div>

                        <!-- Buscador general -->
                        <form action="<?= base_url(route_to('automoviles')) ?>">
                            <div class="search-box reverse">
                                <input class="form-control" type="search" name="buscar" placeholder="Buscar..." value="<?= $texto_busqueda ?>" />
                                <span class="search">
                                    <i data-feather="search"></i>
                                </span>
                            </div>
                        </form>

                        <form action="<?= base_url(route_to('automoviles')) ?>" class="row gy-3 gx-0 g-lg-4">
                            <!-- Buscar -->
                            <div class="col-12">
                                <div class="sidebar-box">
                                    <div class="title-box4">
                                        <h4 class="heading">Busqueda <span class="bg-theme-blue"></span></h4>
                                    </div>
                                    <ul class="tags">
                                        <?php foreach ($request->getGet() as $nombre => $parametros) :
                                            $titulo = str_replace('_', ' ', $nombre) ?>
                                            <?php if(is_array($parametros)) :
                                                foreach($parametros as $nombre_p => $parametro) :
                                                    $titulo = str_replace('_', ' ', $nombre) ?>
                                                <li>
                                                    <a href="javascript:void(0)"><?= "$titulo: $parametro" ?> <i data-feather="x"></i> </a>
                                                </li>
                                            <?php endforeach ; else : ?>
                                                <li>
                                                    <a href="javascript:void(0)"><?= "$titulo: $parametros" ?> <i data-feather="x"></i> </a>
                                                </li>
                                            <?php endif ?>
                                        <?php endforeach ?>
                                    </ul>
                                </div>
                            </div>

                            <!-- Filtro -->
                            <div class="col-lg-12">
                                <div class="sidebar-box">
                                    <div class="title-box4">
                                        <h4 class="heading">Filtro <span class="bg-theme-blue"></span></h4>
                                    </div>

                                    <div class="range-slider">
                                        <div class="price-input">
                                            <div class="field">
                                                <span>Min <strong class="theme-color"> $</strong></span>
                                                <input class="form-control input-min" type="number" name="precio_minimo" value="<?= number_format($precio_min, 0, '.', '') ?>" />
                                            </div>
                                            <div class="separator">-</div>
                                            <div class="field">
                                                <span>Max <strong class="theme-color"> $</strong></span>
                                                <input class="form-control input-max" type="number" name="precio_maximo" value="<?= number_format($precio_max, 0, '.', '') ?>" />
                                            </div>
                                        </div>
                                        <div class="slider">
                                            <div class="progress"></div>
                                        </div>
                                        <div class="range-input">
                                            <input type="range" class="range-min" min="<?= number_format($precio_min, 0, '.', '') ?>" max="<?= number_format($precio_max, 0, '.', '') ?>" value="<?= number_format($precio_min, 0, '.', '') ?>" step="100" />
                                            <input type="range" class="range-max" min="<?= number_format($precio_min, 0, '.', '') ?>" max="<?= number_format($precio_max, 0, '.', '') ?>" value="<?= number_format($precio_max, 0, '.', '') ?>" step="100" />
                                        </div>
                                    </div>

                                    <div class="filter-option">
                                        <h5>Colores</h5>

                                        <div class="filter-content">
                                            <ul class="filter-color color-filter-check">
                                                <?php foreach ($colores as $color) :
                                                    $checked = in_array($color['hexadecimal'], $parametros_colores) ? 'checked' : '' ?>
                                                    <li>
                                                        <label class="checkboxes style-1">
                                                            <input type="checkbox" name="colores[]" value="<?= $color['hexadecimal'] ?>" <?= $checked ?> />
                                                            <span class="checkbox__checkmark" style="background-color: <?= $color['hexadecimal'] ?>;"></span>
                                                        </label>
                                                    </li>
                                                <?php endforeach ?>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="filter-option">
                                        <h5>Marcas</h5>

                                        <div class="filter-content">
                                            <ul class="filter-check">
                                                <?php foreach ($marcas as $marca) :
                                                    $checked = in_array($marca['nombre'], $parametros_marcas) ? 'checked' : '' ?>
                                                    <li>
                                                        <label class="checkboxes style-1">
                                                            <input type="checkbox" name="marcas[]" value="<?= $marca['nombre'] ?>" <?= $checked ?> />
                                                            <span class="checkbox__checkmark"></span>
                                                            <span class="checkbox__body"><?= $marca['nombre'] ?></span>
                                                        </label>
                                                    </li>
                                                <?php endforeach ?>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="filter-option">
                                        <h5>Transmisiones</h5>

                                        <div class="filter-content">
                                            <ul class="filter-check">
                                                <?php foreach ($transmisiones as $transmision) :
                                                    $checked = in_array($transmision['nombre'], $parametros_transmisiones) ? 'checked' : '' ?>
                                                    <li>
                                                        <label class="checkboxes style-1">
                                                            <input type="checkbox" name="transmisiones[]" value="<?= $transmision['nombre'] ?>" <?= $checked ?> />
                                                            <span class="checkbox__checkmark"></span>
                                                            <span class="checkbox__body"><?= $transmision['nombre'] ?></span>
                                                        </label>
                                                    </li>
                                                <?php endforeach ?>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="filter-option">
                                        <h5>Tipos combustible</h5>

                                        <div class="filter-content">
                                            <ul class="filter-check">
                                                <?php foreach ($tipos_de_combustible as $tipo) :
                                                    $checked = in_array($tipo['nombre'], $parametros_tipos_de_combustible) ? 'checked' : '' ?>
                                                    <li>
                                                        <label class="checkboxes style-1">
                                                            <input type="checkbox" name="tipos_de_combustible[]" value="<?= $tipo['nombre'] ?>" <?= $checked ?> />
                                                            <span class="checkbox__checkmark"></span>
                                                            <span class="checkbox__body"><?= $tipo['nombre'] ?></span>
                                                        </label>
                                                    </li>
                                                <?php endforeach ?>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="filter-option">
                                        <button type="submit" class="btn-solid btn-sm mb-line">Filtrar<i class="arrow"></i> </button>
                                        <a href="<?= base_url(route_to('automoviles')) ?>" class="btn-outline btn-sm">Limpiar<i class="arrow"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="col-lg-8 col-xl-9">
                    <div class="row gy-5 gx-0">
                        <div class="col-12 order-2 order-lg-1">
                            <div class="round-wrap-content p-0 overflow-hidden">
                                <!-- Banner Start -->
                                <div class="sub-banner">
                                    <img class="bg-img object-contain position-right img-fluid" src="/imagenes/listado-automoviles.png" alt="banner" />
                                    <div class="heading-box">
                                        <div class="title-box4">
                                            <h2 class="heading">Haz una<span class="bg-theme-blue"></span></h2>
                                            <h2 class="heading">decisión inteligente<span class="bg-theme-blue"></span></h2>
                                        </div>
                                        <p>Descubre todos los detalles que debes saber sobre el auto de tus sueños. Compara la mejor opción de compra según tus intereses.</p>

                                        <h4>¿Aún no nos conoces?</h4>
                                        <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>" class="btn-solid btn-sm mb-line">Conócenos<i class="arrow"></i> </a>
                                    </div>
                                </div>
                                <!-- Banner End -->
                            </div>
                        </div>


                        <div class="col-12 order-1 order-lg-2">
                            <div class="shop-product">
                                <div class="top-header-wrap">
                                    <button class="filter-btn btn-solid btn-sm mb-line d-flex d-lg-none">Filtro <i class="arrow"></i></button>

                                    <div class="grid-option-wrap">
                                        <ul class="filter-option-grid d-none d-sm-flex">
                                            <li class="nav-item d-none d-sm-flex">
                                                <button class="nav-link" data-grid="2">
                                                    <svg>
                                                        <use href="/iconos/_sprite_grid.svg#grid-2"></use>
                                                    </svg>
                                                </button>
                                            </li>
                                            <li class="nav-item d-none d-sm-flex">
                                                <button class="nav-link" data-grid="3">
                                                    <svg>
                                                        <use href="/iconos/_sprite_grid.svg#grid-3"></use>
                                                    </svg>
                                                </button>
                                            </li>
                                            <li class="nav-item d-none d-xl-flex">
                                                <button class="nav-link active" data-grid="4">
                                                    <svg>
                                                        <use href="/iconos/_sprite_grid.svg#grid-4"></use>
                                                    </svg>
                                                </button>
                                            </li>
                                            <li class="nav-item d-none d-sm-flex">
                                                <button class="nav-link" data-grid="list">
                                                    <svg>
                                                        <use href="/iconos/_sprite_grid.svg#grid-list"></use>
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- Automóviles -->
                                <div class="product-tab-content">
                                    <div class="view-option row g-3 g-xl-4 ratio_asos row-cols-2 row-cols-sm-3 row-cols-xl-4 grid-section">
                                        <?php foreach ($automoviles as $automovil) : ?>
                                            <!-- Automóvil card -->
                                            <?= view('Publico/componentes/automovil', compact('automovil')) ?>
                                        <?php endforeach ?>
                                    </div>
                                </div>

                                <!-- Paginación -->
                                <?= $paginacion->links() ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Listado automóviles End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script src="<?= base_url('js/grid-style.js') ?>"></script>
<script src="<?= base_url('js/range-slider.js') ?>"></script>
<?= $this->endSection() ?>