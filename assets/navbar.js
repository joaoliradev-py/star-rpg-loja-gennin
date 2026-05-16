/**
 * navbar.js — Injeção completa da navbar ORIGINAL (HTML + CSS + eventos)
 */
(function() {
    // ─── 1. CSS ───────────────────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        #mobile-menu {
            position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
            z-index: 40; overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
        }
        #mobile-menu.menu-aberto { transform: translateX(0); }
        #mobile-overlay {
            display: none; position: fixed; inset: 0;
            z-index: 30; background: rgba(0, 0, 0, 0.5);
        }
        #mobile-overlay.menu-aberto { display: block; }
        #icon-close { display: none; }
        .menu-aberto-icon #icon-open  { display: none; }
        .menu-aberto-icon #icon-close { display: block; }
        @media (min-width: 1024px) {
            #hamburger-wrapper { display: none; }
            #mobile-menu, #mobile-overlay { display: none !important; }
            #desktop-menu { display: flex; }
        }
        @media (max-width: 1023px) {
            #desktop-menu { display: none; }
            #hamburger-wrapper { display: block; }
        }
    `;
    document.head.appendChild(style);

    // ─── 2. HTML ──────────────────────────────────────────────────────────────
    const root = document.createElement('div');
    root.id = 'nb-root';
    root.innerHTML = `
        <nav class="navbar bg-base-300 shadow-sm fixed top-0 left-0 right-0 z-50">
            <div class="flex-1">
                <a href="index.html" class="px-3 text-lg font-bold flex items-center gap-2">
                    🍥 Naruto RPG - STAR 🍜
                </a>
            </div>

            <!-- Menu Desktop -->
            <div id="desktop-menu" class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><a href="index.html">Início</a></li>
                    <li>
                        <details>
                            <summary>Utilitários</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-64 shadow-lg">
                                <li><a href="pages/utilitarios/zetsu_clones.html">Zetsus e Clones</a></li>
                                <li><a href="pages/utilitarios/teletransporte_marcas.html">Teletransporte e Marcas</a></li>
                                <li><a href="pages/utilitarios/ocultacoes.html">Ocultação de Técnicas</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="pages/introducao.html">Introdução ao RPG</a></li>
                    <li>
                        <details>
                            <summary>Habilidades Gerais</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-48 shadow-lg">
                                <li><a href="pages/habilidades_gerais/taijutsus.html">Taijutsu</a></li>
                                <li><a href="pages/habilidades_gerais/elementais_gerais.html">Elementais/Gerais</a></li>
                                <li><a href="pages/habilidades_gerais/dojutsus_gennin.html">Dojutsu Gennin</a></li>
                                <li><a href="pages/habilidades_gerais/dojutsus_chunnin.html">Dojutsu Chunnin</a></li>
                                <li><a href="pages/habilidades_gerais/monte_myobuko.html">Monte Myoboku</a></li>
                                <li><a href="pages/habilidades_gerais/clones.html">Clones</a></li>
                                <li><a href="pages/habilidades_gerais/invocações.html">Invocações</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Chakra</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-48 shadow-lg">
                                <li><a href="pages/chakra/manipulacao_chakra.html">Manipulação de Chakra</a></li>
                                <li><a href="pages/chakra/aprendizado_jutsu.html">Aprendizado de Jutsu</a></li>
                                <li><a href="pages/chakra/criacao_jutsu.html">Criação de Jutsu</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Economia</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-48 shadow-lg">
                                <li><a href="pages/economia/ryos.html">Ryos</a></li>
                                <li><a href="pages/economia/estabelecimentos.html">Estabelecimentos</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Sistemas</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-64 shadow-lg">
                                <li><a href="pages/sistemas/ups.html">Sistema de Ups</a></li>
                                <li><a href="pages/sistemas/roubo_sangue.html">Roubo de Sangue</a></li>
                                <li><a href="pages/sistemas/execucao.html">Execução</a></li>
                                <li><a href="pages/sistemas/criacao_personagem.html">Criação de Personagem</a></li>
                                <li><a href="pages/sistemas/on_off.html">On/Off</a></li>
                                <li><a href="pages/sistemas/locomocao_caminhos.html">Locomoção & Caminhos</a></li>
                                <li><a href="pages/sistemas/troca_de_vilas.html">Troca de Vilas</a></li>
                                <li><a href="pages/sistemas/seis_caminhos.html">Seis Caminhos de Pain</a></li>
                                <li><a href="pages/sistemas/roubo_dojutsu.html">Roubo de Dojutsu</a></li>
                                <li><a href="pages/sistemas/susanoo.html">Evolução Susanoo</a></li>
                                <li><a href="pages/sistemas/guardioes_ninja.html">Guardiões Ninja</a></li>
                                <li><a href="pages/sistemas/sistema_medico.html">Sistema Médico</a></li>
                                <li>
                                    <details>
                                        <summary class="font-bold text-orange-500">Caça às Bijūs</summary>
                                        <ul class="p-2 rounded-lg mt-1">
                                            <li><a href="pages/sistemas/bijuus.html">Sistema de Bijūs</a></li>
                                            <li><a href="pages/sistemas/comabte_logica.html">Combate de Lógica</a></li>
                                            <li><a href="pages/sistemas/jutsus_supremos.html">Jutsus Supremos</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Títulos</summary>
                            <ul class="bg-base-100 rounded-t-none p-2 w-64 shadow-lg">
                                <li><a href="pages/titulo/sannin_lendario.html">Sannin Lendário</a></li>
                                <li><a href="pages/titulo/escorpiao_vermelho.html">Escorpião Vermelho</a></li>
                                <li><a href="pages/titulo/nukkennin.html">Nukkenin</a></li>
                                <li><a href="pages/titulo/corpo_de_explosao.html">Corpo de Explosão</a></li>
                                <li class="border-t border-base-content/10 mt-2 pt-2">
                                    <details>
                                        <summary class="font-bold text-primary">Sete Espadachins</summary>
                                        <ul class="p-2 rounded-lg mt-1">
                                            <li><a href="pages/titulo/espadachin_da_nevao.html">Sistema (Título)</a></li>
                                            <li><a href="pages/titulo/espadas_da_nevoa.html">Enciclopédia (Espadas)</a></li>
                                            <li><a href="pages/titulo/missoes.html">Missões de Assassinato</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="pages/lista_personagens.html">Personagens</a></li>
                </ul>
            </div>

            <!-- Botão Hamburguer (mobile) -->
            <div id="hamburger-wrapper">
                <button id="hamburger-btn" class="btn btn-ghost btn-square">
                    <svg id="icon-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </nav>

        <!-- DRAWER MOBILE -->
        <div id="mobile-menu" class="bg-base-300">
            <ul class="menu w-full p-4 text-base">
                <li><a href="index.html">Início</a></li>
                <li>
                    <details>
                        <summary>Utilitários</summary>
                        <ul>
                            <li><a href="pages/utilitarios/zetsu_clones.html">Zetsus e Clones</a></li>
                            <li><a href="pages/utilitarios/teletransporte_marcas.html">Teletransporte e Marcas</a></li>
                            <li><a href="pages/utilitarios/ocultacoes.html">Ocultação de Técnicas</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="pages/introducao.html">Introdução ao RPG</a></li>
                <li>
                    <details>
                        <summary>Habilidades Gerais</summary>
                        <ul>
                            <li><a href="pages/habilidades_gerais/taijutsus.html">Taijutsu</a></li>
                            <li><a href="pages/habilidades_gerais/elementais_gerais.html">Elementais/Gerais</a></li>
                            <li><a href="pages/habilidades_gerais/dojutsus_gennin.html">Dojutsu Gennin</a></li>
                            <li><a href="pages/habilidades_gerais/dojutsus_chunnin.html">Dojutsu Chunnin</a></li>
                            <li><a href="pages/habilidades_gerais/monte_myobuko.html">Monte Myoboku</a></li>
                            <li><a href="pages/habilidades_gerais/clones.html">Clones</a></li>
                            <li><a href="pages/habilidades_gerais/invocações.html">Invocações</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Chakra</summary>
                        <ul>
                            <li><a href="pages/chakra/manipulacao_chakra.html">Manipulação de Chakra</a></li>
                            <li><a href="pages/chakra/aprendizado_jutsu.html">Aprendizado de Jutsu</a></li>
                            <li><a href="pages/chakra/criacao_jutsu.html">Criação de Jutsu</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Economia</summary>
                        <ul>
                            <li><a href="pages/economia/ryos.html">Ryos</a></li>
                            <li><a href="pages/economia/estabelecimentos.html">Estabelecimentos</a></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Sistemas</summary>
                        <ul>
                            <li><a href="pages/sistemas/ups.html">Sistema de Ups</a></li>
                            <li><a href="pages/sistemas/roubo_sangue.html">Roubo de Sangue</a></li>
                            <li><a href="pages/sistemas/execucao.html">Execução</a></li>
                            <li><a href="pages/sistemas/criacao_personagem.html">Criação de Personagem</a></li>
                            <li><a href="pages/sistemas/on_off.html">On/Off</a></li>
                            <li><a href="pages/sistemas/locomocao_caminhos.html">Locomoção & Caminhos</a></li>
                            <li><a href="pages/sistemas/troca_de_vilas.html">Troca de Vilas</a></li>
                            <li><a href="pages/sistemas/seis_caminhos.html">Seis Caminhos de Pain</a></li>
                            <li><a href="pages/sistemas/roubo_dojutsu.html">Roubo de Dojutsu</a></li>
                            <li><a href="pages/sistemas/susanoo.html">Evolução Susanoo</a></li>
                            <li><a href="pages/sistemas/guardioes_ninja.html">Guardiões Ninja</a></li>
                            <li><a href="pages/sistemas/sistema_medico.html">Sistema Médico</a></li>
                            <li>
                                <details>
                                    <summary class="font-bold text-orange-500">Caça às Bijūs</summary>
                                    <ul class="p-2 rounded-lg mt-1">
                                        <li><a href="pages/sistemas/bijuus.html">Sistema de Bijūs</a></li>
                                        <li><a href="pages/sistemas/comabte_logica.html">Combate de Lógica</a></li>
                                        <li><a href="pages/sistemas/jutsus_supremos.html">Jutsus Supremos</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Títulos</summary>
                        <ul>
                            <li><a href="pages/titulo/sannin_lendario.html">Sannin Lendário</a></li>
                            <li><a href="pages/titulo/escorpiao_vermelho.html">Escorpião Vermelho</a></li>
                            <li><a href="pages/titulo/nukkennin.html">Nukkenin</a></li>
                            <li><a href="pages/titulo/corpo_de_explosao.html">Corpo de Explosão</a></li>
                            <li>
                                <details>
                                    <summary class="font-bold text-primary">Sete Espadachins</summary>
                                    <ul>
                                        <li><a href="pages/titulo/espadachin_da_nevao.html">Sistema (Título)</a></li>
                                        <li><a href="pages/titulo/espadas_da_nevoa.html">Enciclopédia (Espadas)</a></li>
                                        <li><a href="pages/titulo/missoes.html">Missões de Assassinato</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><a href="pages/lista_personagens.html">Personagens</a></li>
            </ul>
        </div>
        <div id="mobile-overlay"></div>
    `;
    document.body.appendChild(root);

    // ─── 3. Lógica ────────────────────────────────────────────────────────────
    const btn     = document.getElementById('hamburger-btn');
    const menu    = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-overlay');
    const btnWrap = document.getElementById('hamburger-wrapper');

    function abrir() {
        menu.classList.add('menu-aberto');
        overlay.classList.add('menu-aberto');
        btnWrap.classList.add('menu-aberto-icon');
    }
    function fechar() {
        menu.classList.remove('menu-aberto');
        overlay.classList.remove('menu-aberto');
        btnWrap.classList.remove('menu-aberto-icon');
    }

    btn.addEventListener('click', () => menu.classList.contains('menu-aberto') ? fechar() : abrir());
    overlay.addEventListener('click', fechar);
    window.addEventListener('resize', () => { if (window.innerWidth >= 1024) fechar(); });
})();
