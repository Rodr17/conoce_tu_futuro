<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Editar <?= $modulo['nombre'] ?><?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Title -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Editar <?= $modulo['nombre'] ?></h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">

        <!-- Formulario -->
        <form class="grow" action="<?= base_url(route_to('actualizar_sistemas', $modulo['id'])) ?>" method="POST">
            <input type="hidden" name="_method" value="PUT">
            <?= csrf_field() ?>

            <div class="p-6 space-y-6">
                <h2 class="text-2xl text-slate-800 font-bold mb-5"><?= $modulo['nombre'] ?></h2>

                <!-- Campos -->
                <section>
                    <div class="text-sm"><?= $modulo['descripcion'] ?></div>

                    <!-- Alerta -->
                    <?php if (session('alerta') !== null) : ?>
                        <div class="<?= session('alerta')['tipo'] ?> mb-4" role="alert">
                            <span class="text-sm"><?= session('alerta')['mensaje'] ?></span>
                        </div>
                    <?php elseif (session('errors') !== null && !is_array(session('errors'))) : ?>
                        <?= session('errors') ?>
                    <?php endif ?>

                    <div class="grid gap-5 md:grid-cols-3 mt-5">
                        <?= $campos ?>
                    </div>
                </section>

            </div>

            <!-- Acciones -->
            <footer>
                <div class="flex flex-col px-6 py-5 border-t border-slate-200">
                    <div class="flex self-end">
                        <a href="<?= base_url(route_to('admin')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                        <button type="submit" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
                    </div>
                </div>
            </footer>

        </form>

    </div>
</div>

<?= $this->endSection() ?>

<?= $this->section('scripts') ?>

<script src="/js/inicializador.js"></script>
<script src="/js/principal.js"></script>

<?= $this->endSection() ?>