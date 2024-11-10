<div class="col">
    <div class="product-card product-wishlist">
        <div class="img-box">
            <a href="<?= base_url(route_to('automovil', $automovil['id_automovil'])) ?> " class="primary-img"><img class="img-fluid bg-img" src="<?= base_url($automovil['imagen']) ?>" alt="Imágen automóvil principal" /> </a>

            <!-- Delete Button -->
            <button class="delete-button"><i data-feather="x"></i></button>
        </div>
        <div class="content-wrap">
            <!-- Content Box -->
            <div class="content-box">
                <a href="<?= base_url(route_to('automovil', $automovil['id_automovil'])) ?>">
                    <p><?= $automovil['marca'] ?></p>
                    <h5><?= $automovil['modelo'] ?></h5>
                    <span><?= "$" . number_format($automovil['precio'], 0) ?></span>
                </a>
            </div>
            <div class="mov-to-bag">
                <a href="<?= base_url(route_to('eliminar_favoritos', $automovil['id'])) ?>" class="btn btn-outline btn-sm addtocart-btn">Eliminar de favoritos <i class="arrow"></i> </a>
            </div>
        </div>
    </div>
</div>