<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Editar versión<?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Editar versión</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">

        <!-- Panel -->
        <div class="grow">

            <!-- Formulario -->
            <form class="px-6 pb-6 border-b space-y-6" action="<?= base_url(route_to('actualizar_versiones', $version['id'])) ?>" method="POST" id="form-actualizar-version">
                <input type="hidden" name="_method" value="PUT">
                <?= csrf_field() ?>

                <h2 class="text-2xl text-slate-800 font-bold mb-5">Editar versión</h2>

                <!-- Alerta -->
                <?php if (session('alerta') !== null) : ?>
                    <div class="<?= session('alerta')['tipo'] ?> mb-4" role="alert">
                        <span class="text-sm"><?= session('alerta')['mensaje'] ?></span>
                    </div>
                <?php elseif (session('errors') !== null && !is_array(session('errors'))) : ?>
                    <?= session('errors') ?>
                <?php endif ?>

                <!-- Campos -->
                <section>
                    <div class="grid gap-5 md:grid-cols-3 mt-5">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_modelo">Modelo <span class="text-rose-500">*</span></label>
                            <?php if (!$modelos) : ?>
                                <small class="text-xs text-rose-500">
                                    Para agregar una versión debes tener modelos disponibles.
                                    <a href="<?= base_url(route_to('agregar_modelos')) ?>"><span class="text-blue-500">Agregar modelo</span></a>
                                </small>
                            <?php else : ?>
                                <select id="id_modelo" class="form-select w-full" name="id_modelo">
                                    <option value="">Seleccionar</option>
                                    <?php foreach ($modelos as $modelo) :
                                        $selected = old('id_modelo', $version['id_modelo']) == $modelo['id'] ? 'selected' : '' ?>
                                        <option value="<?= $modelo['id'] ?>" <?= $selected ?>><?= $modelo['nombre'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            <?php endif ?>
                            <?= validation_show_error('id_modelo') ?>
                        </div>
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="nombre">Nombre <span class="text-rose-500">*</span></label>
                            <input id="nombre" class="form-input w-full" type="text" name="nombre" value="<?= old('nombre', $version['nombre']) ?>">
                            <?= validation_show_error('nombre') ?>
                        </div>
                    </div>
                </section>
            </form>

            <!-- Acciones -->
            <footer>
                <div class="flex flex-col px-6 py-5 border-slate-200">
                    <div class="flex self-end">
                        <?php if ($usuario_actual->can('versiones.eliminar')) : ?>
                            <form action="<?= base_url(route_to('eliminar_versiones', $version['id'])) ?>" id="eliminar-version" method="POST">
                                <?= csrf_field() ?>
                                <input type="hidden" name="_method" value="DELETE">

                                <button type="submit" class="btn bg-rose-500 hover:bg-rose-600 text-white mr-3">Eliminar</button>
                            </form>
                        <?php endif ?>
                        <a href="<?= base_url(route_to('versiones')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                        <?php if ($usuario_actual->can('versiones.editar')) : ?>
                            <button type="submit" form="form-actualizar-version" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
                        <?php endif ?>
                    </div>
                </div>
            </footer>

        </div>

    </div>
</div>

<?= $this->endSection() ?>

<?= $this->section('scripts') ?>

<script src="/js/inicializador.js"></script>
<script>
    $(function () {
        $("#eliminar-version").submit(function (e) {
            e.preventDefault();

            if (!confirm(`¿Estás seguro de eliminar la version?`)) return;

            $(this)[0].submit();
        });
    });
</script>
<script src="/js/principal.js"></script>

<?= $this->endSection() ?>