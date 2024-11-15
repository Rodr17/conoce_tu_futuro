<?php use Codeigniter\I18n\Time ?>
<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Usuarios<?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Page header -->
<div class="sm:flex sm:justify-between sm:items-center mb-8">

	<!-- Left: Title -->
	<div class="mb-4 sm:mb-0">
		<h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Listado de usuarios</h1>
	</div>

	<!-- Right: Actions -->
	<div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

		<!-- Eliminar todos los registros -->
		<form class="table-items-action hidden" id="eliminar-usuario" action="<?= base_url(route_to('eliminar_lotes_usuarios')) ?>" method="POST">
			<input type="hidden" name="_method" value="DELETE">
			<?= csrf_field() ?>
			
			<div class="flex items-center">
				<div class="hidden xl:block text-sm italic mr-2 whitespace-nowrap"><span class="table-items-count"></span> usuarios seleccionados</div>
				<button type="submit" class="btn bg-white border-slate-200 hover:border-slate-300 text-rose-500">Eliminar</button>
			</div>
		</form>

		<!-- Buscador -->
		<form class="relative" action="<?= base_url(route_to('usuarios')) ?>">
			<label for="buscar" class="sr-only">Buscar</label>
			<input id="buscar" class="form-input pl-9 bg-white" type="search" placeholder="Buscar por nombre, correo" name="buscar" value="<?= $texto_busqueda ?? '' ?>">
			<button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
				<svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
					<path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path>
				</svg>
			</button>
		</form>

		<!-- Estatus Dropdown -->
		<div class="relative" x-data="{ open: false, selected: <?= $seleccion[$estatus] ?? 0 ?> }">
			<button class="btn justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600" aria-label="Select date range" aria-haspopup="true" @click.prevent="open = !open" :aria-expanded="open">
				<span class="flex items-center">
					<svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<g stroke-linecap="square" stroke-width="2" fill="none" stroke="#94A3B8" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10">
							<circle cx="8" cy="12" r="3" stroke="#94A3B8"></circle>
							<path d="M8,5h8a7,7,0,0,1,7,7h0a7,7,0,0,1-7,7H8a7,7,0,0,1-7-7H1A7,7,0,0,1,8,5Z"></path>
						</g>
					</svg>
					<span x-text="$refs.options.children[selected].children[1].innerHTML"></span>
				</span>
				<svg class="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
					<path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
				</svg>
			</button>
			<div class="z-10 absolute top-full right-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1" @click.outside="open = false" @keydown.escape.window="open = false" x-show="open" x-transition:enter="transition ease-out duration-100 transform"
				x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-out duration-100" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-cloak>
				<div class="font-medium text-sm text-slate-600" x-ref="options">
					<a href="<?= base_url(route_to('usuarios')) ?>" tabindex="0" class="flex items-center w-full hover:bg-slate-50 hover/20 py-1 px-3 cursor-pointer" :class="selected === 0 && 'text-blue-500'" @click="selected = 0;open = false" @focus="open = true" @focusout="open = false">
						<svg class="shrink-0 mr-2 fill-current text-blue-500" :class="selected !== 0 && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
							<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
						</svg>
						<span>Todos</span>
					</a>
					<a href="<?= base_url(route_to('usuarios') . '?estatus=1') ?>" tabindex="0" class="flex items-center w-full hover:bg-slate-50 hover/20 py-1 px-3 cursor-pointer" :class="selected === 1 && 'text-blue-500'" @click="selected = 1;open = false" @focus="open = true" @focusout="open = false">
						<svg class="shrink-0 mr-2 fill-current text-blue-500" :class="selected !== 1 && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
							<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
						</svg>
						<span>Activos</span>
					</a>
					<a href="<?= base_url(route_to('usuarios') . '?estatus=0') ?>" tabindex="0" class="flex items-center w-full hover:bg-slate-50 hover/20 py-1 px-3 cursor-pointer" :class="selected === 2 && 'text-blue-500'" @click="selected = 2;open = false" @focus="open = true" @focusout="open = false">
						<svg class="shrink-0 mr-2 fill-current text-blue-500" :class="selected !== 2 && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
							<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
						</svg>
						<span>Inactivos</span>
					</a>
				</div>
			</div>
		</div>

		<!-- Roles Dropdown -->
		<div class="relative" x-data="{ open: false, selected: '<?= $grupo ?? 0 ?>' }">
			<button class="btn justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600" aria-label="Select date range" aria-haspopup="true" @click.prevent="open = !open" :aria-expanded="open">
				<span class="flex items-center">
					<svg class="w-4 h-4 shrink-0 fill-current text-slate-400 mr-2" viewBox="0 0 16 16">
						<path
							d="M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z">
						</path>
					</svg>
					<span x-text="$refs.options.children[selected].children[1].innerHTML"></span>
				</span>
				<svg class="shrink-0 ml-1 fill-current text-slate-400" width="11" height="7" viewBox="0 0 11 7">
					<path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
				</svg>
			</button>
			<div class="z-10 absolute top-full right-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1" @click.outside="open = false" @keydown.escape.window="open = false" x-show="open" x-transition:enter="transition ease-out duration-100 transform"
				x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-out duration-100" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" x-cloak>
				<div class="font-medium text-sm text-slate-600" x-ref="options">
					<a href="<?= base_url(route_to('usuarios')) ?>" tabindex="0" class="flex items-center w-full hover:bg-slate-50 hover/20 py-1 px-3 cursor-pointer" :class="selected === '0' && 'text-blue-500'" @click="selected = '0';open = false" @focus="open = true" @focusout="open = false">
						<svg class="shrink-0 mr-2 fill-current text-blue-500" :class="selected !== '0' && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
							<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
						</svg>
						<span>Todos</span>
					</a>
					<?php foreach($roles as $rol) : ?>
						<a href="<?= base_url(route_to('usuarios') . "?rol={$rol['nombre']}") ?>" tabindex="0" class="flex items-center w-full hover:bg-slate-50 hover/20 py-1 px-3 cursor-pointer" :class="selected === '<?= $rol['nombre'] ?>' && 'text-blue-500'" @click="selected = '<?= $rol['nombre'] ?>';open = false" @focus="open = true" @focusout="open = false">
							<svg class="shrink-0 mr-2 fill-current text-blue-500" :class="selected !== '<?= $rol['nombre'] ?>' && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
								<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
							</svg>
							<span><?= $rol['title'] ?></span>
						</a>
					<?php endforeach ?>
				</div>
			</div>
		</div>

		<a class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3" href="<?= base_url(route_to('agregar_usuarios')) ?>">
			<svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
				<path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
			</svg>
			<span class="hidden sm:block ml-2">Agregar usuario</span>
		</a>
	</div>

