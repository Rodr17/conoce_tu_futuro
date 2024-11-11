<div class="col">
    <div class="product-card product-wishlist">
        <div class="img-box">
            <a href="<?= base_url(route_to('automovil', $automovil['id_automovil'])) ?> " class="primary-img"><img class="img-fluid bg-img" src="<?= base_url($automovil['imagen']) ?>" alt="Imágen automóvil principal" /> </a>

            <!-- Delete Button -->
            <button class="delete-button" data-id="<?= $automovil['id_automovil'] ?>"><i data-feather="x"></i></button>
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
                <a href="javascript:void(0)" class="btn btn-outline btn-sm eliminar-favoritos" id="<?= $automovil['id_automovil'] ?>">Eliminar de favoritos <i class="arrow"></i> </a>
            </div>
        </div>
    </div>
</div>