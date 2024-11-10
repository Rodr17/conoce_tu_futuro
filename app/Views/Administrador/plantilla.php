<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Centros Comerciales ubicados en las zonas de mayor afluencia en las principales ciudades de México.">
	<meta name="robots" content="noindex,nofollow">
	<meta name="theme-color" content="#0a192f">
	<?= csrf_meta() ?>

	<!-- Open Graph -->
	<meta property="og:title" content="Conoce tu futuro Administrador">
	<meta property="og:description" content="Administrador del sitio web Conoce tu futuro">
	<meta property="og:image" content="<?= base_url('imagenes/logo-transparente.png') ?>">
	<meta property="og:url" content="<?= base_url(route_to('admin')) ?>">
	
	<link rel="icon" type="image/x-icon" href="/imagenes/logo-transparente.png">
	<link rel="apple-touch-icon" href="/imagenes/logo-transparente.png">
	<link rel="canonical" href="<?= base_url() ?>">
	
	<?= $this->renderSection('cabeceras') ?>

	<?= $this->renderSection('estilos') ?>
	
	<link href="<?= base_url('css/styles_admin.css') ?>" rel="stylesheet">

    <title><?= $this->renderSection('titulo') ?> - Conoce tu futuro</title>
</head>
<body
    class="font-inter antialiased bg-slate-100 text-slate-600"
    :class="{ 'sidebar-expanded': sidebarExpanded }"
    x-data="{ sidebarOpen: false, sidebarExpanded: localStorage.getItem('sidebar-expanded') == 'true' }"
    x-init="$watch('sidebarExpanded', value => localStorage.setItem('sidebar-expanded', value))"
>

    <div class="flex h-[100dvh] overflow-hidden">

        <!-- Menú -->
		<?= $this->include("Administrador/includes/menu") ?>

        <!-- Área de contenido -->
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        	<!-- Encabezado -->
			<?= $this->include("Administrador/includes/encabezado") ?>

			<!-- Área de contenido principal-->
			<main class="grow">
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
					<?= $this->renderSection('contenido') ?>
				</div>
			</main>
		</div>
	</div>
	
	<script>
		const body = document.querySelector('body');

        if (localStorage.getItem('sidebar-expanded') == 'true') {
            body.classList.add('sidebar-expanded');
        } else {
            body.classList.remove('sidebar-expanded');
        }
    </script>
	<?= $this->renderSection('scripts') ?>
</body>
</html>