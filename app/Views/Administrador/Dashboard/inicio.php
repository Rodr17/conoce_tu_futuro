<?= $this->extend('Administrador/plantilla') ?>

<?= $this->section('titulo') ?>Dashboard <?= $this->endSection() ?>

<!-- Contenido -->
<?= $this->section('contenido') ?>

<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script src="/js/inicializador.js"></script>
<script src="/js/principal.js"></script>
<?= $this->endSection() ?>