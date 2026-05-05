/**
 * navbar.js — Injeção completa da navbar (HTML + CSS + eventos)
 * Inclua com: <script src="/assets/navbar.js"></script>
 */
(function () {

    // ─── 1. CSS ───────────────────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        body { padding-top: 64px; }

        #nb-menu {
            position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
        }

        /* Drawer mobile */
        #nb-drawer {
            position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
            z-index: 9998; overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
        }
        #nb-drawer.aberto { transform: translateX(0); }

        /* Overlay */
        #nb-overlay {
            display: none; position: fixed; inset: 0;
            z-index: 9997; background: rgba(0,0,0,0.5);
        }
        #nb-overlay.aberto { display: block; }

        /* Ícone fechar escondido por padrão */
        #nb-icon-close { display: none; }
        .menu-aberto #nb-icon-open  { display: none; }
        .menu-aberto #nb-icon-close { display: block; }

        /* Responsivo */
        @media (min-width: 1024px) {
            #nb-hamburger { display: none; }
            #nb-desktop   { display: flex; }
            #nb-drawer, #nb-overlay { display: none !important; }
        }
        @media (max-width: 1023px) {
            #nb-desktop   { display: none; }
            #nb-hamburger { display: block; }
        }
    `;
    document.head.appendChild(style);

    // ─── 2. HTML ──────────────────────────────────────────────────────────────
    const root = document.createElement('div');
    root.id = 'nb-root';
    root.innerHTML = `

        <!-- NAVBAR BAR -->
        <nav id="nb-menu" class="navbar bg-base-300 shadow-sm">

            <div class="flex-1">
                <a href="/index.html" class="px-3 text-lg font-bold">
                    🍥 Naruto RPG - STAR 🍜
                </a>
            </div>

            <!-- Menu Desktop -->
            <div id="nb-desktop" class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><a href="/index.html">Início</a></li>
                    <li>
                        <details>
                            <summary>Utilitários</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-64">
                                <li><a href="/pages/utilitarios/zetsu_clones.html">Zetsus e Clones</a></li>
                                <li><a href="/pages/utilitarios/teletransporte_marcas.html">Teletransporte e Marcas pelos caminhos</a></li>
                                <li><a href="/pages/utilitarios/ocultacoes.html">Ocultação de Técnicas</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="/pages/introducao.html">Introdução ao RPG</a></li>
                    <li>
                        <details>
                            <summary>Habilidades Gerais</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-48">
                                <li><a href="/pages/habilidades_gerais/taijutsus.html">Taijutsu</a></li>
                                <li><a href="/pages/habilidades_gerais/elementais_gerais.html">Elementais/Gerais</a></li>
                                <li><a href="/pages/habilidades_gerais/dojutsus_gennin.html">Dojutsu Gennin</a></li>
                                <li><a href="/pages/habilidades_gerais/dojutsus_chunnin.html">Dojutsu Chunnin</a></li>
                                <li><a href="/pages/habilidades_gerais/monte_myobuko.html">Monte Myoboku</a></li>
                                <li><a href="/pages/habilidades_gerais/clones.html">Clones</a></li>
                                <li><a href="/pages/habilidades_gerais/invoca%C3%A7%C3%B5es.html">Invocações</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Chakra</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-48">
                                <li><a href="/pages/chakra/manipulacao_chakra.html">Manipulação de Chakra</a></li>
                                <li><a href="/pages/chakra/aprendizado_jutsu.html">Aprendizado de Jutsu</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Economia</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-40">
                                <li><a href="/pages/economia/ryos.html">Ryos</a></li>
                                <li><a href="/pages/economia/estalebcimentos.html">Estabelecimentos</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sistemas</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-56">
                                <li><a href="/pages/sistemas/seis_caminhos.html">Seis Caminhos de Pain</a></li>
                                <li><a href="/pages/sistemas/on_off.html">On/Off</a></li>
                                <li><a href="/pages/sistemas/execucao.html">Execução</a></li>
                                <li><a href="/pages/sistemas/criacao_personagem.html">Criação de Personagem</a></li>
                                <li><a href="/pages/sistemas/roubo_sangue.html">Roubo de Sangue</a></li>
                                <li><a href="/pages/sistemas/roubo_dojutsu.html">Roubo de Dojutsu</a></li>
                                <li><a href="/pages/sistemas/ups.html">UPs (Cards e Ranks)</a></li>
                                <li><a href="/pages/sistemas/missoes.html">Missões</a></li>
                                <li><a href="/pages/sistemas/espadas_da_neova.html">Espadas da Névoa</a></li>
                                <li><a href="/pages/sistemas/susanoo.html">Susano'o</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Títulos</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-48">
                                <li><a href="/pages/titulo/sannin_lendario.html">Sannin Lendários</a></li>
                                <li><a href="/pages/titulo/escorpiao_vermelho.html">Escorpião Vermelho</a></li>
                                <li><a href="/pages/titulo/espadachin_da_nevao.html">Espadachins da Névoa</a></li>
                                <li><a href="/pages/titulo/nukkennin.html" style="color:#f87171">Nukkenins</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="/pages/lista_personagens.html">Personagens</a></li>
                </ul>
            </div>

            <!-- Hamburguer -->
            <div id="nb-hamburger">
                <button id="nb-btn" class="btn btn-ghost btn-square" aria-label="Menu">
                    <svg id="nb-icon-open" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <svg id="nb-icon-close" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        </nav>

        <!-- DRAWER MOBILE -->
        <div id="nb-drawer" class="bg-base-300">
            <ul class="menu w-full p-4 text-base">
                <li><a href="/index.html">Início</a></li>
                <li>
                    <details>
                        <summary>Utilitários</summary>
                        <ul>
                            <li><a href="/pages/utilitarios/zetsu_clones.html">Zetsus e Clones</a></li>
                            <li><a href="/pages/utilitarios/teletransporte_marcas.html">Teletransporte e Marcas pelos caminhos</a></li>
                            <li><a href="/pages/utilitarios/ocultacoes.html">Ocultação de Técnicas</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="/pages/introducao.html">Introdução ao RPG</a></li>
                <li>
                    <details>
                        <summary>Habilidades Gerais</summary>
                        <ul>
                            <li><a href="/pages/habilidades_gerais/taijutsus.html">Taijutsu</a></li>
                            <li><a href="/pages/habilidades_gerais/elementais_gerais.html">Elementais/Gerais</a></li>
                            <li><a href="/pages/habilidades_gerais/dojutsus_gennin.html">Dojutsu Gennin</a></li>
                            <li><a href="/pages/habilidades_gerais/dojutsus_chunnin.html">Dojutsu Chunnin</a></li>
                            <li><a href="/pages/habilidades_gerais/monte_myobuko.html">Monte Myoboku</a></li>
                            <li><a href="/pages/habilidades_gerais/clones.html">Clones</a></li>
                            <li><a href="/pages/habilidades_gerais/invoca%C3%A7%C3%B5es.html">Invocações</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Estudo do Chakra</summary>
                        <ul>
                            <li><a href="/pages/chakra/manipulacao_chakra.html">Manipulação de Chakra</a></li>
                            <li><a href="/pages/chakra/aprendizado_jutsu.html">Aprendizado de Jutsu</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Economia</summary>
                        <ul>
                            <li><a href="/pages/economia/ryos.html">Ryos</a></li>
                            <li><a href="/pages/economia/estalebcimentos.html">Estabelecimentos</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Sistemas</summary>
                        <ul>
                            <li><a href="/pages/sistemas/seis_caminhos.html">Seis Caminhos de Pain</a></li>
                            <li><a href="/pages/sistemas/on_off.html">On/Off</a></li>
                            <li><a href="/pages/sistemas/execucao.html">Execução</a></li>
                            <li><a href="/pages/sistemas/criacao_personagem.html">Criação de Personagem</a></li>
                            <li><a href="/pages/sistemas/roubo_sangue.html">Roubo de Sangue</a></li>
                            <li><a href="/pages/sistemas/roubo_dojutsu.html">Roubo de Dojutsu</a></li>
                            <li><a href="/pages/sistemas/ups.html">UPs (Cards e Ranks)</a></li>
                            <li><a href="/pages/sistemas/missoes.html">Missões</a></li>
                            <li><a href="/pages/sistemas/espadas_da_neova.html">Espadas da Névoa (Enciclopédia)</a></li>
                            <li><a href="/pages/sistemas/susanoo.html">Susano'o</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Títulos</summary>
                        <ul>
                            <li><a href="/pages/titulo/sannin_lendario.html">Sannin Lendários</a></li>
                            <li><a href="/pages/titulo/escorpiao_vermelho.html">Escorpião Vermelho</a></li>
                            <li><a href="/pages/titulo/espadachin_da_nevao.html">Espadachins da Névoa</a></li>
                            <li><a href="/pages/titulo/nukkennin.html" style="color:#f87171">Nukkenins</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="/pages/lista_personagens.html">Personagens</a></li>
            </ul>
        </div>

        <!-- Overlay -->
        <div id="nb-overlay"></div>
    `;

    // Insere antes de qualquer filho do body
    document.body.insertBefore(root, document.body.firstChild);

    // ─── 3. Eventos ───────────────────────────────────────────────────────────
    const btn     = document.getElementById('nb-btn');
    const drawer  = document.getElementById('nb-drawer');
    const overlay = document.getElementById('nb-overlay');
    const hbWrap  = document.getElementById('nb-hamburger');

    function abrir() {
        drawer.classList.add('aberto');
        overlay.classList.add('aberto');
        hbWrap.classList.add('menu-aberto');
    }

    function fechar() {
        drawer.classList.remove('aberto');
        overlay.classList.remove('aberto');
        hbWrap.classList.remove('menu-aberto');
    }

    btn.addEventListener('click', () => {
        drawer.classList.contains('aberto') ? fechar() : abrir();
    });

    overlay.addEventListener('click', fechar);

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) fechar();
    });

})();
