import { site } from '../content/site.mjs';
import { esc, assets } from '../lib/html.mjs';

const SUN =
  '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.9 1.9M16.8 16.8l1.9 1.9M18.7 5.3l-1.9 1.9M7.2 16.8l-1.9 1.9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const MOON =
  '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

const NAV = [
  ['Proyek', '/it/'],
  ['Desain 3D', '/3d/'],
  ['Kontak', '/#kontak'],
];

export function layout({ title, description, path, body, current = '' }) {
  const fullTitle = title === site.name ? `${site.name}, ${site.role}` : `${title} | ${site.name}`;
  const base = site.url.replace(/\/$/, '');
  const canonical = base ? `${base}${path}` : '';
  const ogImage = base ? `${base}/og.png` : '/og.png';
  const links = Object.entries(site.links).filter(([, v]) => v);

  const jsonLd = base
    ? `<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.name,
        jobTitle: 'QA tester',
        url: base,
        sameAs: links.map(([, v]) => v),
      }).replace(/</g, '\\u003c')}</script>`
    : '';

  const nav = NAV.map(([label, href]) => `<a href="${href}"${current === href ? ' aria-current="page"' : ''}>${label}</a>`).join('');

  return `<!doctype html>
<html lang="id" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ''}
<meta name="theme-color" content="#EDF0F5">
<meta property="og:type" content="website">
<meta property="og:locale" content="id_ID">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
${canonical ? `<meta property="og:url" content="${esc(canonical)}">` : ''}
<meta property="og:image" content="${esc(ogImage)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,500..900&family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap">
<script>try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="stylesheet" href="/style.css?v=${assets.v}">
<script src="/app.js?v=${assets.v}" defer></script>
${jsonLd}
</head>
<body>
<a class="skip" href="#main">Lewati ke konten</a>
<header class="site-header">
  <div class="wrap bar">
    <a class="brand" href="/" aria-label="${esc(site.name)}, beranda">${esc(site.short)}</a>
    <nav class="nav" aria-label="Utama">${nav}</nav>
    <button class="theme" type="button" data-theme-toggle aria-label="Ganti tema terang atau gelap">
      <span class="i-sun">${SUN}</span><span class="i-moon">${MOON}</span>
    </button>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap foot">
    <p>&copy; ${new Date().getFullYear()} ${esc(site.name)}</p>
    <p><a href="#main">Kembali ke atas</a></p>
  </div>
</footer>
<dialog class="lightbox" aria-label="Gambar diperbesar">
  <form method="dialog"><button class="lb-close" aria-label="Tutup gambar">Tutup</button></form>
  <img alt="">
  <p class="lb-cap"></p>
</dialog>
</body>
</html>
`;
}
