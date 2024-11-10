<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Términos y condiciones<?= $this->endSection() ?>

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
                        <h1>Términos y condiciones</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Términos y condiciones</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <section class="pb-0">
        <div class="container-lg">
            <div class="title-box mb-5">
                <h2 class="unique-heading">Bienvenido a ConduceTuFuturo – “Compra o vende, toma el control de tu camino”</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>Al utilizar este sitio web y nuestro sistema de compra y venta de automóviles, aceptas los términos y condiciones que se detallan a continuación. Si no estás de acuerdo con estos términos, te pedimos que no utilices el sitio.</p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Descripción del Servicio</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Nuestro sistema operativo ofrece una plataforma para la compra y venta de automóviles. Los usuarios pueden seleccionar si acceden como usuarios o empleados:

                    Usuarios: Pueden especificar sus necesidades y preferencias para encontrar vehículos que se ajusten a sus requerimientos. El sistema muestra una vista previa del automóvil seleccionado y permite ver detalles sobre la compra, opciones de pago, entrega y un ticket de confirmación con los detalles de la transacción.
                    
                    Empleados: Tienen acceso a estados financieros de ventas (semanales, mensuales y anuales), gestión de inventarios, modificación de descripciones y precios de automóviles. También pueden visualizar y actualizar la información en tiempo real.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Registro y Cuenta</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Para utilizar el sistema, los usuarios deberán registrarse y proporcionar información precisa y completa. Los empleados deben estar debidamente autorizados para acceder a las secciones especiales del sistema. Al registrarse, aceptas mantener la confidencialidad de tus credenciales y ser responsable de todas las actividades realizadas bajo tu cuenta.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Responsabilidades de los Usuarios y Empleados</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Usuarios: Se comprometen a proporcionar especificaciones honestas y precisas al buscar vehículos.
                    
                    Empleados: Tienen la responsabilidad de gestionar y actualizar la información de los vehículos y estados financieros de manera precisa. También deben mantener la confidencialidad de la información sensible.
                </p>
            </div>

            <div class="title-box">
                <h2 class="unique-heading">Política de Pagos</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Todas las transacciones realizadas en nuestra plataforma están sujetas a verificación. Los usuarios deberán elegir entre los métodos de pago disponibles y seguir las indicaciones para completar el proceso. La empresa no se hace responsable de cualquier transacción no autorizada o fraudulenta que ocurra fuera de la plataforma.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Modificaciones de los Términos</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    Nos reservamos el derecho a modificar estos Términos y Condiciones en cualquier momento. Notificaremos a los usuarios y empleados sobre cualquier cambio relevante, y la versión actualizada se publicará en nuestro sitio web.
                </p>
            </div>

            <div class="title-box mb-5">
                <h2 class="unique-heading">Limitación de Responsabilidad</h2>
                <span class="title-divider1"><span class="squre"></span><span class="squre"></span></span>
                <p>
                    No nos hacemos responsables de errores en la información proporcionada por los usuarios o empleados, ni de problemas técnicos que puedan afectar la operatividad del sistema. La compra de vehículos es responsabilidad del usuario, quien debe asegurarse de verificar todos los detalles antes de completar la transacción.
                </p>
            </div>
        </div>
    </section>
</main>
<!-- Main End -->
<?= $this->endSection() ?>