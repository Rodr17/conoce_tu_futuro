<?=$this->extend('Administrador/plantilla')?>

<?=$this->section('titulo')?>Editar modelo<?=$this->endSection()?>

<?=$this->section('contenido')?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Editar modelo</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
	<div class="flex flex-col md:flex-row md:-mr-px">

		<!-- Panel -->
		<div class="grow">

			<!-- Formulario -->
			<form class="px-6 pb-6 border-b space-y-6" action="<?= base_url(route_to('actualizar_modelos', $modelo['id'])) ?>" method="POST" id="form-actualizar-modelo">
				<input type="hidden" name="_method" value="PUT">
				<?= csrf_field() ?>

				<h2 class="text-2xl text-slate-800 font-bold mb-5">Editar modelo</h2>

				<!-- Alerta -->
				<?php if (session('alerta') !== null): ?>
					<div class="<?=session('alerta')['tipo']?> mb-4" role="alert">
						<span class="text-sm"><?=session('alerta')['mensaje']?></span>
					</div>
				<?php elseif (session('errors') !== null && !is_array(session('errors'))): ?>
					<?=session('errors')?>
				<?php endif?>
				
				<!-- Campos -->
				<section>
					<div class="grid gap-5 md:grid-cols-3 mt-5">
                    <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_marca">Marca <span class="text-rose-500">*</span></label>
                            <?php if (!$marcas) : ?>
                                <small class="text-xs text-rose-500">
                                    Para agregar un modelo debes tener marcas disponibles.
                                    <a href="<?= base_url(route_to('agregar_marcas')) ?>"><span class="text-blue-500">Agregar marca</span></a>
                                </small>
                            <?php else : ?>
                                <select id="id_marca" class="form-select w-full" name="id_marca">
                                    <option value="">Seleccionar</option>
                                    <?php foreach ($marcas as $marca) :
                                        $selected = old('id_marca', $modelo['id_marca']) == $marca['id'] ? 'selected' : '' ?>
                                        <option value="<?= $marca['id'] ?>" <?= $selected ?>><?= $marca['nombre'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            <?php endif ?>
                            <?= validation_show_error('id_marca') ?>
                        </div>
						<div class="">
							<label class="block text-sm font-medium mb-1" for="nombre">Nombre <span class="text-rose-500">*</span></label>
							<input id="nombre" class="form-input w-full" type="text" name="nombre" value="<?= old('nombre', $modelo['nombre']) ?>">
							<?= validation_show_error('nombre') ?>
						</div>
					</div>
				</section>
			</form>

			<!-- Acciones -->
			<footer>
				<div class="flex flex-col px-6 py-5 border-slate-200">
					<div class="flex self-end">
						<?php if($usuario_actual->can('modelos.eliminar')) : ?>
							<form action="<?= base_url(route_to('eliminar_modelos', $modelo['id'])) ?>" id="eliminar-modelo" method="POST">
                                <?= csrf_field() ?>
								<input type="hidden" name="_method" value="DELETE">

								<button type="submit" class="btn bg-rose-500 hover:bg-rose-600 text-white mr-3">Eliminar</button>
							</form>
						<?php endif ?>
						<a href="<?= base_url(route_to('modelos')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                        <?php if($usuario_actual->can('modelos.editar')) : ?>
						    <button type="submit" form="form-actualizar-modelo" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
                        <?php endif ?>
					</div>
				</div>
			</footer>

		</div>

	</div>
</div>

<?=$this->endSection()?>

<?=$this->section('scripts')?>

<script src="/js/inicializador.js"></script>
<script>
	$(function () {
		$("#eliminar-modelo").submit(function (e) { 
			e.preventDefault();

			if(!confirm(`¿Estás seguro de eliminar la modelo?`)) return;

			$(this)[0].submit();
		});
	});
</script>
<script src="/js/principal.js"></script>

<?=$this->endSection()?>