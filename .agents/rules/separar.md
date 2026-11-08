# Comando /separar

Sempre que o usuário enviar `/separar` (ou solicitar para separar/formatar um texto extraído de PDF ou texto contínuo):

## 1. Objetivo

Textos extraídos de PDF frequentemente perdem quebras de linha e viram um bloco contínuo de texto ("mar de letras").  
A função do `/separar` é reorganizar esse texto bruto inserindo as quebras de linha corretas para que cada elemento fique em sua respectiva linha, respeitando a estrutura padrão do Naruto RPG STAR.

---

## 2. Estrutura Padrão de Separação

Cada jutsu / habilidade deve ter seus campos divididos estritamente linha por linha:

```text
[Nome do Jutsu / Técnica]
[Requisitos ou Notas entre colchetes, se houver — ex: [Necessário...]]
Rank: [Rank]
Atk: [Valor/Tipo]
Def: [Valor/Tipo]
Hp: [Valor]
Ag: [Valor]
Ck: [Valor]
Ck p/ativar: [Valor]
Ck p/turno: [Valor]
Ck p/uso: [Valor]
Ck p/invocar: [Valor]
Ag p/uso: [Valor]
|| [Descrição da técnica]. {[Efeitos]} [Emoji] ([Escapes]). || [Usos]x
Preço: [Valor]
```

---

## 3. Regras de Separação

1. **Atributos NUNCA ficam na mesma linha**:
   - `Atk:`, `Def:`, `Hp:`, `Ag:`, `Ck:` devem sempre ficar cada um em sua própria linha (ou tag `<p>`).
2. **Custos NUNCA ficam na mesma linha de atributos ou de outros custos**:
   - `Ck p/uso:`, `Ck p/ativar:`, `Ck p/turno:`, `Ck p/invocar:`, `Ag p/uso:` etc. ficam sempre em linhas separadas.
3. **Descrição (`|| ... ||`)**:
   - Começa em `||` e vai até `|| [N]x`. Deve ficar em uma única linha/bloco contínuo, preservando chaves `{}`, parênteses `()` e emojis originais.
4. **Preço / Valor**:
   - Fica sempre na linha imediatamente após o fechamento da descrição `|| ... ||` (a menos que haja observação específica).
   - Padronizar para `Preço: [Valor]` com pontuação correta (ex: `10.000.000`).
5. **Requisitos e Condições**:
   - Frases como `[ Necessário ... ]`, `• [ Requer ... ]`, `[ Quando ataca não pode ... ]` devem ficar em suas próprias linhas.
6. **Restrições de Patente**:
   - Manter no final sob `*》Restrições Chunnins:*` (ou patente correspondente), com cada técnica restrita em `• [Nome]`.
7. **Fidelidade Total**:
   - Não alterar valores numéricos, ranks, nomes de técnicas, emojis ou regras do texto original.

---

## 4. Modos de Saída

- **Se o usuário indicar um arquivo (ex: `/separar texto.txt` ou `/separar loja.html`)**:
  - Processar o arquivo indicado aplicando a separação adequada diretamente no arquivo.
- **Se o usuário colar o texto no chat**:
  - Retornar o texto devidamente separado e limpo (ou já estruturado em tags `<p>` e `<hr>` caso o destino seja uma loja HTML).

