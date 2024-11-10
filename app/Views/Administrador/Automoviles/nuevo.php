<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Agregar automóvil<?= $this->endSection() ?>

<?= $this->section('contenido') ?>

<!-- Título -->
<h1 class="text-2xl md:text-3xl text-slate-800 font-bold mb-8">Agregar automóvil</h1>

<div class="bg-white shadow-lg rounded-sm mb-8">
    <div class="flex flex-col md:flex-row md:-mr-px">

        <!-- Panel -->
        <div class="grow">

            <!-- Formulario -->
            <form class="px-6 space-y-6" action="<?= base_url(route_to('crear_automoviles')) ?>" method="POST" enctype="multipart/form-data">
                <?= csrf_field() ?>

                <h2 class="text-2xl text-slate-800 font-bold mb-5">Agregar automovil</h2>

                <!-- Alerta -->
                <?php if (session('alerta') !== null) : ?>
                    <div class="<?= session('alerta')['tipo'] ?>" role="alert">
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
                                            $selected = old('id_usuario') == $vendedor->id ? 'selected' : '' ?>
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
                                        $selected = old('id_modelo') == $modelo['id'] ? 'selected' : '' ?>
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
                                        $selected = old('id_version') == $version['id'] ? 'selected' : '' ?>
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
                                    $selected = old('id_color') == $color['id'] ? 'selected' : '' ?>
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
                                        $selected = old('id_transmision') == $transmision['id'] ? 'selected' : '' ?>
                                        <option value="<?= $transmision['id'] ?>" <?= $selected ?>><?= $transmision['nombre'] ?></option>
                                    <?php endforeach; ?>
                                </select>
                            <?php endif ?>
                            <?= validation_show_error('id_transmision') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="motor">Motor <span class="text-rose-500">*</span></label>
                            <input id="motor" class="form-input w-full" type="text" name="motor" value="<?= old('motor') ?>">
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
                                        $selected = old('id_tipo_de_combustible') == $tipo['id'] ? 'selected' : '' ?>
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
                                    $selected = old('año') == $año ? 'selected' : '' ?>
                                    <option value="<?= $año ?>" <?= $selected ?>><?= $año ?></option>
                                <?php endfor ?>
                            </select>
                            <?= validation_show_error('año') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="numero_de_puertas">Número de puertas <span class="text-rose-500">*</span></label>
                            <input id="numero_de_puertas" class="form-input w-full" type="number" name="numero_de_puertas" value="<?= old('numero_de_puertas') ?>" min="1">
                            <?= validation_show_error('numero_de_puertas') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="precio">Precio <span class="text-rose-500">*</span></label>
                            <input id="precio" class="form-input w-full" type="number" name="precio" value="<?= old('precio') ?>" min="20000">
                            <?= validation_show_error('precio') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="estatus">Estatus <span class="text-rose-500">*</span></label>
                            <select id="estatus" class="form-select w-full" name="estatus">
                                <option value="">Seleccionar</option>
                                <?php foreach ($estatus as $estado) :
                                    $selected = old('estatus') == $estado ? 'selected' : '' ?>
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
                                <svg class="inline-flex w-4 h-4 fill-slate-400 mb-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z"></path>
                                </svg>
                                <label for="imagen" class="block cursor-pointer text-sm text-slate-500 italic" id="imagen_texto">Imágen en jpg, png, etc.</label>
                                <input class="sr-only" id="imagen" type="file" name="imagen" accept="image/*">
                            </label>
                            <?= validation_show_error('imagen') ?>
                        </div>

                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="imagenes">Imágenes</label>
                            <label for="imagenes" class="block cursor-pointer rounded bg-slate-100 border border-dashed border-slate-300 text-center px-5 py-8">
                                <svg class="inline-flex w-4 h-4 fill-slate-400 mb-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4c-.3 0-.5.1-.7.3L1.6 10 3 11.4l4-4V16h2V7.4l4 4 1.4-1.4-5.7-5.7C8.5 4.1 8.3 4 8 4ZM1 2h14V0H1v2Z"></path>
                                </svg>
                                <label for="imagenes" class="block cursor-pointer text-sm text-slate-500 italic" id="imagenes_texto">Imágen en jpg, png, etc.</label>
                                <input class="sr-only" id="imagenes" type="file" name="imagenes" accept="image/*" multiple>
                            </label>
                            <?= validation_show_error('imagenes') ?>
                        </div>
                    </div>

                    <div class="grid gap-5 md:grid-cols-1 mt-8">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="descripcion">Descripción <span class="text-rose-500">*</span></label>
                            <?= validation_show_error('descripcion') ?>
                            <textarea class="form-input w-full" rows="5" name="descripcion" id="descripcion"><?= old('descripcion') ?></textarea>
                        </div>
                    </div>

                    <div class="grid gap-5 md:grid-cols-1 mt-8">
                        <div class="">
                            <label class="block text-sm font-medium mb-1" for="descripcion_larga">Descripción detallada <span class="text-rose-500">*</span></label>
                            <?= validation_show_error('descripcion_larga') ?>
                            <textarea class="form-input w-full" rows="12" name="descripcion_larga" id="descripcion_larga"><?= old('descripcion_larga') ?></textarea>
                        </div>
                    </div>
                </section>

                <!-- Acciones -->
                <footer>
                    <div class="flex flex-col px-6 py-5 border-t border-slate-200">
                        <div class="flex self-end">
                            <a href="<?= base_url(route_to('automoviles')) ?>" class="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancelar</a>
                            <?php if ($usuario_actual->can('automoviles.crear')) : ?>
                                <button type="submit" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Guardar cambios</button>
                            <?php endif ?>
                        </div>
                    </div>
                </footer>
            </form>

        </div>

    </div>
