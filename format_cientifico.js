const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'pages/sistemas/sistema_cientifico.html');
let text = fs.readFileSync(htmlPath, 'utf8');

// If the file already looks like HTML (has <html), don't break it, just exit.
// But we know it's raw text from the view_file.

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
    <title>Sistema Científico - Naruto RPG STAR</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@5/themes.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <!-- NavBar -->
    <script src="assets/navbar.js"></script>
    <!-- fim NavBar -->

    <main class="p-8 bg-[url(assets/images/sistema_cientifico.webp)] bg-cover bg-no-repeat bg-fixed min-h-screen bg-center pt-20">
        <div class="bg-base-100 rounded-xl p-8 mt-10 max-w-4xl mx-auto shadow-lg text-base-content/90">
`;

let inList = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        continue;
    }

    if (line === '──────────────────────────') {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <div class="divider my-6"></div>\n`;
        continue;
    }

    if (line.startsWith('Sistema Científico —')) {
        htmlOut += `            <h1 class="text-3xl font-black text-center mb-4 uppercase tracking-tighter text-blue-500">🧪 ${line} 🧪</h1>\n`;
        continue;
    }

    // Check for H2 (emoji + text without 🔹)
    if (/^[📚🧬☣️🐍🏚️🧫⏳⚠️⚙️🔐⚖️]/.test(line)) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <h2 class="text-2xl font-bold mt-8 mb-4 text-primary">${line}</h2>\n`;
        continue;
    }

    // Check for H3 (starts with 🔹)
    if (line.startsWith('🔹')) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <h3 class="text-xl font-bold mt-6 mb-2 text-secondary">${line}</h3>\n`;
        continue;
    }

    // Check for lists
    if (line.startsWith('•')) {
        if (!inList) {
            htmlOut += `            <ul class="list-disc ml-6 space-y-1 mb-4">\n`;
            inList = true;
        }
        htmlOut += `                <li>${line.substring(1).trim()}</li>\n`;
        continue;
    }

    if (line.endsWith(';')) {
        if (!inList) {
            htmlOut += `            <ul class="list-disc ml-6 space-y-1 mb-4">\n`;
            inList = true;
        }
        htmlOut += `                <li>${line}</li>\n`;
        continue;
    }

    // Bold some keywords
    if (line.startsWith('Requisitos:') || line.startsWith('Permite:') || line.startsWith('Desbloqueia:') || line.startsWith('Custo:') || line.startsWith('Tempo de') || line.startsWith('Foco em:')) {
        if (inList) {
            htmlOut += `            </ul>\n`;
            inList = false;
        }
        htmlOut += `            <p class="font-bold text-accent mt-3 mb-1">${line}</p>\n`;
        continue;
    }

    // Normal paragraph
    if (inList) {
        htmlOut += `            </ul>\n`;
        inList = false;
    }
    htmlOut += `            <p class="mb-2 text-justify">${line}</p>\n`;
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
