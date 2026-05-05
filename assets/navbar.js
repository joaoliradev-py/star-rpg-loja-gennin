/**
 * navbar.js — Injeção completa da navbar (HTML + CSS + eventos)
 * Inclua com: <script src="assets/navbar.js"></script> (na raiz)
 */
(function() {
    // Detecta se estamos no GitHub Pages e define o prefixo do repositório
    const isGH = window.location.hostname.includes('github.io');
    const repoPrefix = isGH ? '/start-rpg-loja-gennin' : '';

    // Função auxiliar para ajustar os links dinamicamente
    const fixLink = (path) => repoPrefix + path;

    // ─── 1. CSS ───────────────────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        #nb-drawer {
            position: fixed; top: 0; left: 0; height: 100%; width: 280px;
            background: #1a1a1a; color: white;
            z-index: 9998; transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            overflow-y: auto; box-shadow: 4px 0 10px rgba(0,0,0,0.5);
        }
        #nb-drawer.aberto { transform: translateX(0); }
        
        #nb-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 9997; background: rgba(0,0,0,0.5);
            display: none;
        }
        #nb-overlay.aberto { display: block; }

        #nb-toggle { z-index: 9999; }
        .menu-aberto #nb-icon-open  { display: none; }
        .menu-aberto #nb-icon-close { display: block; }
        #nb-icon-close { display: none; }

        .nb-nav-link { 
            display: block; padding: 12px 20px; 
            border-bottom: 1px solid #333;
            transition: background 0.2s;
        }
        .nb-nav-link:hover { background: #333; }
    `;
    document.head.appendChild(style);

    // ─── 2. HTML ──────────────────────────────────────────────────────────────
    const root = document.createElement('div');
    root.id = 'nb-root';
    root.innerHTML = `
        <!-- Botão de Toggle (Fixo no topo esquerdo) -->
        <div id="nb-toggle" class="fixed top-4 left-4 flex items-center gap-3">
            <button id="nb-btn" class="btn btn-circle btn-primary shadow-xl border-2 border-white/20">
                <svg id="nb-icon-open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                <svg id="nb-icon-close" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <a href="${fixLink('/index.html')}" class="text-white font-black text-xl drop-shadow-md tracking-tighter uppercase italic">STAR RPG</a>
        </div>

        <!-- Overlay -->
        <div id="nb-overlay"></div>

        <!-- Drawer (Menu Lateral) -->
        <nav id="nb-drawer" class="p-4 pt-20">
            <ul class="menu w-full p-0 flex flex-col gap-1">
                <li><a href="${fixLink('/index.html')}" class="nb-nav-link font-bold text-primary">🏠 Início</a></li>
                
                <div class="divider opacity-20 my-2"></div>
                
                <!-- Utilitários -->
                <li>
                    <details>
                        <summary class="nb-nav-link font-semibold">🛠️ Utilitários</summary>
                        <ul class="bg-base-200/50 rounded-lg mt-1">
                            <li><a href="${fixLink('/pages/utilitarios/zetsu_clones.html')}">Zetsus e Clones</a></li>
                            <li><a href="${fixLink('/pages/utilitarios/teletransporte_marcas.html')}">Teletransporte e Marcas</a></li>
                            <li><a href="${fixLink('/pages/utilitarios/ocultacoes.html')}">Ocultação de Técnicas</a></li>
                        </ul>
                    </details>
                </li>

                <li><a href="${fixLink('/pages/introducao.html')}" class="nb-nav-link font-semibold">📜 Introdução</a></li>

                <!-- Habilidades -->
                <li>
                    <details>
                        <summary class="nb-nav-link font-semibold">⚔️ Habilidades</summary>
                        <ul class="bg-base-200/50 rounded-lg mt-1">
                            <li><a href="${fixLink('/pages/habilidades_gerais/taijutsus.html')}">Taijutsu</a></li>
                            <li><a href="${fixLink('/pages/habilidades_gerais/elementais_gerais.html')}">Elementais</a></li>
                            <li><a href="${fixLink('/pages/habilidades_gerais/dojutsus_gennin.html')}">Dojutsu Gennin</a></li>
                            <li><a href="${fixLink('/pages/habilidades_gerais/dojutsus_chunnin.html')}">Dojutsu Chunnin</a></li>
                            <li><a href="${fixLink('/pages/habilidades_gerais/monte_myobuko.html')}">Monte Myoboku</a></li>
                            <li><a href="${fixLink('/pages/habilidades_gerais/clones.html')}">Clones</a></li>
                            <li><a href="${fixLink('/pages/habilidades_gerais/invocações.html')}">Invocações</a></li>
                        </ul>
                    </details>
                </li>

                <!-- Sistemas -->
                <li>
                    <details>
                        <summary class="nb-nav-link font-semibold">⚙️ Sistemas</summary>
                        <ul class="bg-base-200/50 rounded-lg mt-1">
                            <li><a href="${fixLink('/pages/sistemas/seis_caminhos.html')}">Seis Caminhos</a></li>
                            <li><a href="${fixLink('/pages/sistemas/on_off.html')}">On/Off</a></li>
                            <li><a href="${fixLink('/pages/sistemas/execucao.html')}">Execução</a></li>
                            <li><a href="${fixLink('/pages/sistemas/ups.html')}">UPs (Cards e Ranks)</a></li>
                            <li><a href="${fixLink('/pages/sistemas/missoes.html')}">Missões</a></li>
                        </ul>
                    </details>
                </li>

                <li><a href="${fixLink('/pages/lista_personagens.html')}" class="nb-nav-link font-bold text-secondary">👥 Personagens</a></li>
            </ul>
        </nav>
    `;
    document.body.appendChild(root);

    // ─── 3. Lógica (Eventos) ──────────────────────────────────────────────────
    const btn = document.getElementById('nb-btn');
    const drawer = document.getElementById('nb-drawer');
    const overlay = document.getElementById('nb-overlay');
    const toggleCont = document.getElementById('nb-toggle');

    function toggleMenu() {
        const aberto = drawer.classList.toggle('aberto');
        overlay.classList.toggle('aberto');
        toggleCont.classList.toggle('menu-aberto');
    }

    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
})();
