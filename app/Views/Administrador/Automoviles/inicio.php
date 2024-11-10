<?php use Codeigniter\I18n\Time ?>
<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Automóviles<?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Page header -->
<div class="sm:flex sm:justify-between sm:items-center mb-8">

	<!-- Left: Title -->
	<div class="mb-4 sm:mb-0">
		<h1 class="text-2xl md:text-3xl text-slate-800 font-bold">Listado de Automóviles</h1>
	</div>

	<!-- Acciones -->
	<div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

		<!-- Eliminar todos los registros -->
		<form class="table-items-action hidden" id="eliminar-automoviles" action="<?= base_url(route_to('eliminar_lotes_automoviles')) ?>" method="POST">
			<input type="hidden" name="_method" value="DELETE">
		    <?= csrf_field() ?>
		    
			<div class="flex items-center">
				<div class="hidden xl:block text-sm italic mr-2 whitespace-nowrap"><span class="table-items-count"></span> Automóviles seleccionados</div>
				<button type="submit" class="btn bg-white border-slate-200 hover:border-slate-300 text-rose-500">Eliminar</button>
			</div>
		</form>

		<!-- Buscador -->
		<form class="relative" action="<?= base_url(route_to('automoviles_admin')) ?>">
			<label for="buscar" class="sr-only">Buscar</label>
			<input id="buscar" class="form-input pl-9 bg-white" type="search" placeholder="Buscar por nombre" name="buscar" value="<?= $texto_busqueda ?? '' ?>">
			<button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
				<svg class="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path>
					<path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path>
				</svg>
			</button>
		</form>

		<a class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3" href="<?= base_url(route_to('agregar_automoviles')) ?>">
			<svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
				<path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
			</svg>
			<span class="hidden sm:block ml-2">Agregar automóvil</span>
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
		<h2 class="font-semibold text-slate-800">Todos los automóviles <span class="text-slate-400 font-medium"><?= count($automoviles) ?></span></h2>
	</header>
	<div x-data="handleSelect">

		<!-- Table -->
		<div class="overflow-x-auto">
			<table id="tabla_automoviles" class="table-auto w-full sortable">
				<!-- Table header -->
				<?php
					$puede_editar = $usuario_actual->can('automoviles.editar');
					$puede_eliminar = $usuario_actual->can('automoviles.eliminar');
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
							<div class="font-semibold text-left">ID</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Imágen</div>
						</th>
                        <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                            <div class="font-semibold text-left">Marca</div>
                        </th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Modelo</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Año</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Precio</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Estatus</div>
						</th>
						<th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
							<div class="font-semibold text-left">Fecha alta</div>
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
					<?php foreach($automoviles as $automovil) : ?>
						<!-- Row -->
						<tr class="item">
							<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
								<div class="flex items-center">
									<label class="inline-flex">
										<span class="sr-only">Select</span>
										<input class="table-item form-checkbox" name="automoviles[]" value="<?= $automovil['id'] ?>" type="checkbox" @click="uncheckParent" />
									</label>
								</div>
							</td>

							<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<a class="font-medium text-blue-500" href="<?= base_url(route_to('editar_automoviles', $automovil['id'])) ?>">#<?= $automovil['id'] ?></a>
							</td>
                            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<div class="text-left"><img src="<?= base_url($automovil['imagen']) ?>" class="rounded-full object-cover" alt="Imágen <?= $automovil['marca'] . " - " . $automovil['modelo'] ?>" style="width: 50px; height: 50px;"></div>
							</td>
							<td class="contenedor-titulo px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<a class="font-medium text-slate-800" href="<?= base_url(route_to('editar_automoviles', $automovil['id'])) ?>"><?= $automovil['marca'] ?></a>
							</td>
                            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<div class="text-left"><?= $automovil['modelo'] ?></div>
							</td>
                            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<div class="text-left"><?= $automovil['año'] ?></div>
							</td>
                            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<div class="text-left"><?= number_to_currency($automovil['precio'], "MXN", 'es_MX') ?></div>
							</td>
                            <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<div class="text-left"><?= $automovil['estatus'] ?></div>
							</td>
							<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
								<div class="text-left"><?= Time::parse($automovil['creado'])->toDateString() ?></div>
							</td>
							
							<?php if($puede_editar || $puede_eliminar) : ?>
								<td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
									<div class="flex">
										<?php if($puede_editar) : ?>
											<a class="text-slate-400 hover:text-slate-500 rounded-full" href="<?= base_url(route_to('editar_automoviles', $automovil['id'])) ?>">
												<span class="sr-only">Editar</span>
												<svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
													<path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z"></path>
												</svg>
											</a>
										<?php endif ?>
										<?php if($puede_eliminar) : ?>
											<form action="<?= base_url(route_to('eliminar_automoviles', $automovil['id'])) ?>" method="POST" class="eliminar-local">
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

<!-- Pagination -->
<div class="mt-8">
	<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
		<?= $paginacion->links() ?>
		<div class="text-sm text-slate-500 text-center sm:text-left">
			Mostrando <span class="font-medium text-slate-600"><?= count($automoviles) ?></span> a <span class="font-medium text-slate-600"><?= $paginacion->getPerPage() ?></span> de <span class="font-medium text-slate-600"><?= $paginacion->getTotal() ?></span> resultados
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
		$(".eliminar-automovil").submit(function (e) { 
			e.preventDefault();
			
			const automovil = $(this)
			.parents("td")
			.siblings(".contenedor-titulo")
			.children("a")
			.text();

			if(!confirm(`¿Estás seguro de eliminar el automóvil ${automovil}?`)) return;

			$(this)[0].submit();
		});
		
		$("#eliminar-automoviles").submit(function(e){
            e.preventDefault();
            
        	if(!confirm(`¿Estás seguro de eliminar todos los automoviles?`)) return;
            
            let automoviles = $("input[name='automoviles[]']:checked").map(function() { return parseInt($(this).val()) }).get();
    		
    		let datos = {
    			csrf_test_name : $('meta[name="X-CSRF-TOKEN"]').attr('content'),
    			_method : 'DELETE',
    			automoviles : automoviles
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