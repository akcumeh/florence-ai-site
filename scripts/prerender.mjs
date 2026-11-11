import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const { render, structuredData } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href);

const templatePath = path.join(distDir, 'index.html');
const template = await readFile(templatePath, 'utf-8');

const appHtml = render('/');
const jsonLd = structuredData
    .map((data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');

if (!template.includes('<div id="root"></div>')) {
    throw new Error('Root placeholder not found in dist/index.html');
}

const html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('</head>', `    ${jsonLd}\n</head>`);

await writeFile(templatePath, html);
await rm(serverDir, { recursive: true, force: true });

console.log(`Prerendered / (${appHtml.length} chars of HTML, ${structuredData.length} JSON-LD blocks)`);
