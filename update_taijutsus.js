const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'pages/habilidades_gerais/taijutsus.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const replacement = `            <!-- Conteúdo aqui -->
            <p>Taijutsu (体術; Literalmente significa "Técnicas Corporais") é uma forma básica de técnicas e refere-se à qualquer técnica que envolva artes marciais ou a otimização das habilidades humanas naturais. O Taijutsu é executado ao acessar diretamente as energias físicas e mentais do usuário, contando com a resistência e força ganhas através do treinamento. O Taijutsu tipicamente não requer chakra, apesar do chakra poder ser usado para fortificar suas técnicas, e dispensa selos de mão na maioria das vezes, ocasionalmente fazendo certos gestos ou poses, além de ser muito mais rápido de usar do que ninjutsu ou genjutsu. Taijutsu é colocado simplesmente como combate corpo-a-corpo.</p>
            
            <p>"Apenas um trago nesse meu cigarro<br>Olhando pro mar onde me recomponho"</p>
            
            <hr>
            <p>Punho Suave</p>
            <p>Rank: A</p>
            <p>Estilo de Luta</p>
            <p>Ag p/Assumir: 40.000</p>
            <p>[ Necessita de "Byakugan" ou "Jōgan" ativo ]</p>
            <p>|| Estilo de combate característico do Clã Hyūga, baseado na utilização das palmas e na precisão absoluta para atingir o sistema de chakra do oponente. Requer o Byakugan ativo. Seus golpes ignoram parcialmente defesas físicas, atingindo diretamente os pontos de chakra e órgãos internos. { Atks desse estilo são rápidos e focados em curto alcance; São executados a Rank 4 a longa distância e caso sejam usados junto da emissão de chakra podem ser executados a Rank 3 em até médio alcance com dano interno sendo "atk" + letal. } ☯️ { 20k de Ag p/Movimento de aproximação suave que permite entrar na guarda do inimigo ignorando contra-ataques; 60k de Ag p/Bloqueio de pontos de chakra que impede uso de jutsus por 1 turno; 70k de Ag p/Golpe preciso que dissipa um jutsu ativo como por exemplo modos e causa dano interno; 50k de Ag p/Sequência de golpes que reduz a eficiência de técnicas baseadas em chakra no próximo turno. – Causam 50% a menos de dano e são executadas com um rank de velocidade inf.; 45k de Ag p/Esquiva baseada em leitura corporal. – Funciona com qualquer atk físico e atks a distância até semi - globais; 80k de Ag p/Ataque em ponto vital que pode inutilizar temporariamente um membro. – 2 turnos; 30k de Ag p/Interrupção após bloqueio que cancela combos físicos; 35k de Ag p/Golpe de expulsão de chakra que afasta o alvo a média distância }.||1x</p>
            <p>&gt; Chunnin+: Rank 3; Com emissão 2; Dano Ilimitado</p>
            <p>Usuários: Clã Hyuuga, Boruto e Himawari.</p>
            <p>Preço: 5.000.000</p>

            <hr>
            <p>Taijutsus Simples</p>
            <p>Rank: A</p>
            <p>Estilo de luta</p>
            <p>Ag p/Assumir o estilo: 10.000</p>
            <p>|| Movimentos de luta básicos. Exige uma força pequena e uma Agilidade baixa e causa pouco dano. { Dano = atributo ataque; Movimentos — Rank 4} 🥊 {10k de Ag p/Soco; 25k de Ag p/Chute; 30k de Def p/Bloqueio simples que ignora danos abaixo de 500k; 20k de Ag p/Esquivar de ataques curtos; 40k de Ag p/Saltar escapando de ataques exceto Globais; 55k de Ag p/Quebrar defesa do alvo impedindo bloqueios; 45k de Ag p/Desviar de ataques longos; 35k de Ag p/Correr até alvo escapando de ataques até rank 4 e contra atacando com a velocidade dobrada}.||.1x</p>
            <p>(2kk de Ag e Atk exigido pra uso)</p>
            <p>Preço: 15.000.000</p>
            
            <hr>
            <p>Punho Forte</p>
            <p>Rank: SS</p>
            <p>Estilo de Luta</p>
            <p>Ag p/Assumir o estilo: 220.000</p>
            <p>|| O Punho Forte (剛拳, Gōken) é o estilo de luta característico de Might Guy e Rock Lee, cujo objetivo é causar danos externos e quebrar ossos. Este estilo de luta envolve esmagar o seu adversário, e geralmente é usado somente por shinobi extremamente poderosos e dominadores em seus atributos físicos. { Dano = atributo ataque + 10kk; Movimentos — Rank 2} 🥊 {Cada atk desse estilo incapacita o alvo por 1 turno se pego; 90k de Ag p/Soco; 120k de Ag p/Chute Alto; 100k de Ag p/Chute lateral; 200k de Ag p/Mover-se rapidamente contra o alvo ou escapar de ataques; 340k de Ag p/Série de chutes e socos com dano ilimitado; 150k de Ag p/Bloqueio que ignora ataques Letais; 180k de Ag p/Saltar escapando de ataques até o rank 2 exceto globais/Ilimitados; 110k de Ag p/Gancho; 460k de Ag p/Chute que afeta o vigor do alvo removendo todo o Ag que ele tenha; 520k de Ag p/Chute esmagador que incapacita o alvo até o fim da luta caso ele não tenha Regeneração}.|| 1x</p>
            <p>Usuários: Rock Lee, Mighty Guy, Metal Lee, Sasuke e Naruto</p>
            <p>Preço: 350.000.000</p>

            <hr>
            <p>Estilo De Luta Sábio (Ofensivo)</p>
            <p>Rank: SS</p>
            <p>Atk: Suplementar</p>
            <p>Ag p/Assumir estilo: 30.000</p>
            <p>|| Focado na ofensiva esse estilo de luta envolve o uso do senjutsu reforçando totalmente os taijutsus que seriam considerado simples como um soco ou chute. {O alvo atingido fica incapaz de atacar por 1 turno se for pego; Ataques feitos nesse estilo de luta são extremamente rápidos [Rank 3] e objetivos; 5k de Ag p/Distrair o alvo antes de qualquer atk fazendo que o atk precise ser prevenido; 10k de Ag p/ Soco com dano letal forte o suficiente para afastar o inimigo; ao custo de 30k de Ag o usuário agarra e arremessa seu oponente à longas distâncias tirando o turno do alvo; 90k de Ag p/Sequência de socos finalizando com um chute incapacitante causando dano 5x letal; 25k de Ag p/Chute com dano letal}.||1x</p>
            <p>Preço: 45.000.000</p>
            <p>Usuários: Apenas Dominadores do Modo Sábio do Sapos.</p>
            
            <hr>
            <p>Estilo De Luta Sábio (Defensivo)</p>
            <p>Rank: SS</p>
            <p>Def: Suplementar</p>
            <p>Ck p/ativar: 40.000</p>
            <p>|| Focado na defesa. Com as melhoras significativas dadas através do modo Sábio, o usuário ganha mais velocidade, resistência e percepção. Esquivas, bloqueios e defesas sólidas são estabelecidas, permitindo ao praticante esquivar ataques inimigos no último momento possível. {10k de Ag p/Bloqueio que defende Taijutsus não surpresas e sem adição de teleportes; 40k de Ag p/Desviar um atk curto até o rank 2 e iniciar um contra ataque com a velocidade dobrada; 35k de Ag p/Saltar escapando de atks até o rank 3 exceto dimensionais; 55k de Ag p/Desviar um atk longo ou letal baseado em kenjutsu até o rank 3}.||1x</p>
            <p>Preço: 50.000.000</p>
            <p>Usuários: Apenas Dominadores do Modo Sábio.</p>
            
            <hr>
            <p>Taijutsus Fortes</p>
            <p>Rank: SS</p>
            <p>Estilo de luta</p>
            <p>Ag p/Assumir o estilo: 40.000</p>
            <p>|| Movimentos de luta focado na força. Exige grande força e grande Agilidade. { Dano = atributo ataque + 4kk; Movimentos — Rank 3; bônus: Enfraquece a defesa removendo 4kk de Def a cada ataque bloqueado ou pego} 🥊 {40k de Ag p/Soco que rompe bloqueios; 50k de Ag p/Chute que rompe barreiras até SS; 75k de Ag p/Soco Invertido; 80k de Ag p/Bloqueio forte capaz de defender ataques Letais; 130k de Ag p/Bloquear um atk curto; imobilizar e atacar com um soco (Se pego apenas jutsus com classificação "Teleporte" escapa); 85k de Ag p/Chute nas articulações da perna que remove 3kk de Ag e imobiliza o alvo se não tiver regeneração; 90k de Ag p/ Chute que incapacita o alvo de se mover por 2 turnos; 120k de Ag p/Chute transversal que incapacita o alvo até o fim da luta se o mesmo não tiver Regeneração; 200k de Ag p/Soco com dano Ilimitado].||1x</p>
            <p>(8kk de Ag exigido pra uso)</p>
            <p>Usuários livres: Sakura, Tsunade e Sarada</p>
            <p>Preço: 200.000.000</p>
            
            <hr>
            <p>Taijutsus Rápidos</p>
            <p>Rank: S</p>
            <p>Estilo de luta</p>
            <p>Ag p/Assumir estilo: 70.000</p>
            <p>|| Movimentos de Luta focado na Agilidade. { Movimentos — Rank 2} 🥊 {Escolha a opção: +70k de Ag para Chute com dano Letal capaz de afastar o alvo impedindo qualquer atk curto abaixo do rank 2; +20k de Ag para Soco com dano letal; +100k de Ag para Chute Alto com dano letal; +10k de Ag para evadir um atk curto não global até o Rank 2 e contra atacar com a velocidade 1 rank acima; +50k de Ag para Evadir Ataques não globais até o rank 2; +80k de Ag para saltar escapando de ataques globais não dimensionais até o rank 2; +25k de Ag para bloquear Taijutsus SS abaixo do rank 2; +40k de Ag para correr até o alvo escapando de qualquer contra ataque do rank 2 para baixo e atacando o alvo iniciando um contra ataque}.||1x</p>
            <p>(12kk de Ag exigido pra uso)</p>
            <p>Preço: 100.000.000</p>

            <hr>
            <p>Taijutsus Equilibrados</p>
            <p>Rank: S</p>
            <p>Estilo de luta</p>
            <p>Ag p/Assumir o estilo: 50.000</p>
            <p>|| Movimentos de lutas focados no contra ataque. Qualquer movimento de luta desse estilo depende de um atk para ser executado, são rápidos e decisivos. {Dano = atributo ataque; Movimentos são Rank 3 a longa distância e rank 2 a curto alcance} 🥊 {25k de Ag p/Um movimento de locomoção, que permite aproximar-se a curta distância podendo evitar o combo inimigo ou afastar-se do oponente a longa distância evitando qualquer ataque curto não surpresa; 80k de Ag p/Golpe no olho que incapacita o uso de Dojutsus; 75k de Ag p/ usar o corte: habilidade que intercepta o alvo impedindo seu combo (Requer execução de bloqueio, curto alcance, não impede Genjutsus); 30k de Ag p/Imobilizar o alvo por 1 turno com golpe na barriga; 50k de Ag p/Soco rápido que impede execução de outro Taijutsu de rank inferior; 45k de Ag p/Esquiva veloz que escapa de ataques curtos; 35k de Ag p/Chute que afasta o alvo.}.||1x</p>
            <p>{17kk de Def e atbs acima de 12kk exigidos pra uso}</p>
            <p>Preço: 70.000.000</p>
            
            <hr>
            <p>Taijutsu Balanceados</p>
            <p>Rank: S</p>
            <p>Estilo de Luta</p>
            <p>Ag p/Assumir o estilo: 120.000</p>
            <p>|| Movimentos rápidos que exigem muita agilidade para encaixar golpes. {Dano = atributo ataque; Movimentos são Rank 3} 🥊 {50k de ag p/Gancho; 70k de ag p/giro e chute para baixo; 90k de ag p/cutovelada; 60k de Ag p/joelhada no estômago que incapacita o inimigo de movimentos por 1 turno; 80k de Ag p/soco no estômago sequêncial; 50k de ag p/desvio lateral que escapa de qualquer atk de rank 3 que não seja global ou dimensional; 150k de ag p/super salto que desvia de qualquer ataque que não seja dimensional; 45k de Ag p/Esquivar um atk curto até o rank 3 e atacar com a velocidade 1 rank acima}.||1x</p>
            <p>{15kk de Ag e Atk exigidos}</p>
            <p>Preço: 700.000.000</p>
            
            <hr>
            <p>Taijutsus Leves</p>
            <p>Rank: S</p>
            <p>Estilo de luta</p>
            <p>Ag p/Assumir o Estilo: 100.000</p>
            <p>|| Movimentos de lutas ágeis e defensivos, faz pouco uso dos punhos. {Dano = atributo ataque; Movimentos são Rank 2} 🥊{90k de Ag p/Chute Alto; 330k de Ag p/chute triplo que causa 3x o dano; 115k de Ag p/Chute duplo que causa dano duplo ou atinge 2 alvos; 220k de Ag p/Cintilar para ao lado do alvo e chuta-lo deixando-o incapacitado por 1 turno; 190k de Ag p/Chute giratório que acerta quem fizer ctt curto; 30k de Ag p/Soco, 180k de Ag p/Chute capaz de romper barreiras exceto as globais; 70k de Ag p/Saltar escapando de ataques até o rank 2 exceto Dimensional; 50k de Ag p/Chute horizontal; 140k de Ag p/Chute que leva o alvo para o ar deixando-o incapaz de defender o próximo atk; 75k de Ag p/Esquivar ataques curtos e médios até o rank 2; 450k de Ag p/Movimentos rápidos semelhante a cintilação que confundem inimigos sem sensoriais rank SS ou Dojutsus S agindo como Def e Atk ao escapar e iniciar o combo}.||1x</p>
            <p>{Atbs acima de 17kk exigidos}</p>
            <p>Preço: 560.000.000</p>
            
            <hr>
            <p class="font-bold text-center text-blue-400">Estilo de Luta Pessoal</p>
            <p>O Estilo de Luta é uma habilidade ativa adquirida através de treinamento intenso, experiência em combate e adaptação contínua ao campo de batalha. Diferente de técnicas comuns, um Estilo de Luta não é simplesmente aprendido — ele é forjado, moldado pelos movimentos, instintos e decisões únicas de seu usuário.</p>
            <p>Ao treinar repetidamente com uma arma específica ou ao aperfeiçoar o combate corpo a corpo, o usuário começa a desenvolver padrões próprios de ataque, defesa e movimentação. Com o tempo, esses padrões deixam de ser apenas ações isoladas e se tornam um sistema coeso — um estilo que reflete sua individualidade, sua mentalidade e sua forma de lutar.</p>
            <p>Uma vez adquirido, o Estilo de Luta se torna uma habilidade ativa, podendo ser ativado conscientemente durante o combate. Quando ativo, ele concede benefícios específicos, que podem incluir:</p>
            <ul class="list-disc ml-6 space-y-1">
                <li>Bônus em atributos relacionados ao combate, como Força, Velocidade ou Reflexos (Relativo e quase nunca vai conseguir na base, sendo mais provável nos golpes do estilo)</li>
                <li>Acesso a técnicas exclusivas que só podem ser usadas dentro daquele estilo</li>
            </ul>
            <p>Cada Estilo de Luta é único. Mesmo que dois usuários utilizem a mesma arma, seus estilos serão diferentes, pois são resultado direto de suas experiências, limitações e evolução pessoal, entretanto existe um padrão de legenda.</p>
            <p>O Estilo de Luta evolui junto com o usuário. Quanto mais ele é utilizado em combates reais e treinamentos extremos, mais poderoso, eficiente e mortal ele se torna. O personagem pode ter até 2 estilos, seja eles dois estilos armados ou 2 estilos de combate desarmado, pode ter 1 estilo armado e 1 estilo desarmado também, mas pode ter apenas 2 tendo que desenvolver cada um individualmente.</p>
            
            <p class="font-bold text-blue-400 mt-4">⚔️ Maestria em Estilos de Luta</p>
            <p>Nesse sistema, você aprenderá a aprimorar seu estilo de luta, tornando-o cada vez mais forte e moldado ao seu personagem, para que se encaixe melhor no seu estilo de jogo.</p>
            
            <div class="bg-base-200 p-4 rounded-lg my-4 space-y-4">
                <div>
                    <p class="font-bold text-lg text-primary">1ª Etapa:</p>
                    <p>• Escreva um texto de 15 linhas, explicando como seu personagem está dominando o estilo, descobrindo novos ataques e se familiarizando com ele.</p>
                    <p>+ Legenda base da sua técnica, seguir modelo abaixo</p>
                    <div class="bg-base-300 p-3 rounded-md mt-2 font-mono text-sm opacity-80">
                        <p>[NOME]</p>
                        <p>Rank:</p>
                        <p>Estilo de luta</p>
                        <p>Ag p/Assumir o estilo: 150.000</p>
                        <p>|| Texto do seu estilo o descrevendo. { Dano = atributo ataque ou arma; Movimentos — Rank } 🌧️ { todos os golpes e movimentos básicos do seu estilo de luta } 🌧️ [ Estilo de seu nome por exemplo ].|| 1x</p>
                        <p>Obs: Seus chutes é um exemplo</p>
                    </div>
                </div>

                <div class="divider my-1"></div>

                <div>
                    <p class="font-bold text-lg text-primary">2ª Etapa:</p>
                    <p>Derrote 3 adversários utilizando apenas do estilo de luta para finalizar eles.</p>
                    <p class="text-success">+1 Golpe (pode criar um golpe)</p>
                </div>

                <div class="divider my-1"></div>

                <div>
                    <p class="font-bold text-lg text-primary">3ª Etapa:</p>
                    <p>Derrote um player de patente superior utilizando apenas 1 habilidade do estilo de luta.</p>
                    <p class="text-success">+1 Golpe (pode criar um golpe).</p>
                </div>

                <div class="divider my-1"></div>

                <div>
                    <p class="font-bold text-lg text-primary">4ª Etapa:</p>
                    <p>Escreva um texto de 40 linhas, narrando o treinamento máximo do seu estilo de luta.</p>
                    <p>O texto deve citar todas as suas técnicas e mostrar como você se especializa nelas, utilizando o ambiente de treino a seu favor.</p>
                    <p class="text-success">+2 Golpes (pode criar um golpe)</p>
                </div>
                
                <div class="divider my-1"></div>

                <div>
                    <p class="font-bold text-lg text-primary">Domínio 100%:</p>
                    <p>Como devem ser os golpes? Eles tem que ser apenas uma legenda única, sendo de no máximo 5 usos e no mínimo 3 usos, não pode ser passiva nem mesmo técnicas ativas, são golpes especiais pra se usar no combate.</p>
                    <p class="font-semibold mt-2">Exemplo:</p>
                    <div class="bg-base-300 p-3 rounded-md mt-2 font-mono text-sm opacity-80">
                        <p>Ittoryu Iai: Shishi Sonson</p>
                        <p>Rank: S</p>
                        <p>Atk: 3xLetal</p>
                        <p>Ag p/Uso: 40.000</p>
                        <p>|| ( 一刀流 ｢居合｣ 獅子歌歌, significa literalmente "Estilo de Uma Espada: Canção do Leão"?): Colocando a espada embainhada na posição vertical, o atacante de forma rápida desembainha, ataca e embainha sua espada, em uma velocidade que ultrapassa todos os limites com uma força capaz de cortar até mesmo aço. (Considerado rank 2; Pela alta velocidade, é necessário habilidades sensoriais para conseguir desviar).|| 5x</p>
                    </div>
                </div>
            </div>
            
            <hr>
            <p class="font-bold text-center text-error">⚖️ Regras e Funcionamento ⚖️</p>
            <p>Não é possível upar a Rank dos Taijutsu acima de Rank SS, no entanto, é possível upar o Estilo de luta pessoal até o Rank SSS através de treino.</p>
            
            <p class="font-semibold text-warning mt-4">Nivelamento:</p>
            <ul class="list-disc ml-6">
                <li>Jounnins podem dominar até 3 Taijutsu</li>
                <li>Chunnins podem dominar até 2.</li>
                <li>Gennins apenas 1.</li>
            </ul>
            <p>Pode substituir o Taijutsu pelo estilo, seguindo a mesma limitação, ou alternar entre eles se for Chu+.</p>
            
            <p class="font-semibold text-warning mt-4">⚖️ Balanceamento do Estilo próprio ⚖️</p>
            <ul class="list-disc ml-6">
                <li>Rank Máximo Jounnin: 2; Chunnin: 3; Gennin: 4</li>
                <li>Qualquer Um Pode Fazer; Apenas 10 Movimentos São Permitidos</li>
                <li>Caso Troque de PP, Necessita Pagar 1b Pra Recuperar o Estilo Próprio</li>
            </ul>
            <!-- fim conteúdo -->`

html = html.replace(/<!-- Conteúdo aqui -->[\s\S]*<!-- fim conteúdo -->/, replacement);
fs.writeFileSync(htmlPath, html);
console.log("Updated html!");
