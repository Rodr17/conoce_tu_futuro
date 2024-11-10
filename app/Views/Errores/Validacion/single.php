<?php if(url_is('admin*')) : ?>
    <span class="text-xs text-red-500"><?= esc($error) ?></span>
<?php else : ?>
    <span class="d-block text-danger"><?= esc($error) ?></span>
<?php endif ?>