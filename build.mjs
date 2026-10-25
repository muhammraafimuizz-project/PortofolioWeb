// Pembuat situs statis tanpa dependensi. Jalankan: node build.mjs  (hasil di folder dist/)
import { rm, mkdir, cp, writeFile, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import { site } from './content/site.mjs';
import { projects } from './content/projects.mjs';
import { assets } from './lib/html.mjs';
import { homePage } from './templates/home.mjs';
import { projectsPage, projectPage } from './templates/projects.mjs';
import { works3dPage } from './templates/works3d.mjs';
import { notFoundPage } from './templates/notfound.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');

async function write(rel, content) {
  const file = path.join(dist, rel);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content);
}

async function main() {
  await rm(dist, { recursive: true, force: true });
  await mkdir(dist, { recursive: true });

  // Aset statis (gambar, favicon, dll.) dan berkas CSS/JS.
  await cp(path.join(root, 'public'), dist, { recursive: true });
  const css = await readFile(path.join(root, 'assets/style.css'));
  const js = await readFile(path.join(root, 'assets/app.js'));
  assets.v = createHash('sha1').update(css).update(js).digest('hex').slice(0, 8);
  await write('style.css', css);
  await write('app.js', js);

  const pages = [
    ['index.html', homePage()],
    ['it/index.html', projectsPage()],
    ['3d/index.html', works3dPage()],
    ['404.html', notFoundPage()],
    ...projects.map((p) => [`it/${p.slug}/index.html`, projectPage(p)]),
  ];
  for (const [rel, html] of pages) await write(rel, html);

  // robots.txt dan sitemap.xml (sitemap hanya jika alamat situs sudah diisi).
  const base = site.url.replace(/\/$/, '');
  if (base) {
    const urls = ['/', '/it/', '/3d/', ...projects.map((p) => `/it/${p.slug}/`)];
    await write(
      'sitemap.xml',
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map((u) => `  <url><loc>${base}${u}</loc></url>`)
        .join('\n')}\n</urlset>\n`,
    );
    await write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
  } else {
    await write('robots.txt', 'User-agent: *\nAllow: /\n');
  }

  console.log(`Selesai: ${pages.length} halaman di dist/ (aset v${assets.v})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
