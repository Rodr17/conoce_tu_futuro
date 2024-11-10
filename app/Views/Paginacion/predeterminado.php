<?php

use CodeIgniter\Pager\PagerRenderer;

/**
 * @var PagerRenderer $pager
 */
$pager->setSurroundCount(2);

if (url_is('admin*')) : ?>
    <nav class="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="<?= lang('Pager.pageNavigation') ?>">
        <ul class="pagination flex justify-center">
            <?php if ($pager->hasPrevious()) : ?>
                <li class="ml-3 first:ml-0">
                    <a href="<?= $pager->getFirst() ?>" aria-label="<?= lang('Pager.first') ?>" class="btn bg-white border-slate-200 hover:border-slate-300 text-blue-500">
                        <span aria-hidden="true"><?= lang('Pager.first') ?></span>
                    </a>
                </li>
                <li class="ml-3 first:ml-0">
                    <a href="<?= $pager->getPrevious() ?>" aria-label="<?= lang('Pager.previous') ?>" class="btn bg-white border-slate-200 hover:border-slate-300 text-blue-500">
                        <span aria-hidden="true">&lt;- <?= lang('Pager.previous') ?></span>
                    </a>
                </li>
            <?php endif ?>

            <?php foreach ($pager->links() as $link) : ?>
                <li class="ml-3 first:ml-0">
                    <a href="<?= $link['uri'] ?>" class="btn <?= $link['active'] ? 'bg-blue-500 text-white' : 'bg-white text-blue-500' ?> border-slate-200 hover:border-slate-300 "><?= $link['title'] ?></a>
                </li>
            <?php endforeach ?>

            <?php if ($pager->hasNext()) : ?>
                <li class="ml-3 first:ml-0">
                    <a href="<?= $pager->getNext() ?>" aria-label="<?= lang('Pager.next') ?>" class="btn bg-white border-slate-200 hover:border-slate-300 text-blue-500">
                        <?= lang('Pager.next') ?> -&gt;
                    </a>
                </li>
                <li class="ml-3 first:ml-0">
                    <a href="<?= $pager->getLast() ?>" aria-label="<?= lang('Pager.last') ?>" class="btn bg-white border-slate-200 hover:border-slate-300 text-blue-500">
                        <?= lang('Pager.last') ?>
                    </a>
                </li>
            <?php endif ?>
        </ul>
    </nav>
<?php else : ?>
    <nav class="pagination-wrap mt-4 justify-content-center" role="navigation" aria-label="<?= lang('Pager.pageNavigation') ?>">
        <ul class="pagination">
            <?php if ($pager->hasPrevious()) : ?>
                <li class="">
                    <a href="<?= $pager->getFirst() ?>" aria-label="<?= lang('Pager.first') ?>" class="">&laquo;</a>
                </li>
                <li class="">
                    <a href="<?= $pager->getPrevious() ?>" aria-label="<?= lang('Pager.previous') ?>" class="prev">
                        &lt;- <?= lang('Pager.previous') ?>
                    </a>
                </li>
            <?php endif ?>

            <?php foreach ($pager->links() as $link) : ?>
                <li class="">
                    <a href="<?= $link['uri'] ?>" class="<?= $link['active'] ? 'active' : '' ?>"><?= $link['title'] ?></a>
                </li>
            <?php endforeach ?>

            <?php if ($pager->hasNext()) : ?>
                <li class="">
                    <a href="<?= $pager->getNext() ?>" aria-label="<?= lang('Pager.next') ?>" class="next">
                        <?= lang('Pager.next') ?> -&gt;
                    </a>
                </li>
                <li class="">
                    <a href="<?= $pager->getLast() ?>" aria-label="<?= lang('Pager.last') ?>" class="">&raquo;</a>
                </li>
            <?php endif ?>
        </ul>
    </nav>
<?php endif ?>