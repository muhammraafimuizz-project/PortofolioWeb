// Server lokal sederhana: membangun situs, menyajikan dist/, dan membangun ulang saat berkas berubah.
// Jalankan: npm run dev  (lalu buka http://localhost:4321). Muat ulang browser setelah mengubah isi.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');
const port = Number(process.env.PORT) || 4321;

const build = () => spawnSync(process.execPath, ['build.mjs'], { cwd: root, stdio: 'inherit' }).status === 0;
build();

let timer;
for (const dir of ['content', 'lib', 'templates', 'assets', 'public']) {
  try {
    watch(path.join(root, dir), { recursive: true }, () => {
      clearTimeout(timer);
      timer = setTimeout(build, 200);
    });
  } catch {
    /* pemantauan folder tidak didukung di sistem ini; bangun ulang manual dengan npm run build */
  }
}

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

async function resolveFile(urlPath) {
  let p = path.normalize(decodeURIComponent(urlPath));
  let file = path.join(dist, p);
  if (!file.startsWith(dist)) return null;
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

http
  .createServer(async (req, res) => {
    const urlPath = new URL(req.url, 'http://localhost').pathname;
    const file = await resolveFile(urlPath);
    const status = file ? 200 : 404;
    const target = file || path.join(dist, '404.html');
    try {
      const data = await readFile(target);
      res.writeHead(status, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    } catch {
      res.writeHead(500);
      res.end('Belum ada hasil build. Jalankan: npm run build');
    }
  })
  .listen(port, () => console.log(`Buka http://localhost:${port}`));
