<?=$this->extend('Administrador/plantilla')?>

<?=$this->section('titulo')?>Agregar marca<?=$this->endSection()?>

<?=$this->section('contenido')?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Agregar marca</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
	<div class="flex flex-col md:flex-row md:-mr-px">

		<!-- Panel -->
		<div class="grow">

			<!-- Formulario -->
			<form class="px-6 space-y-6" action="<?= base_url(route_to('crear_marcas')) ?>" method="POST">
				<?= csrf_field() ?>
				
				<h2 class="text-2xl text-slate-800 font-bold mb-5">Agregar marca</h2>

                <!-- Alerta -->
				<?php if (session('alerta') !== null): ?>
					<div class="<?=session('alerta')['tipo']?>" role="alert">
						<span class="text-sm"><?=session('alerta')['mensaje']?></span>
					</div>
				<?php elseif (session('errors') !== null && !is_array(session('errors'))): ?>
					<?= session('errors') ?>
				<?php endif?>

				<!-- Campos -->
				<section>
					<div class="grid gap-5 md:grid-cols-3 mt-5">
						<div class="">
							<label class="block text-sm font-medium mb-1" for="nombre">Nombre <span class="text-rose-500">*</span></label>
							<input id="nombre" class="form-input w-full" type="text" name="nombre" value="<?= old('nombre') ?>">
							<?= validation_show_error('nombre') ?>
						</div>
					</div>
				</section>

				<!-- Acciones -->
				<footer>
					<div class="flex flex-col px-6 py-5 border-t border-slate-200">
						<div class="flex self-end">
							<a href="<?= base_url(route_to('marcas')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                            <?php if($usuario_actual->can('marcas.crear')) : ?>
                                <button type="submit" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
                            <?php endif ?>
						</div>
					</div>
				</footer>
			</form>

		</div>

	</div>
</div>

<?=$this->endSection()?>

<?=$this->section('scripts')?>

<script src="/js/inicializador.js"></script>
<script src="/js/principal.js"></script>

<?=$this->endSection()?>