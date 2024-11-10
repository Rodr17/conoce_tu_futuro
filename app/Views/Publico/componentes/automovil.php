<?php

$imagenes = model('AutomovilesImagenes')
->select('nombre')
->where('id_automovil', $automovil['id'])
->find();
?>

<div>
    <div class="product-card">
        <div class="img-box">
            <!-- Imágenes secundarias -->
            <?php if ($imagenes) : ?>
                <ul class="thumbnail-img">
                    <?php
                    $clase_active = 'active';

                    foreach ($imagenes as $imagen) : ?>
                        <li class="thumb <?= $clase_active ?>"><img src="<?= base_url($imagen['nombre']) ?>" alt="Miniatura" /></li>
                    <?php

                        $clase_active = '';
                    endforeach ?>
                </ul>
            <?php endif ?>

            <a href="<?= base_url(route_to('automovil', $automovil['id'])) ?>" class="primary-img"><img class="img-fluid bg-img" src="<?= base_url($automovil['imagen']) ?>" alt="Automóvil" /> </a>

            <!-- Option -->
            <ul class="option-wrap">
                <li>
                    <a href="javascript:void(0)" class="wishlist-btn" id="<?= $automovil['id'] ?>">
                        <i data-feather="heart"></i>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Content Box -->
        <div class="content-box">
            <a href="<?= base_url(route_to('automovil', $automovil['id'])) ?>">
                <p><?= $automovil['marca'] ?></p>
                <h5><?= $automovil['nombre'] ?></h5>
                <span><?= "$" . number_format($automovil['precio'], 0) ?></span>
                <p class="details truncate-3">
                    <?= $automovil['descripcion'] ?>
                </p>
            </a>
            <a href="<?= base_url(route_to('me_interesa', $automovil['id'])) ?>" class="btn btn-solid btn-sm mb-line addtocart-btn">Me interesa <i class="arrow"></i> </a>
        </div>
    </div>
</div>