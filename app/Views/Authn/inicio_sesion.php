<?= $this->extend(config('Auth')->views['layout']) ?>

<?= $this->section('titulo') ?><?= lang('Auth.login') ?> <?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<h5><?= lang('Auth.login') ?> <span class="bg-theme-blue"></span></h5>
<p class="font-md content-color">¿Cómo puedo acceder a separar automóviles, hacer citas y ver mi historial?</p>

<!-- Alerta -->
<?= view('Publico/componentes/alerta') ?>

<form action="<?= url_to('iniciar-sesion') ?>" method="post" class="custom-form form-pill">
    <?= csrf_field() ?>
    <div class="input-box">
        <label for="email"><?= lang('Auth.email') ?> <span class="text-danger">*</span></label>
        <input class="form-control" type="email" name="email" id="email" inputmode="email" autocomplete="email" placeholder="<?= lang('Auth.email') ?>" value="<?= old('email') ?>" autofocus required/>
        <?= validation_show_error('email') ?>
    </div>

    <div class="input-box">
        <label for="password"><?= lang('Auth.password') ?> <span class="text-danger">*</span></label>
        <div class="icon-input">
            <input class="form-control" type="password" name="password" id="password" inputmode="text" autocomplete="current-password" placeholder="<?= lang('Auth.password') ?>" value="<?= old('password') ?>" required/>
            <img class="showHidePassword" src="/iconos/eye-1.svg" alt="eye" />
        </div>
        <?= validation_show_error('password') ?>
    </div>

    <button type="submit" class="btn-solid rounded-pill line-none"><?= lang('Auth.btnLogin') ?> <i class="arrow"></i></button>
    <a href="<?= base_url() ?>" class="btn-solid rounded-pill line-none btn-outline mt-3 d-flex justify-content-center">Inicio <i class="arrow"></i></a>
</form>

<span class="backto-link font-default content-color text-decoration-none">Si eres nuevo, <a class="text-decoration-underline theme-color" href="<?= base_url(route_to('registrar')) ?>"> crear una cuenta </a> </span>
<?= $this->endSection() ?>
