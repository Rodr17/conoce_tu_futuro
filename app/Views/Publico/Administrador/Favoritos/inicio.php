<?= $this->extend('Publico/plantilla') ?>

<?= $this->section('titulo') ?>Mis favoritos<?= $this->endSection() ?>

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
                        <h1>Mis favoritos</h1>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="<?= base_url() ?>">Inicio</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li><a href="<?= base_url(route_to('mi_cuenta')) ?>">Mi cuenta</a></li>
                        <li>
                            <a href="javascript:void(0)"><i data-feather="chevron-right"></i></a>
                        </li>
                        <li class="current"><a>Mis favoritos</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Wishlist Section Start -->
    <section class="section-b-space wishlist-page">
        <div class="container-lg">
            <div class="row g-3 g-3 g-xxl-4 ratio_asos row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
                <?php foreach ($automoviles as $automovil) : ?>
                    <?= view('Publico/componentes/favorito-automovil', compact('automovil')) ?>
                <?php endforeach ?>
            </div>
        </div>
    </section>
    <!-- Wishlist Section End -->
</main>
<!-- Main End -->
<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const notificacion = document.querySelector(".addToWishlist");

        const btn_eliminar_favoritos = document.querySelectorAll(".eliminar-favoritos");
        
        btn_eliminar_favoritos.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();

                const config_request = {
                    method: 'DELETE',
                };

                fetch(`/mi-cuenta/favoritos/${btn.id}`, config_request)
                    .then(response => response.json())
                    .then(respuesta => {
                        if (respuesta.eliminado) {
                            // Imágen
                            notificacion.children[0].children[0].src = respuesta.imagen;

                            // Mostrar notificación de eliminación
                            notificacion.querySelector("div h5").innerText = "Eliminado de favoritos";

                            this.closest(".col").style.display = "none";

                            notificacion.classList.add("show");
                            setTimeout(() => {
                                notificacion.classList.remove("show");
                            }, 4000);
                        }
                    })
                    .catch(error => {
                        console.log("🚀 ~ error:", error);
                    });
            });
        });
    });
</script>
<?= $this->endSection() ?>