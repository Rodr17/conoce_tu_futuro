<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Editar autómovil<?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Editar autómovil</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">

        <!-- Panel -->
        <div class="grow">

            <!-- Formulario -->
            <form class="px-6 pb-6 border-b space-y-6" action="<?= base_url(route_to('actualizar_automoviles', $automovil['id'])) ?>" method="POST" id="form-actualizar-automovil" enctype="multipart/form-data">
                <input type="hidden" name="_method" value="PUT">
                <?= csrf_field() ?>

                <h2 class="text-2xl text-slate-800 font-bold mb-5">Editar auto</h2>

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
                        <?php if ($es_administrador) : ?>
                            <div class="">
                                <label class="block text-sm font-medium mb-1" for="id_usuario">Vendedor <span class="text-rose-500">*</span></label>
                                <?php if (!$vendedores) : ?>
                                    <small class="text-xs text-rose-500">
                                        Para agregar un automóvil debes tener usuarios vendedores disponibles.
                                        <a href="<?= base_url(route_to('agregar_marcas')) ?>"><span class="text-blue-500">Agregar rol (Vendedor)</span></a>>
                                    </small>
                                <?php else : ?>
                                    <select id="id_usuario" class="form-select w-full" name="id_usuario">
                                        <option value="">Seleccionar</option>
                                        <?php foreach ($vendedores as $vendedor) :
                                            $selected = old('id_usuario', $automovil['id_usuario']) == $vendedor->id ? 'selected' : '' ?>
                                            <option value="<?= $vendedor->id ?>" <?= $selected ?>><?= $vendedor->nombre . " " . $vendedor->apellidos ?></option>
                                        <?php endforeach ?>
                                    </select>
                                <?php endif ?>
                                <?= validation_show_error('id_usuario') ?>
                            </div>
                        <?php endif ?>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_modelo">Marca y modelo <span class="text-rose-500">*</span></label>
                            <?php if (!$modelos) : ?>
                                <small class="text-xs text-rose-500">
                                    Para agregar un automóvil debes tener marcas con modelos disponibles.
                                    <a href="<?= base_url(route_to('agregar_marcas')) ?>"><span class="text-blue-500">Agregar marca</span></a> ó <a href="<?= base_url(route_to('agregar_modelos')) ?>"><span class="text-blue-500">Agregar modelo</span></a>
                                </small>
                            <?php else : ?>
                                <select id="id_modelo" class="form-select w-full" name="id_modelo">
                                    <option value="0">Seleccionar</option>
                                    <?php foreach ($modelos as $modelo) :
                                        $selected = old('id_modelo', $automovil['id_modelo']) == $modelo['id'] ? 'selected' : '' ?>
                                        <option value="<?= $modelo['id'] ?>" <?= $selected ?>><?= $modelo['nombre'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            <?php endif ?>
                            <?= validation_show_error('id_modelo') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_version">Versión</label>
                            <select id="id_version" class="form-select w-full" name="id_version">
                                <option value="">Seleccionar</option>
                                <?php if (isset($versiones)) : ?>
                                    <?php foreach ($versiones as $version) :
                                        $selected = old('id_version', $automovil['id_version']) == $version['id'] ? 'selected' : '' ?>
                                        <option value="<?= $version['id'] ?>" <?= $selected ?>><?= $version['nombre'] ?></option>
                                    <?php endforeach; ?>
                                <?php endif ?>
                            </select>
                            <?= validation_show_error('id_version') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_color">Color</label>
                            <select id="id_color" class="form-select w-full" name="id_color">
                                <option value="">Seleccionar</option>
                                <?php foreach ($colores as $color) :
                                    $selected = old('id_color', $automovil['id_color']) == $color['id'] ? 'selected' : '' ?>
                                    <option value="<?= $color['id'] ?>" <?= $selected ?>><?= $color['nombre'] ?></option>
                                <?php endforeach; ?>
                            </select>
                            <?= validation_show_error('id_color') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_transmision">Transmisión <span class="text-rose-500">*</span></label>
                            <?php if (!$transmisiones) : ?>
                                <small class="text-xs text-rose-500">
                                    Para agregar un automóvil debes tener transmisiones disponibles.
                                    <a href="<?= base_url(route_to('agregar_transmisiones')) ?>"><span class="text-blue-500">Agregar transmisión</span></a>
                                </small>
                            <?php else : ?>
                                <select id="id_transmision" class="form-select w-full" name="id_transmision">
                                    <option value="">Seleccionar</option>
                                    <?php foreach ($transmisiones as $transmision) :
                                        $selected = old('id_transmision', $automovil['id_transmision']) == $transmision['id'] ? 'selected' : '' ?>
                                        <option value="<?= $transmision['id'] ?>" <?= $selected ?>><?= $transmision['nombre'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            <?php endif ?>
                            <?= validation_show_error('id_transmision') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="motor">Motor <span class="text-rose-500">*</span></label>
                            <input id="motor" class="form-input w-full" type="text" name="motor" value="<?= old('motor', $automovil['motor']) ?>">
                            <?= validation_show_error('motor') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="id_tipo_de_combustible">Tipo de combustible <span class="text-rose-500">*</span></label>
                            <?php if (!$tipos_de_combustible) : ?>
                                <small class="text-xs text-rose-500">
                                    Para agregar un automóvil debes tener tipos de combustible disponibles.
                                    <a href="<?= base_url(route_to('agregar_tipos_de_combustible')) ?>"><span class="text-blue-500">Agregar tipo</span></a>
                                </small>
                            <?php else : ?>
                                <select id="id_tipo_de_combustible" class="form-select w-full" name="id_tipo_de_combustible">
                                    <option value="">Seleccionar</option>
                                    <?php foreach ($tipos_de_combustible as $tipo) :
                                        $selected = old('id_tipo_de_combustible', $automovil['id_tipo_de_combustible']) == $tipo['id'] ? 'selected' : '' ?>
                                        <option value="<?= $tipo['id'] ?>" <?= $selected ?>><?= $tipo['nombre'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            <?php endif ?>
                            <?= validation_show_error('id_tipo_de_combustible') ?>
                        </div>
                    </div>

                    <div class="grid gap-5 md:grid-cols-3 mt-8">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="año">Año <span class="text-rose-500">*</span></label>
                            <select id="año" class="form-select w-full" name="año">
                                <option value="">Seleccionar</option>
                                <?php for ($año = $año_maximo; $año >= $año_minimo; $año--) :
                                    $selected = old('año', $automovil['año']) == $año ? 'selected' : '' ?>
                                    <option value="<?= $año ?>" <?= $selected ?>><?= $año ?></option>
                                <?php endfor ?>
                            </select>
                            <?= validation_show_error('año') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="numero_de_puertas">Número de puertas <span class="text-rose-500">*</span></label>
                            <input id="numero_de_puertas" class="form-input w-full" type="number" name="numero_de_puertas" value="<?= old('numero_de_puertas', $automovil['numero_de_puertas']) ?>" min="1">
                            <?= validation_show_error('numero_de_puertas') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="precio">Precio <span class="text-rose-500">*</span></label>
                            <input id="precio" class="form-input w-full" type="number" name="precio" value="<?= old('precio', $automovil['precio']) ?>" min="20000">
                            <?= validation_show_error('precio') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="estatus">Estatus <span class="text-rose-500">*</span></label>
                            <select id="estatus" class="form-select w-full" name="estatus">
                                <option value="">Seleccionar</option>
                                <?php foreach ($estatus as $estado) :
                                    $selected = old('estatus', $automovil['estatus']) == $estado ? 'selected' : '' ?>
                                    <option value="<?= $estado ?>" <?= $selected ?>><?= $estado ?></option>
                                <?php endforeach; ?>
                            </select>
                            <?= validation_show_error('estatus') ?>
                        </div>
                    </div>

                    <!-- Imágenes -->
                    <div class="grid gap-5 md:grid-cols-2 mt-8">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="imagen">Imágen principal <span class="text-rose-500">*</span></label>
                            <label for="imagen" class="block cursor-pointer rounded bg-slate-100 border border-dashed border-slate-300 text-center px-5 py-8">
                                <?php if ($automovil['imagen']) : ?>
                                    <img src="<?= base_url($automovil['imagen']) ?>" class="mx-auto my-2 w-[200px] h-[100px] object-contain border-b pb-2" alt="Imágen automóvil principal">
                                <?php endif ?>
                                <svg class="inline-flex w-4 h-4 fill-slate-400 mb-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z"></path>
                                </svg>
                                <label for="imagen" class="block cursor-pointer text-sm text-slate-500 italic" id="imagen_texto"><?= $automovil['imagen'] ?: 'Imágen en jpg, png, etc.' ?></label>
                                <input class="sr-only" id="imagen" type="file" name="imagen" accept="image/*">
                                <?php if ($automovil['imagen']) : ?>
                                    <input type="hidden" name="imagen_actual" value="<?= $automovil['imagen'] ?>">
                                <?php endif ?>
                            </label>
                            <?= validation_show_error('imagen') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="imagenes">Imágenes</label>
                            <label for="imagenes" class="block cursor-pointer rounded bg-slate-100 border border-dashed border-slate-300 text-center px-5 py-8">
                                <?php if (isset($automovil['imagenes'])) : ?>
                                    <img src="<?= base_url($automovil['imagenes'][0]['nombre']) ?>" class="mx-auto my-2 w-[200px] h-[100px] object-contain border-b pb-2" alt="Imágen automóvil principal">
                                <?php endif ?>
                                <svg class="inline-flex w-4 h-4 fill-slate-400 mb-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z"></path>
                                </svg>
                                <label for="imagenes" class="block cursor-pointer text-sm text-slate-500 italic" id="imagenes_texto"><?= isset($automovil['imagenes']) ? $automovil['imagenes'][0]['nombre'] : 'Imágen en jpg, png, etc.' ?></label>
                                <input class="sr-only" id="imagenes" type="file" name="imagenes" accept="image/*" multiple>
                            </label>
                            <?= validation_show_error('imagenes') ?>
                        </div>
                    </div>

                    <div class="grid gap-5 md:grid-cols-1 mt-8">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="descripcion">Descripción <span class="text-rose-500">*</span></label>
                            <?= validation_show_error('descripcion') ?>
                            <textarea class="form-input w-full" rows="5" name="descripcion" id="descripcion"><?= old('descripcion', $automovil['descripcion']) ?></textarea>
                        </div>
                    </div>

                    <div class="grid gap-5 md:grid-cols-1 mt-8">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="descripcion_larga">Descripción detallada <span class="text-rose-500">*</span></label>
                            <?= validation_show_error('descripcion_larga') ?>
                            <textarea class="form-input w-full" rows="12" name="descripcion_larga" id="descripcion_larga"><?= old('descripcion_larga', $automovil['descripcion_larga']) ?></textarea>
                        </div>
                    </div>
                </section>
            </form>

            <!-- Acciones -->
            <footer>
                <div class="flex flex-col px-6 py-5 border-slate-200">
                    <div class="flex self-end">
                        <?php if ($usuario_actual->can('automoviles.eliminar')) : ?>
                            <form action="<?= base_url(route_to('eliminar_automoviles', $automovil['id'])) ?>" id="eliminar-automovil" method="POST">
                                <?= csrf_field() ?>
                                <input type="hidden" name="_method" value="DELETE">

                                <button type="submit" class="btn bg-rose-500 hover:bg-rose-600 text-white mr-3">Eliminar</button>
                            </form>
                        <?php endif ?>
                        <a href="<?= base_url(route_to('automoviles')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                        <?php if ($usuario_actual->can('automoviles.editar')) : ?>
                            <button type="submit" form="form-actualizar-automovil" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
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
        $("#eliminar-modelo").submit(function (e) {
            e.preventDefault();

            if (!confirm(`¿Estás seguro de eliminar la modelo?`)) return;

            $(this)[0].submit();
        });
    });
</script>
<script src="/js/principal.js"></script>

<?= $this->endSection() ?>