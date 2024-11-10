<?= $this->extend(config('Auth')->views['layout']) ?>

<?= $this->section('titulo') ?><?= lang('Auth.emailActivateTitle') ?> <?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<div class="bg-white rounded-xl max-w-md mx-auto w-full px-8 py-8">

	<h2 class="text-2xl font-bold mb-6"><?= lang('Auth.emailActivateTitle') ?></h2>
	<!-- Form -->
	<form action="<?= url_to('auth-action-verify') ?>" method="post">
		<?= csrf_field() ?>

		<div class="space-y-4">
			<!-- Código -->
			<div>
                <input id="email" class="form-input w-full" type="text" name="token" placeholder="000000" inputmode="numeric" pattern="[0-9]*"
                    autocomplete="one-time-code" value="<?= old('token') ?>" required>
                <label for="floatingTokenInput"><?= lang('Auth.token') ?></label>
			</div>
		</div>

		<div class="flex items-center justify-between mt-6 sm-w-full">
			<div class="mr-1">
				<a class="text-sm underline hover:no-underline" href="<?= url_to('magic-link') ?>">¿Olvidó su contraseña?</a>
			</div>
			<button class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3"><?= lang('Auth.send') ?></button>
		</div>

		<?php if (session('error')) : ?>
            <div class="alert alert-danger"><?= session('error') ?></div>
        <?php endif ?>

        <p><?= lang('Auth.emailActivateBody') ?></p>

	</form>
	<!-- Footer -->
	<div class="pt-5 mt-6 border-t"></div>

</div>

<?= $this->endSection() ?>

<?= $this->section('scripts') ?>

<script src="<?= base_url('js/principal.js')?>"></script>

<?= $this->endSection() ?>