</div>

<!-- Alerta -->
<?php if (session('alerta') !== null): ?>
	<div class="<?=session('alerta')['tipo']?> mb-4" role="alert">
		<span class="text-sm"><?=session('alerta')['mensaje']?></span>
	</div>
<?php elseif (session('errors') !== null && !is_array(session('errors'))): ?>
	<?=session('errors')?>
<?php endif?>

<!-- Table -->
<div class="bg-white shadow-lg rounded-sm border border-slate-200">
	<header class="px-5 py-4">
		<h2 class="font-semibold text-slate-800">Todos los usuarios <span class="text-slate-400 font-medium"><?= count($usuarios) ?></span></h2>
	</header>
	<div x-data="handleSelect">

		<!-- Table -->
		<div class="overflow-x-auto">
			<table id="tabla_usuarios" class="table-auto w-full sortable">
				<!-- Table header -->
				<?php
					$puede_editar = $usuario_actual->can('usuarios.editar');
					$puede_eliminar = $usuario_actual->can('usuarios.eliminar');
				?>
				<thead class="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
					<tr>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
							<div class="flex items-center">
								<label class="inline-flex">
									<span class="sr-only">Seleccionar todos</span>
									<input id="parent-checkbox" class="form-checkbox" type="checkbox" @click="toggleAll" />
								</label>
							</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Nombre</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Correo</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Rol</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Fecha alta</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Estatus</div>
						</th>
						<?php if($puede_editar || $puede_eliminar) : ?>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<span class="sr-only">Menú</span>
						</th>
						<?php endif ?>
					</tr>
				</thead>
				<!-- Table body -->
				<tbody class="text-sm divide-y divide-slate-200">
					<?php foreach($usuarios as $usuario) : ?>
					<!-- Row -->
					<tr class="item">
						<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
							<div class="flex items-center">
								<label class="inline-flex">
									<span class="sr-only">Select</span>
									<input class="table-item form-checkbox" name="usuarios[]" value="<?= $usuario->user_id ?>" type="checkbox" @click="uncheckParent" />
								</label>
							</div>
						</td>
						<td class="contenedor-titulo px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<a class="font-medium text-slate-800" href="<?= base_url(route_to('editar_usuarios', $usuario->user_id)) ?>"><?= $usuario->nombre ?></a>
						</td>
						<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="text-left"><?= $usuario->secret ?></div>
						</td>
						<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="text-left"><?= filtrar_rol_titulo($roles, $usuario->group) ?></div>
						</td>
						<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="text-left"><?= Time::parse($usuario->created_at)->toDateString() ?></div>
						</td>
						<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<?php if(!$usuario->isBanned()) : ?>
								<div class="inline-flex font-medium bg-blue-500 text-white rounded-full text-center px-2.5 py-0.5">Activo</div>
							<?php else : ?>
								<div class="inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-0.5">Inactivo</div>
							<?php endif ?>
						</td>
						
						<?php if($puede_editar || $puede_eliminar) : ?>
						<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
							<div class="flex">
								<?php if($puede_editar) : ?>
									<a class="text-slate-400 hover:text-slate-500 rounded-full" href="<?= base_url(route_to('editar_usuarios', $usuario->user_id)) ?>">
										<span class="sr-only">Editar</span>
										<svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
											<path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z"></path>
										</svg>
									</a>
								<?php endif ?>
								<?php if($puede_eliminar) : ?>
									<form action="<?= base_url(route_to('eliminar_usuarios', $usuario->user_id)) ?>" method="POST" class="eliminar-usuario">
										<?= csrf_field() ?>
										<input type="hidden" name="_method" value="DELETE">
										
										<button class="text-rose-500 hover:text-rose-600 rounded-full" type="submit">
											<span class="sr-only">Eliminar</span>
											<svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
												<path d="M13 15h2v6h-2zM17 15h2v6h-2z"></path>
												<path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z"></path>
											</svg>
										</button>
									</form>
								<?php endif ?>
							</div>
						</td>
						<?php endif ?>
					</tr>
					<?php endforeach ?>
				</tbody>
			</table>

		</div>
	</div>
