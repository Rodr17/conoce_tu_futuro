<?=$this->extend('Administrador/plantilla')?>

<?=$this->section('titulo')?>Agregar usuario<?=$this->endSection()?>

<?=$this->section('contenido')?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Agregar usuario</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
	<div class="flex flex-col md:flex-row md:-mr-px">

		<!-- Panel -->
		<div class="grow">

			<!-- Formulario -->
			<form class="px-6 pb-6 space-y-6" action="<?= base_url(route_to('crear_usuarios')) ?>" method="POST" id="crear-usuario">
				<?= csrf_field() ?>
				
				<h2 class="text-2xl text-slate-800 font-bold mb-5">Agregar perfil</h2>
				
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
						<div class="">
							<label class="block text-sm font-medium mb-1" for="apellidos">Apellidos <span class="text-rose-500"></span></label>
							<input id="apellidos" class="form-input w-full" type="text" name="apellidos" value="<?= old('apellidos') ?>">
							<?= validation_show_error('apellidos') ?>
						</div>
						<div class="">
							<label class="block text-sm font-medium mb-1" for="email">Correo <span class="text-rose-500">*</span></label>
							<input id="email" class="form-input w-full" type="text" name="email" value="<?= old('email') ?>">
							<?= validation_show_error('email') ?>
						</div>
						<div class="">
							<label class="block text-sm font-medium mb-1" for="telefono">Teléfono <span class="text-rose-500">*</span></label>
							<input id="telefono" class="form-input w-full" type="text" name="telefono" value="<?= old('telefono') ?>">
							<?= validation_show_error('telefono') ?>
						</div>
						<div class="">
							<label class="block text-sm font-medium mb-1" for="fecha_nacimiento">Fecha de nacimiento</label>
							<input id="fecha_nacimiento" class="input w-full input-bordered form-input" type="date" name="fecha_nacimiento" value="<?= old('fecha_nacimiento') ?>">
							<?= validation_show_error('fecha_nacimiento') ?>
						</div>

					</div>
				</section>

				<!-- Contraseña -->
				<section>
					<div class="grid gap-5 md:grid-cols-3 mt-5">
						<div class="">
							<h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Contraseña</h3>
							<div class="text-sm">Escribe una nueva contraseña y guarda los cambios <span class="text-rose-500">*</span></div>
							<div class="mt-5">
								<input id="password" class="form-input w-full" type="password" name="password" value="<?= old('password') ?>">
								<?= validation_show_error('password') ?>
							</div>
						</div>
						<?php if($es_administrador) : ?>
							<div class="">
								<h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Rol de acceso</h3>
								<?php if(!$roles) : ?>
									<small class="text-xs text-rose-500">
										Para agregar un usuario debes tener roles disponibles.
										<a href="<?= base_url(route_to('agregar_roles')) ?>"><span class="text-blue-500">Agregar rol</span></a>
									</small>                                    
								<?php else : ?>
									<div class="text-sm">Selecciona el rol de este usuario <span class="text-rose-500">*</span></div>
									<select id="rol" class="form-select w-full mt-5" name="rol">
										<option value="">Seleccionar</option>
										<?php foreach($roles as $rol) :
											$selected = old('rol') == $rol['id'] ? 'selected' : '' ?>
											<option value="<?= $rol['id'] ?>" <?= $selected ?>><?= $rol['title'] ?></option>
										<?php endforeach; ?>
									</select>
									<?= validation_show_error('rol') ?>
								<?php endif ?>
							</div>
						<?php endif ?>
					</div>
				</section>

				<!-- Estatus -->
				<section>
					<h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Estatus de usuario</h3>
					<div class="flex items-center mt-5" x-data="{ checked: <?= old('status', 'true') ?> }">
						<div class="form-switch">
							<input type="checkbox" id="status" class="sr-only" x-model="checked" name="status" value="<?= old('status', 'true') ?>">
							<label class="bg-slate-400" for="status">
								<span class="bg-white shadow-sm" aria-hidden="true"></span>
								<span class="sr-only">Enable smart sync</span>
							</label>
						</div>
						<div class="text-sm text-slate-400 italic ml-2" x-text="checked ? 'Activo' : 'Inactivo'"></div>
					</div>
				</section>
                
			</form>
            
            <!-- Acciones -->
            <footer>
                <div class="flex flex-col px-6 py-5 border-t border-slate-200">
                    <div class="flex self-end">
                        <a href="<?= base_url(route_to('usuarios')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                        <?php if($usuario_actual->can('usuarios.crear')) : ?>
                            <button type="submit" form="crear-usuario" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
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
<script src="/js/principal.js"></script>

<?=$this->endSection()?>