</div>

<?= $this->endSection() ?>

<?= $this->section('scripts') ?>

<script src="/js/inicializador.js"></script>
<script src="/js/principal.js"></script>
<script>
    $(function () {
        let uri_modulo = location.pathname.split("/", 3).join("/");

        $('#imagen, #imagenes').on('change', function () {
            // Obtiene todos los archivos seleccionados
            const archivos = $(this)[0].files;
            if (archivos.length === 0) return $(this).siblings('label').text('Imágen en jpg, png, etc.');

            let nombre_archivos = [];
            let nueva_imagen;

            // Itera sobre los archivos seleccionados
            for (let i = 0; i < archivos.length; i++) {
                // Agrega el nombre de cada archivo al arreglo de nombres
                nombre_archivos.push(archivos[i].name);

                // Solo usa la primera imagen para la vista previa
                if (i === 0) {
                    const lector_archivos = new FileReader();

                    // Crea o reutiliza el elemento de imagen para la vista previa
                    if ($(this).siblings('img').length === 1) {
                        nueva_imagen = $(this).siblings('img')[0];
                    } else {
                        nueva_imagen = document.createElement("img");
                        nueva_imagen.className = 'mx-auto my-2 w-[200px] h-[100px] object-contain border-b pb-2';
                    }

                    lector_archivos.addEventListener("load", () => {
                        // convierte la primera imagen a una cadena en base64
                        nueva_imagen.src = lector_archivos.result;
                    });

                    lector_archivos.readAsDataURL(archivos[i]);

                    // Muestra la imagen si aún no se ha agregado
                    if ($(this).siblings('img').length === 0) $(this).parent('label').prepend(nueva_imagen);
                }
            }

            // Muestra todos los nombres de archivos en un solo texto separado por comas
            $(this).siblings('label').text(nombre_archivos.join(', '));
        });

        function obtener_versiones(id) {
            $.getJSON(`${uri_modulo}/${id}/version`)
                .done((versiones) => {
                    let selector = $("#id_version");
                    let opciones_html = `<option value="" selected>Seleccionar</option>`;

                    // Para recorrer el arreglo de versiones
                    versiones.forEach((version) => {
                        opciones_html += `<option value="${version.id}">${version.nombre}</option>`;
                    });

                    selector.html(opciones_html);
                })
                .fail((error) => {
                    $("#id_version").html(`<option disabled selected value="">No se pudo cargar datos</option>`);
                });
        }

        $("#id_modelo").change(function (e) {
            e.preventDefault();

            let id_modelo = parseInt($(this).val());

            if (!Number.isInteger(id_modelo) || !(id_modelo > 0)) {
                return $("#id_version").html(`<option value="" selected>Seleccionar</option>`);
            };

            obtener_versiones(id_modelo);
        });
    });
</script>

<?= $this->endSection() ?>