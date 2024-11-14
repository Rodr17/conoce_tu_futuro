<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Inicio<?= $this->endSection() ?>

<?= $this->section('contenido') ?>
<style>
    .home-slider-common div.bg-size {
        opacity: .8;
    }
</style>
<main class="main">
    <!-- Home Banner Section Start -->
    <section class="home-slider-common ratio_40 p-0">
        <div class="swiper home-slider">
            <div class="swiper-wrapper">
                <?php for ($i = 1; $i < 2; $i++) : ?>
                    <!-- Slide Start -->
                    <div class="swiper-slide">
                        <div class="banner">
                            <div>
                                <img class="bg-img img-fluid" src="https://cdn.buttercms.com/tAPLHnVReawEzk7YoDHw" alt="banner" />
                            </div>

                            <div class="content-box">
                                <h1 class="heading">
                                    Conoce <strong> tu</strong> <span> futuro</span> y encuentra el mejor <strong>automóvil</strong> para tus gustos y necesidades
                                </h1>
                                <p>Brindamos lo mejor a nuestros clientes y nos aseguramos de brindarte siempre el mejor servicio, la mejor experiencia y el mejor automóvil para ti.</p>
                                <a href="<?= base_url(route_to('automoviles')) ?>" class="btn-solid">Encontrar mi auto <i class="arrow"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Slide End -->
                <?php endfor ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </section>
    <!-- Home Banner Section End -->

    <!-- Top Product Section Start -->
    <section class="pb-0">
        <div class="container-lg">
            <div class="title-box">
                <h2 class="unique-heading">¿Por qué deberías de tener un auto por nosotros?</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <!-- <p>A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials.</p> -->
            </div>
            <div class="row gy-4 g-2 g-sm-3 g-xl-4">
                <div class="col-6 col-md-3 col-lg-3 span3 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="detail-card">
                        <div class="img-wrap">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>"><img class="img-fluid bg-img" src="/imagenes/1.jpg" alt="product" /></a>
                        </div>
                        <div class="content-box">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>">
                                <h3>Variedad de Opciones de Automóviles a su Alcance</h3>
                                <p>En nuestro sitio web, ofrecemos una amplia gama de automóviles para adaptarnos a diferentes gustos, necesidades y presupuestos. Desde autos compactos y económicos hasta modelos de lujo, contamos con vehículos de diferentes marcas y estilos para asegurar que encuentre el automóvil perfecto. Nuestro catálogo en línea está diseñado para ser fácil de navegar y ofrece información detallada de cada automóvil, permitiéndole tomar una decisión informada antes de realizar su compra.</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3 col-lg-3 span3 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="detail-card">
                        <div class="img-wrap">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>"><img class="img-fluid bg-img" src="/imagenes/2.jpg" alt="product" /></a>
                        </div>
                        <div class="content-box">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>">
                                <h3>Proceso de Compra Seguro y Confiable</h3>
                                <p>Sabemos lo importante que es la seguridad en una transacción en línea, por eso en nuestro sitio web, hemos implementado métodos de pago seguros y garantizamos la transparencia en cada paso del proceso de compra. Además, puede reservar su automóvil con un pequeño anticipo, lo que le permite apartarlo mientras termina de evaluar su compra. Nuestra plataforma le brinda total tranquilidad para que adquiera su automóvil con confianza y sin complicaciones.</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3 col-lg-3 span3 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="detail-card">
                        <div class="img-wrap">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>"><img class="img-fluid bg-img" src="/imagenes/3.jpg" alt="product" /></a>
                        </div>
                        <div class="content-box">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>">
                                <h3>Experiencia Personalizada y Asesoría Especializada</h3>
                                <p>Nuestro equipo de expertos en automóviles está aquí para ayudarle a encontrar el modelo que mejor se adapte a sus necesidades y responder a todas sus preguntas. Sabemos que la compra de un automóvil es una decisión importante, y estamos dedicados a brindarle una experiencia de compra personalizada. Desde recomendaciones hasta detalles técnicos, estamos listos para apoyarle durante todo el proceso y asegurarnos de que haga la elección correcta.</p>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-md-3 col-lg-3 span3 wow fadeInUp" data-wow-delay="0.6s">
                    <div class="detail-card">
                        <div class="img-wrap">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>"><img class="img-fluid bg-img" src="/imagenes/4.jpg" alt="product" /></a>
                        </div>
                        <div class="content-box">
                            <a href="<?= base_url(route_to('acerca_de_nosotros')) ?>">
                                <h3>Ofertas y Planes de Financiamiento Flexibles</h3>
                                <p>Entendemos que adquirir un automóvil es una inversión significativa, por lo que ofrecemos planes de financiamiento y descuentos especiales que hacen que el proceso de compra sea más accesible para todos. Contamos con opciones que se ajustan a diferentes presupuestos, permitiéndole distribuir el costo en cómodas mensualidades. Nos esforzamos por ofrecer condiciones favorables para que pueda obtener el automóvil de sus sueños sin preocuparse por el costo inmediato.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Top Product Section End -->

    <!-- Just For You Section Start -->
    <div class="sub-banner section-t-space ratio_asos">
        <div class="sub-banner">
            <img class="bg-img img-fluid" src="https://cdn.buttercms.com/QwK48mXiRmeKjMiEYo4s" alt="banner" />

            <div class="content-box">
                <div class="heading-wrap">
                    <span class="span-1" style="color: #fff">Recién llegados</span>
                    <span class="span-2" style="color: #fff">SOLO </span>
                    <span class="span-3" style="color: #fff">PARA</span>
                    <span class="span-4" style="color: #00d0ff">TÍ</span>
                </div>
                <a href="<?= base_url(route_to('automoviles')) ?>" class="site-button">conocetufuturo.com/autos
                    <img class="pointer" src="/iconos/pointer.svg" alt="pointer" />
                </a>
            </div>
        </div>
    </div>
    <!-- Just For You Section End -->

    <!-- New Arrived Section Start -->
    <section class="pb-0 ratio_asos">
        <div class="container-lg">
            <div class="title-box">
                <h2 class="unique-heading">Recién llegados</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>Los mejores automóviles a tu medida y estilo, no esperes más y encuentra el tuyo.</p>
            </div>

            <div class="swiper product-slider">
                <div class="swiper-wrapper">
                    <?php foreach ($autos_recientes as $automovil) :
                        $automovil['es_nuevo'] = true ?>
                        <div class="swiper-slide">
                            <!-- Automóvil card -->
                            <?= view('Publico/componentes/automovil', compact('automovil')) ?>
                        </div>
                    <?php endforeach ?>
                </div>
            </div>
        </div>
    </section>
    <!-- New Arrived Section End -->

    <!-- Service Section start -->
    <section class="service-section">
        <div class="container-lg">
            <div class="row g-3 g-md-4 g-lg-0">
                <div class="col-6 col-lg-4">
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

                <div class="col-6 col-lg-4">
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

                <div class="col-12 col-lg-4">
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
<?= $this->endSection() ?>