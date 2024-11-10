<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Aviso de privacidad<?= $this->endSection() ?>

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
                        <h1>Aviso de privacidad</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Aviso de privacidad</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <section class="pb-0">
        <div class="container-lg">
            <div class="title-box mb-5">
                <p>ConduceTuFuturo – “Compra o vende, toma el control de tu camino” valora tu privacidad. Este Aviso de Privacidad detalla cómo recopilamos, usamos y protegemos tu información.</p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Información que Recopilamos</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Podemos recopilar información personal como:

                    Nombre completo, correo electrónico, teléfono, y datos de contacto.
                    Preferencias de los usuarios en relación con los automóviles.
                    Información financiera de empleados para gestionar estados financieros.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Uso de la Información</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    La información personal que recopilamos se utiliza para:

                    Proporcionar y personalizar la experiencia en la plataforma.
                    Facilitar el proceso de compra y venta de vehículos.
                    Permitir la gestión de inventarios y estados financieros por parte de empleados.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Seguridad de la Información</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Nos comprometemos a proteger tu información a través de medidas de seguridad avanzadas. Sin embargo, no garantizamos una seguridad absoluta, y cualquier transmisión de datos corre bajo tu responsabilidad.
                </p>
            </div>

            <div class="title-box">
                <h2 class="unique-heading">Compartición de Información</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    No compartimos tu información personal con terceros, salvo en los siguientes casos:

                    Cuando sea requerido por ley.
                    Para proteger los derechos o propiedad de "<span>Conoce tu futuro</span>".
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Derechos de los Usuarios</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Tienes derecho a:

                    Acceder, rectificar o eliminar tu información personal.
                    Limitar el uso de tus datos personales.
                    Para ejercer estos derechos, comunícate con nuestro equipo de soporte a través de <a class="nav" href="mailto:conducetufuturo@gmail.com"><span>conducetufuturo@gmail.com</span></a>.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Cambios en el Aviso de Privacidad</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Podemos actualizar este Aviso de Privacidad periódicamente. Cualquier cambio será notificado y publicado en nuestro sitio web.

                    Si tienes alguna pregunta o inquietud sobre estos términos o sobre la privacidad de tus datos, contáctanos mediante el icono de whatsapp.
                </p>
            </div>
        </div>
    </section>
</main>
<!-- Main End -->
<?= $this->endSection() ?>