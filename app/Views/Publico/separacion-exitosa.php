<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Proceso de separación<?= $this->endSection() ?>

<?= $this->section('contenido') ?>
<!-- Main Start -->
<main class="main">
    <!-- Top Section Start -->
    <section class="p-0">
        <div class="success-icon">
            <div class="img-wrap">
                <img class="success-img img-fluid" src="/iconos/order-success.svg" alt="vector" />
                <img class="check" src="/iconos/check.svg" alt="check" />
            </div>

            <div class="success-contain">
                <h1>Separación exitosa</h1>
                <h5 class="font-light">El pago fue procesado correctamente</h5>
                <h6 class="font-light">Transacción ID:<?= $id_transaccion ?> | Folio ID: ##</h6>
            </div>
        </div>
    </section>
    <!-- Top Section End -->

    <!-- Compare Section Start -->
    <section class="section-b-space order-success">
        <div class="container-lg">
            <div class="row g-3 g-md-4 cart">
                <div class="col-md-7 col-lg-7 col-xl-8">
                    <div class="list-section view-option row g-3 g-xl-4 ratio_asos">
                        <!-- Automóvil card -->
                        <?= view('Publico/componentes/automovil', compact('automovil')) ?>
                    </div>
                </div>

                <div class="col-md-5 col-lg-5 col-xl-4">
                    <div class="summery-box">
                        <div class="row g-3 g-lg-4">
                            <div class="col-12">
                                <div class="summery-wrap">
                                    <div class="cart-wrap grand-total-wrap">
                                        <div>
                                            <div class="order-summery-box">
                                                <h5 class="cart-title">Detalle de precios</h5>
                                                <ul class="order-summery">
                                                    <li>
                                                        <span>Subtotal</span>
                                                        <span><?= $subtotal ?></span>
                                                    </li>

                                                    <li>
                                                        <span>IVA (16%)</span>
                                                        <span><?= $iva ?></span>
                                                    </li>

                                                    <li class="pb-0">
                                                        <span>Total</span>
                                                        <span><?= $total ?></span>
                                                    </li>
                                                </ul>
                                            </div>
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
    <!-- Compare Section End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>