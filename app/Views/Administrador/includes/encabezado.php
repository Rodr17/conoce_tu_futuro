<!-- Encabezado sitio -->
<header class="sticky top-0 bg-white border-b border-slate-200 z-30">
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16 -mb-px">

            <!-- Encabezado: Left side -->
            <div class="flex">
                <!-- Abrir menú button -->
                <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="sidebarOpen = !sidebarOpen" aria-controls="sidebar" :aria-expanded="sidebarOpen">
                    <span class="sr-only">Abrir menú</span>
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="5" width="16" height="2" />
                        <rect x="4" y="11" width="16" height="2" />
                        <rect x="4" y="17" width="16" height="2" />
                    </svg>
                </button>

            </div>

            <!-- Encabezado: Right side -->
            <div class="flex items-center space-x-3">

                <!-- Info button -->
                <div class="relative inline-flex" x-data="{ open: false }">
                    <button class="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-full" :class="{ 'bg-slate-200': open }" aria-haspopup="true" @click.prevent="open = !open" :aria-expanded="open">
                        <span class="sr-only">Info</span>
                        <svg class="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-current text-slate-500" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                        </svg>
                    </button>
                    <div class="origin-top-right z-10 absolute top-full right-0 min-w-56 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1" @click.outside="open = false" @keydown.escape.window="open = false" x-show="open"
                        x-transition:enter="transition ease-out duration-200 transform" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
                        x-transition:leave-end="opacity-0" x-cloak>
                        <div class="text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-3">¿Necesitas ayuda?</div>
                        <ul>
                            <li>
                                <a class="font-medium text-sm text-blue-500 hover:text-blue-600 flex items-center py-1 px-3" href="<?= base_url(route_to('contactar')) ?>" target="_blink" @click="open = false" @focus="open = true" @focusout="open = false">
                                    <svg class="w-3 h-3 fill-current text-blue-500 shrink-0 mr-2" viewBox="0 0 12 12">
                                        <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                                    </svg>
                                    <span>Contáctanos</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Línea divisora -->
                <hr class="w-px h-6 bg-slate-200 border-none" />

                <!-- Usuario button -->
                <?php if(auth()->loggedIn()) : ?>
                <div class="relative inline-flex" x-data="{ open: false }">
                    <button class="inline-flex justify-center items-center group" aria-haspopup="true" @click.prevent="open = !open" :aria-expanded="open">
                        <div class="flex items-center truncate">
                            <span class="truncate ml-2 text-sm font-medium group-hover:text-slate-800-slate-200"><?= auth()->user()->nombre ?></span>
                            <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                        </div>
                    </button>
                    <div class="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1" @click.outside="open = false" @keydown.escape.window="open = false" x-show="open"
                        x-transition:enter="transition ease-out duration-200 transform" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-out duration-200" x-transition:leave-start="opacity-100"
                        x-transition:leave-end="opacity-0" x-cloak>
                        <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
                            <div class="font-medium text-slate-800"><?= auth()->user()->email ?></div>
                                <?php
                                    $nombre_grupo = auth()->user()->getGroups()[0];
                                    $rol = model('Roles')->select('title')->where('nombre', $nombre_grupo)->first()['title'] ?? ''
                                ?>
                            <div class="text-xs text-slate-500 italic"><?= $rol ?></div>
                        </div>
                        <ul>
                            <li>
                                <a class="font-medium text-sm text-blue-500 hover:text-blue-600 flex items-center py-1 px-3" href="<?= base_url(route_to('editar_usuarios', user_id())) ?>" @click="open = false" @focus="open = true" @focusout="open = false">Editar perfil</a>
                            </li>
                            <li>
                                <a class="font-medium text-sm text-blue-500 hover:text-blue-600 flex items-center py-1 px-3" href="<?= base_url('cerrar-sesion') ?>" @click="open = false" @focus="open = true" @focusout="open = false">Salir</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <?php endif ?>

            </div>

        </div>
    </div>
</header>