</div>

<!-- Paginación -->
<div class="mt-8">
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
		<?= $paginacion->links() ?>
		<div class="text-sm text-slate-500 text-center sm:text-left">
			Mostrando <span class="font-medium text-slate-600"><?= count($usuarios) ?></span> a <span class="font-medium text-slate-600"><?= $paginacion->getPerPage() ?></span> de <span class="font-medium text-slate-600"><?= $paginacion->getTotal() ?></span> resultados
		</div>
	</div>
</div>

<?=$this->endSection()?>

<?=$this->section('scripts')?>

<script src="/js/inicializador.js"></script>
<script>
	// A basic demo function to handle "select all" functionality
	document.addEventListener('alpine:init', () => {
		Alpine.data('handleSelect', () => ({
			selectall: false,
			selectAction() {
				countEl = document.querySelector('.table-items-action');
				if (!countEl) return;
				checkboxes = document.querySelectorAll('input.table-item:checked');
				document.querySelector('.table-items-count').innerHTML = checkboxes.length;
				if (checkboxes.length > 0) {
					countEl.classList.remove('hidden');
				} else {
					countEl.classList.add('hidden');
				}
			},
			toggleAll() {
				this.selectall = !this.selectall;
				checkboxes = document.querySelectorAll('input.table-item');
				[...checkboxes].map((el) => {
					el.checked = this.selectall;
				});
				this.selectAction();
			},
			uncheckParent() {
				this.selectall = false;
				document.getElementById('parent-checkbox').checked = false;
				this.selectAction();
			}
		}));
	});

	$(function () {
		$(".eliminar-usuario").submit(function (e) { 
			e.preventDefault();
			
			const usuario = $(this)
			.parents("td")
			.siblings(".contenedor-titulo")
			.children("a")
			.text();

			if(!confirm(`¿Estás seguro de eliminar el usuario ${usuario}?`)) return;

			$(this)[0].submit();
		});
		
		$("#eliminar-usuarios").submit(function(e){
			e.preventDefault();
			
			if(!confirm(`¿Estás seguro de eliminar todos los usuarios?`)) return;
			
			let usuarios = $("input[name='usuarios[]']:checked").map(function() { return parseInt($(this).val()) }).get();
			
			let datos = {
				csrf_test_name : $('meta[name="X-CSRF-TOKEN"]').attr('content'),
				_method : 'DELETE',
				usuarios : usuarios
			}
			
			const url = e.target.attributes.action.value
			
			$.post(url, datos)
			.done(() => { return location.reload() })
			.fail((error) => { return console.log(error.responseJSON.message) });
		});
	});
</script>
<script src="/js/principal.js"></script>

<?=$this->endSection()?>