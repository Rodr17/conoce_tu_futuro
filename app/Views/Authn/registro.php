<?= $this->extend(config('Auth')->views['layout']) ?>

<?= $this->section('titulo') ?><?= lang('Auth.register') ?> <?= $this->endSection() ?>

<?= $this->section('contenido') ?>
<!-- Main Start -->
<h5><?= lang('Auth.register') ?><span class="bg-theme-blue"></span></h5>
<p class="font-md content-color">¿Cómo puedo acceder a separar automóviles, hacer citas y ver mi historial?</p>

<!-- Alerta -->
<?= view('Publico/componentes/alerta') ?>

<form action="<?= url_to('registrarme') ?>" method="post" class="custom-form form-pill">
    <?= csrf_field() ?>
    
    <!-- Nombre -->
    <div class="input-box">
        <label for="nombre"><?= lang('Auth.name') ?> <span class="text-danger">*</span></label>
        <input class="form-control" type="text" name="nombre" id="nombre" inputmode="text" autocomplete="nombre" placeholder="<?= lang('Auth.name') ?>" value="<?= old('nombre') ?>" required />
        <?= validation_show_error('nombre') ?>
    </div>

    <!-- Apellidos -->
    <div class="input-box">
        <label for="apellidos"><?= lang('Auth.lastName') ?> <span class="text-danger">*</span></label>
        <input class="form-control" type="text" name="apellidos" id="apellidos" inputmode="text" autocomplete="apellidos" placeholder="<?= lang('Auth.lastName') ?>" value="<?= old('apellidos') ?>" required />
        <?= validation_show_error('apellidos') ?>
    </div>

    <!-- Correo -->
    <div class="input-box">
        <label for="email"><?= lang('Auth.email') ?> <span class="text-danger">*</span></label>
        <input class="form-control" type="email" name="email" id="email" inputmode="email" autocomplete="email" placeholder="<?= lang('Auth.email') ?>" value="<?= old('email') ?>" required />
        <?= validation_show_error('email') ?>
    </div>

    <!-- Contraseña -->
    <div class="input-box">
        <label for="password"><?= lang('Auth.password') ?> <span class="text-danger">*</span></label>
        <div class="icon-input">
            <input class="form-control" type="password" name="password" id="password" inputmode="password" autocomplete="new-password" placeholder="<?= lang('Auth.password') ?>" required />
            <img class="showHidePassword" src="/iconos/eye-1.svg" alt="eye" />
        </div>
        <?= validation_show_error('password') ?>
    </div>

    <!-- Confirmar contraseña -->
    <div class="input-box">
        <label for="password_confirm"><?= lang('Auth.passwordConfirm') ?> <span class="text-danger">*</span></label>
        <div class="icon-input">
            <input class="form-control" type="password" name="password_confirm" id="password_confirm" inputmode="password" autocomplete="new-password" placeholder="<?= lang('Auth.passwordConfirm') ?>" required />
            <img class="showHidePassword" src="/iconos/eye-1.svg" alt="eye" />
        </div>
        <?= validation_show_error('password_confirm') ?>
    </div>

    <button type="submit" class="btn-solid rounded-pill line-none theme-color"><?= lang('Auth.register') ?> <i class="arrow"></i></button>
    <a href="<?= base_url() ?>" class="btn-solid rounded-pill line-none btn-outline mt-3 d-flex justify-content-center">Inicio <i class="arrow"></i></a>
</form>

<span class="backto-link font-default content-color text-decoration-none"><?= lang('Auth.haveAccount') ?> <a class="text-decoration-underline theme-color" href="<?= base_url(route_to('login')) ?>"><?= lang('Auth.login') ?></a>
</span>

<!-- Main End -->

<?= $this->endSection() ?>