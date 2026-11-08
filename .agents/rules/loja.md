# Comando /loja

Sempre que o usuário enviar `/loja` (ou indicar uma nova loja com este comando):

## 1. Estrutura Padrão da Loja

Usar **exatamente** o template abaixo como base:

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[NOME DO PERSONAGEM] - Naruto RPG STAR</title>
    <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
    <script>
        const isGH = window.location.hostname.includes('github.io');
        document.write(`<base href="${isGH ? '/star-rpg-loja-gennin/' : '/'}">`);
    </script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/style.css">
</head>

<body>
    <!-- NavBar (Injetada automaticamente) -->
    <script src="assets/navbar.js"></script>
    <!-- fim NavBar -->

    <main class="p-8 bg-[url(assets/images/vale_do_fim.webp)] bg-cover bg-no-repeat bg-fixed min-h-screen bg-center">
        <!-- Container Principal: todos os <p> e <hr> devem ser filhos diretos dele para manter o espaçamento (gap-7) -->
        <div class="bg-base-100 rounded-xl p-6 mt-40 max-w-3xl mx-auto shadow-lg flex flex-col gap-7">

            <!-- Título principal (ajuste a cor: text-blue-500, text-red-500, text-purple-500, etc.) -->
            <h1 class="text-xl font-bold text-blue-500 text-center mb-2">[NOME DO PERSONAGEM]</h1>

            <!-- O navbar.js detecta 'Loja de' no h2 e injeta o botão "Copiar loja" automaticamente -->
            <h2 class="text-base font-semibold text-center text-base-content/60 mb-6">Loja de [NOME DO PERSONAGEM]</h2>
            <div class="divider"></div>

            <!-- (Opcional) Aviso quando as restrições foram perdidas — descomente se necessário:
            <div class="alert alert-warning shadow-md rounded-xl flex gap-2 items-start">
                <span class="text-xl">⚠️</span>
                <div>
                    <p class="font-bold">Loja não segura para uso no momento.</p>
                    <p class="text-sm">Restrições Chunnin perdidas.</p>
                </div>
            </div>
            -->

            <!-- Biografia / Lore do personagem -->
            <p>[Biografia do personagem]</p>
            <hr>

            <!-- JUTSUS E HABILIDADES — separar cada técnica com <hr> -->
            <p>Nome do Jutsu</p>
            <p>Rank: X</p>
            <p>Atk: X / Def: X / Suplementar</p>
            <p>Ck p/uso: X</p>
            <p>|| Descrição. {Efeitos} 🦋 (Escapes). || Nx</p>
            <p>Preço: X</p>
            <hr>

            <!-- Restrições Chunnins — SEMPRE dentro desta div, nunca em <p> soltos -->
            <div id="restricoes"
                class="restricoes mt-4 p-4 rounded-xl bg-base-200/50 border border-base-300 flex flex-col gap-2">
                <p class="font-bold text-red-500 mb-1">*》Restrições Chunnins:*</p>
                <p>• Técnica Restrita 1</p>
                <p>• Técnica Restrita 2</p>
            </div>

        </div>
    </main>
</body>

</html>
```

## 2. Regras de Conteúdo

- **Conteúdo 100% fiel**: manter texto, emojis (📜🦋 etc.), valores e formatação exatamente como fornecido pelo usuário.
- **Atributos e custos individuais**: cada atributo (`Atk:`, `Def:`, `Hp:`, `Ag:`, `Ck:`) e cada custo (`Ck p/uso:`, `Ck p/ativar:`, `Ag p/uso:` etc.) deve ter **sua própria tag `<p>` exclusiva**, nunca compartilhando o mesmo parágrafo.
- Todos os `<p>` e `<hr>` devem ser **filhos diretos** do container principal para respeitar o `gap-7`.
- O botão **"Copiar loja"** é injetado automaticamente pelo `navbar.js` quando detecta `"Loja de"` no `<h2>` — não adicionar manualmente.
- O bloco `alert alert-warning` é **opcional**: só incluir (descomentado) quando as restrições foram perdidas.

## 3. Isolamento de Restrições

As restrições de patente (Chunnin, Jounin, etc.) **NUNCA** ficam em `<p>` soltos — sempre dentro de:
```html
<div id="restricoes" class="restricoes mt-4 p-4 rounded-xl bg-base-200/50 border border-base-300 flex flex-col gap-2">
    <p class="font-bold text-red-500 mb-1">*》Restrições Chunnins:*</p>
    <p>• Técnica 1</p>
</div>
```

## 4. Atualização da Lista de Personagens

- Localizar o card em `pages/lista_personagens-chu_jou.html` (ou lista correspondente).
- Substituir `<button disabled ...>Em Breve</button>` pelo link ativo:
  ```html
  <a href="pages/lojas_chu_jou/[letra]/[arquivo].html" class="btn btn-primary btn-xs w-full rounded-md mt-1">Loja</a>
  ```
- O filtro grayscale some automaticamente via CSS ao remover o botão desabilitado.
