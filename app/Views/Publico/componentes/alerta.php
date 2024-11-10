<?php if (session('alerta') !== null) : ?>
    <div class="alert <?= session('alerta')['tipo'] ?> alert-dismissible fade show" role="alert">
        <span class="text-sm"><?= session('alerta')['mensaje'] ?></span>
        <a type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></a>
    </div>
<?php elseif (session('errors') !== null && !is_array(session('errors'))) :
    session('errors') ?>
<?php endif ?>