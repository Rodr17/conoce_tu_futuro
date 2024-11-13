<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Proceso de separación<?= $this->endSection() ?>

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
                        <h1>Proceso de separación</h1>
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
                        <li><a href="<?= base_url(route_to('me_interesa', $automovil['id'])) ?>">Me interesa</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Separación</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Checkout Section Start -->
    <section class="about-section checkout shop-page">
        <div class="container-lg">
            <div class="row g-0 g-lg-4 g-xl-5 justify-content-start justify-content-md-center content-box">
                <h4 class="color-theme">¡Ya casi es tuyo!</h4>
                <!-- Automóvil -->
                <div class="col-12 col-md-10 col-xl-8">
                    <div class="product-tab-content mb-5">
                        <div class="list-section view-option row g-3 g-xl-4 ratio_asos">
                            <!-- Automóvil card -->
                            <?= view('Publico/componentes/automovil', compact('automovil')) ?>
                        </div>
                    </div>
                </div>
            </div>

            <form action="<?= base_url(route_to('crear_separaciones', $automovil['id'])) ?>" method="POST" id="pagar_separacion" class="row g-4 g-md-3 g-xxl-5">
                <?= csrf_field() ?>
                <input type="hidden" name="source_id" id="source_id" />

                <div class="col-md-7 col-lg-8 col-xl-9">
                    <div class="title-box2">
                        <h2 class="heading-2">Tarjeta de crédito o débito</h2>
                    </div>
                    
                    <!-- Alerta -->
                    <?= view('Publico/componentes/alerta') ?>

                    <!-- Payment Section Start -->
                    <div class="payment-section">
                        <div class="custom-form form-pill">
                            <div class="row g-3 g-md-4">
                                <div class="col-12">
                                    <div class="input-box">
                                        <label for="nombre">Nombre <span class="text-danger">*</span></label>
                                        <input class="form-control" type="text" name="nombre" id="nombre" required />
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="input-box">
                                        <label for="numero_tarjeta">Número de tarjeta <span class="text-danger">*</span></label>
                                        <input maxlength="16" class="form-control" type="number" name="numero_tarjeta" id="numero_tarjeta" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required />
                                    </div>
                                </div>

                                <div class="col-6 col-md-3">
                                    <div class="input-box">
                                        <label for="mes_expiracion">Mes expiración <span class="text-danger">*</span></label>
                                        <div class="icon-input">
                                            <input class="form-control" type="number" name="mes_expiracion" id="mes_expiracion" minlength="2" maxlength="2" max="12" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required />
                                            <i data-feather="calendar"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-3">
                                    <div class="input-box">
                                        <label for="año_expiracion">Año expiración <span class="text-danger">*</span></label>
                                        <div class="icon-input">
                                            <input class="form-control" type="number" name="año_expiracion" id="año_expiracion" minlength="2" maxlength="2" max="99" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required />
                                            <i data-feather="calendar"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="input-box">
                                        <label for="cvv">Código de seguridad (CVV2) <span class="text-danger">*</span></label>
                                        <input maxlength="4" class="form-control" type="number" name="cvv" id="cvv" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" required />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="checkboxes style-1">
                                        <input type="checkbox" id="terminos_y_condiciones">
                                        <label class="checkbox__checkmark"></label>
                                        <span class="d-block checkbox__body">Hé leído y acepto los <a target="_blank" href="<?= base_url(route_to('terminos_y_condiciones')) ?>" class="color-theme">términos y condiciones</a> <span class="text-danger">*</span></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Payment Section End -->
                </div>

                <div class="col-md-5 col-lg-4 col-xl-3">
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
                                    <div class="row g-3 mt-2">
                                        <div class="col-6 col-md-12">
                                            <button type="submit" class="btn-solid checkout-btn">Pagar <i class="arrow"></i></button>
                                        </div>
                                        <div class="col-6 col-md-12">
                                            <a href="<?= base_url(route_to('automoviles')) ?>" class="btn-outline w-100 justify-content-center checkout-btn">Regresar a autos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <!-- Checkout Section End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script type="text/javascript" src="https://js.openpay.mx/openpay.v1.min.js"></script>
<script type='text/javascript' src="https://js.openpay.mx/openpay-data.v1.min.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        OpenPay.setId('<?= $openpay_id ?>');
        OpenPay.setApiKey('<?= $openpay_llave_publica ?>');
        OpenPay.setSandboxMode(true);

        //Se genera el id de dispositivo
        OpenPay.deviceData.setup('pagar_separacion', 'device_session_id');
        const formulario = document.querySelector('#pagar_separacion');

        const token_valido = (respuesta) => {
            document.querySelector('#pagar_separacion #source_id').value = respuesta.data.id;

            document.querySelector('#pagar_separacion button[type="submit"]').setAttribute('disabled', '');

            formulario.submit();
        };

        const token_invalido = (respuesta) => {
            let contenido = '';

            contenido += 'Estatus del error: ' + respuesta.data.status + ' '
                + 'Error: ' + respuesta.message + ' '
                + 'Descripción: ' + respuesta.data.description + ' '
                + 'ID de la petición: ' + respuesta.data.request_id + ' ';

            alert('Fallo en la transacción: ' + contenido);
        };

        function crear_cargo() {
            let datos_tarjeta = new Object();

            datos_tarjeta.holder_name = document.querySelector('#nombre').value;
            if (!datos_tarjeta.holder_name.length) {
                return alert('Favor de ingresar el nombre completo del titular de la tarjeta');
            }

            datos_tarjeta.card_number = document.querySelector('#numero_tarjeta').value;
            if (isNaN(datos_tarjeta.card_number)) {
                return alert('Favor de ingresar su número de tarjeta');
            }

            datos_tarjeta.expiration_month = document.querySelector('#mes_expiracion').value;
            if (isNaN(datos_tarjeta.expiration_month)) {
                return alert('Favor de ingresar el mes expiración de tarjeta');
            }

            datos_tarjeta.expiration_year = document.querySelector('#año_expiracion').value;
            if (isNaN(datos_tarjeta.expiration_year)) {
                return alert('Favor de ingresar el año de expiración de tarjeta');
            }

            datos_tarjeta.cvv2 = document.querySelector('#cvv').value;

            if (isNaN(datos_tarjeta.cvv2)) {
                return alert('Favor de ingresar su codigo de seguridad (CVV) de la tarjeta');
            }

            else if (!OpenPay.card.validateCardNumber(datos_tarjeta.card_number)) {
                return alert('El número de tu tarjeta es incorrecto ¿puedes verificarlo? o intenta con otra');
            }

            else if (!OpenPay.card.validateExpiry(datos_tarjeta.expiration_month, datos_tarjeta.expiration_year)) {
                return alert('Tu tarjeta expiró, ¿Puedes verificarlo? o intenta con otra');
            }

            else if (!OpenPay.card.validateCVC(datos_tarjeta.cvv2, datos_tarjeta.card_number)) {
                return alert('El código de seguridad es incorrecto ¿Puedes verificarlo?');
            }

            OpenPay.token.create(datos_tarjeta, token_valido, token_invalido);
        }

        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            if (!document.querySelector('#terminos_y_condiciones').checked) {
                return alert('Acepta términos y condiciones primero');
            }

            crear_cargo();
        });
    });
</script>
<?= $this->endSection() ?>