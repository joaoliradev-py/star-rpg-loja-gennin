const fs = require('fs');
const path = require('path');

const txtPath = path.join(process.cwd(), 'pages/sistemas/guerras_ninja.txt');
const htmlPath = path.join(process.cwd(), 'pages/sistemas/guerras_ninja.html');

let text = fs.readFileSync(txtPath, 'utf8');
let lines = text.split('\n');

let htmlOut = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <script>
        const isGH = window.location.hostname.includes('github.io');
        document.write(\`<base href="\${isGH ? '/star-rpg-loja-gennin/' : '/'}">\`);
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grande Guerra Ninja - Naruto RPG STAR</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <!-- NavBar -->
    <script src="assets/navbar.js"></script>
    <!-- fim NavBar -->

    <main class="p-8 bg-[url(assets/images/guerra_ninja.webp)] bg-cover bg-no-repeat bg-fixed min-h-screen bg-center pt-20">
        <div class="bg-base-100 rounded-xl p-8 mt-10 max-w-4xl mx-auto shadow-lg text-base-content/90">
`;

let inList = false;
let titlePrinted = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        continue;
    }

    if (line.startsWith('━━━━━━━━━━━━━━━━━━') || line.includes('═════════════════════════════')) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <div class="divider my-6 opacity-30"></div>\n`;
        continue;
    }

    if (!titlePrinted && line.includes('GRANDE GUERRA NINJA')) {
        htmlOut += `            <h1 class="text-4xl font-black text-center mb-6 uppercase tracking-tighter text-error">⚔️ GRANDE GUERRA NINJA ⚔️</h1>\n`;
        titlePrinted = true;
        continue;
    }

    if (line.startsWith('||') && line.endsWith('||')) {
        htmlOut += `            <div class="bg-base-200 p-4 rounded-lg border-l-4 border-error mb-6">
                <p class="text-justify font-bold italic opacity-90">${line.replace(/\\|\\|/g, '').trim()}</p>
            </div>\n`;
        continue;
    }

    // Checking for H2 sections
    if (/^[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD10-\uDDFF]/.test(line) && !line.startsWith('—') && !line.startsWith('•')) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <h2 class="text-2xl font-bold mt-8 mb-4 text-primary flex items-center gap-2">${line}</h2>\n`;
        continue;
    }

    // Commands or Highlights
    if (line.startsWith('Comando:')) {
        htmlOut += `            <p class="font-bold text-accent mt-3 mb-2">${line}</p>\n`;
        continue;
    }
    if (line.startsWith('/')) {
        htmlOut += `            <div class="bg-neutral text-neutral-content font-mono p-2 rounded w-fit mb-4">${line}</div>\n`;
        continue;
    }
    if (line.startsWith('«')) {
        htmlOut += `            <p class="italic font-serif text-lg opacity-80 text-center my-4 text-warning">${line.replace(/«|»/g, '')}</p>\n`;
        continue;
    }
    if (line.startsWith('🕗')) {
        htmlOut += `            <p class="text-2xl font-mono text-center my-4 font-bold text-error">${line}</p>\n`;
        continue;
    }
    
    // Lists
    if (line.startsWith('•')) {
        if (!inList) {
            htmlOut += `            <ul class="list-disc ml-6 space-y-2 mb-4">\n`;
            inList = true;
        }
        htmlOut += `                <li>${line.substring(1).trim()}</li>\n`;
        continue;
    }

    if (line.startsWith('—')) {
        if (!inList) {
            htmlOut += `            <ul class="list-disc ml-6 space-y-2 mb-4">\n`;
            inList = true;
        }
        htmlOut += `                <li class="text-secondary list-[circle] ml-6">${line.substring(1).trim()}</li>\n`;
        continue;
    }

    // Bold some keywords
    if (line.endsWith(':')) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <p class="font-bold text-accent mt-4 mb-2">${line}</p>\n`;
        continue;
    }

    // Normal paragraph
    if (inList) {
        htmlOut += `            </ul>\n`;
        inList = false;
    }
    htmlOut += `            <p class="mb-3 text-justify font-semibold">${line}</p>\n`;
}

if (inList) {
    htmlOut += `            </ul>\n`;
}

htmlOut += `        </div>
    </main>
</body>
</html>`;

fs.writeFileSync(htmlPath, htmlOut);
console.log("Formatted html written.");
