<?= $this->extend(config('Auth')->views['layout']) ?>

<?= $this->section('titulo') ?><?= lang('Auth.useMagicLink') ?> <?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<div class="bg-white rounded-xl max-w-md mx-auto w-full px-8 py-8">

	<h2 class="text-2xl font-bold mb-6"><?= lang('Auth.useMagicLink') ?></h2>
	<!-- Form -->
	<form action="<?= url_to('magic-link') ?>" method="post">
		<?= csrf_field() ?>

		<div class="space-y-4">
			<!-- Correo -->
			<div>
				<label class="block text-sm font-medium mb-1" for="email">Correo electrónico <span class="text-rose-500">*</span></label>
				<input id="email" class="form-input w-full" type="email" name="email" autocomplete="email" placeholder="<?= lang('Auth.email') ?>"
                    value="<?= old('email', auth()->user()->email ?? null) ?>" required />
			</div>
		</div>

		<div class="flex items-center justify-between mt-6 sm-w-full">
			<div class="mr-1">
				<a class="text-sm underline hover:no-underline" href="<?= base_url() ?>"><?= lang('Auth.backToLogin') ?></a>
			</div>
			<button class="btn bg-blue-500 hover:bg-blue-600 text-white whitespace-nowrap"><?= lang('Auth.recoveryPassword') ?></button>
		</div>

		<!-- Alerta -->
		<?= view('Publico/componentes/alerta') ?>

	</form>
	<!-- Footer -->
	<div class="pt-5 mt-6 border-t"></div>

</div>

<?= $this->endSection() ?>

<?= $this->section('scripts') ?>

<script src="<?= base_url('js/principal.js')?>"></script>

<?= $this->endSection() ?>
