<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Editar usuario<?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Editar usuario</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">

        <!-- Panel -->
        <div class="grow">

            <!-- Formulario -->
            <form class="px-6 pb-6 border-b space-y-6" action="<?= base_url(route_to('actualizar_usuarios', $usuario->id)) ?>" method="POST" id="form-actualizar-usuario">
                <input type="hidden" name="_method" value="PUT">
                <?= csrf_field() ?>

                <h2 class="text-2xl text-slate-800 font-bold mb-5">Editar perfil</h2>

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
                            <label class="block text-sm font-medium mb-1" for="nombre">Nombre <span class="text-rose-500">*</span></label>
                            <input id="nombre" class="form-input w-full" type="text" name="nombre" value="<?= old('nombre', $usuario->nombre) ?>">
                            <?= validation_show_error('nombre') ?>
                        </div>
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="apellidos">Apellidos <span class="text-rose-500">*</span></label>
                            <input id="apellidos" class="form-input w-full" type="text" name="apellidos" value="<?= old('apellidos', $usuario->apellidos) ?>">
                            <?= validation_show_error('apellidos') ?>
                        </div>
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="email">Correo <span class="text-rose-500">*</span></label>
                            <input id="email" class="form-input w-full" type="text" name="email" value="<?= old('email', $usuario->email) ?>">
                            <?= validation_show_error('email') ?>
                        </div>
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="telefono">Teléfono <span class="text-rose-500">*</span></label>
                            <input id="telefono" class="form-input w-full" type="text" name="telefono" value="<?= old('telefono', $usuario->telefono) ?>">
                            <?= validation_show_error('telefono') ?>
                        </div>

                    </div>
                </section>

                <!-- Contraseña -->
                <section>
                    <div class="grid gap-5 md:grid-cols-3 mt-5">
                        <div class="">
                            <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Contraseña</h3>
                            <div class="text-sm">Escribe una nueva contraseña y guarda los cambios</div>
                            <div class="mt-5">
                                <input id="password" class="form-input w-full" type="password" name="password" value="<?= old('password') ?>">
                                <?= validation_show_error('password') ?>
                            </div>
                        </div>
                        <?php if ($es_administrador) : ?>
                            <div class="">
                                <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Rol de acceso</h3>
                                <div class="text-sm">Selecciona el rol de este usuario <span class="text-rose-500">*</span> (solo administradores)</div>
                                <?php $id_rol = model('Roles')->select('id')->where('nombre', $usuario->getGroups()[0])->first()['id'] ?? '' ?>
                                <select id="rol" class="form-select w-full mt-5" name="rol">
                                    <option value="">Seleccionar</option>
                                    <?php foreach ($roles as $rol) :
                                        $selected = old('rol', $id_rol) == $rol['id'] ? 'selected' : '' ?>
                                        <option value="<?= $rol['id'] ?>" <?= $selected ?>><?= $rol['title'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                                <?= validation_show_error('rol') ?>
                            </div>
                        <?php endif ?>
                    </div>
                </section>

                <!-- Estatus -->
                <section>
                    <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Estatus de usuario</h3>
                    <div class="flex items-center mt-5" x-data="{ checked: <?= old('status', $usuario->status) == 'banned' ? 'false' : 'true' ?> }">
                        <div class="form-switch">
                            <input type="checkbox" id="status" class="sr-only" x-model="checked" name="status" value="<?= old('status', $usuario->status) ?>">
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
                <div class="flex flex-col px-6 py-5 border-slate-200">
                    <div class="flex self-end">
                        <?php if (auth()->user()->can('usuarios.eliminar')) : ?>
                            <form action="<?= base_url(route_to('eliminar_usuarios', $usuario->id)) ?>" method="POST" id="eliminar-usuario">
                                <?= csrf_field() ?>
                                <input type="hidden" name="_method" value="DELETE">

                                <button type="submit" class="btn bg-rose-500 hover:bg-rose-600 text-white mr-3">Eliminar</button>
                            </form>
                        <?php endif ?>
                        <a href="<?= base_url(route_to('usuarios')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                        <?php if (auth()->user()->can('usuarios.editar')) : ?>
                            <button type="submit" form="form-actualizar-usuario" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
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
        $("#eliminar-usuario").submit(function (e) {
            e.preventDefault();

            if (!confirm(`¿Estás seguro de eliminar el usuario?`)) return;

            $(this)[0].submit();
        });
    });
</script>
<script src="/js/principal.js"></script>

<?= $this->endSection() ?>