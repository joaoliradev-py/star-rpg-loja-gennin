# Comando /loja

Sempre que o usuário enviar `/loja` (ou indicar uma nova loja com este comando):

1. **Estrutura Padrão da Loja**:
   - Template HTML5 completo com `<base href>` dinâmico (GitHub Pages vs Local).
   - Inclusão do DaisyUI, Tailwind e `assets/style.css`.
   - Favicon: `assets/images/favicon.svg`.
   - Script da Navbar: `<script src="assets/navbar.js"></script>`.
   - Main container: `<main class="p-8 bg-[url(assets/images/vale_do_fim.webp)] bg-cover bg-no-repeat bg-fixed min-h-screen bg-center">` com `<div class="bg-base-100 rounded-xl p-6 mt-40 max-w-3xl mx-auto shadow-lg flex flex-col gap-7">`.
   - Título `<h1>` azul centralizado e Subtítulo `<h2>` "Loja de [Nome]" (para ativação automática do botão "Copiar loja").
   - `<div class="divider"></div>`.
   - Biografia do personagem seguida de `<hr>`.
   - Técnicas/Jutsus separados por `<hr>`.
   - **Conteúdo 100% fiel**: Manter o texto, emojis (📜, etc.), valores e formatação exatamente iguais ao fornecido.

2. **Isolamento de Restrições**:
   - As restrições de patente (Chunnin, etc.) NUNCA devem ficar soltas em `<p>` normais.
   - Devem sempre ser encapsuladas em:
     ```html
     <div id="restricoes" class="restricoes mt-4 p-4 rounded-xl bg-base-200/50 border border-base-300 flex flex-col gap-2">
         <p class="font-bold text-red-500 mb-1">*》Restrições Chunnins:*</p>
         <p>• [Técnica 1]</p>
         <p>• [Técnica 2]</p>
     </div>
     ```

3. **Atualização da Lista de Personagens**:
   - Localizar o card do personagem em `pages/lista_personagens-chu_jou.html` (ou lista correspondente).
   - Substituir o `<button disabled ...>Em Breve</button>` pelo link ativo:
     `<a href="pages/lojas_chu_jou/[letra]/[arquivo].html" class="btn btn-primary btn-xs w-full rounded-md mt-1">Loja</a>`.
   - O filtro preto e branco (grayscale) será removido automaticamente pelo CSS ao retirar o botão desabilitado.
