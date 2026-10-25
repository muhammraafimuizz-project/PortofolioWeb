import { works3d, intro3d } from '../content/works3d.mjs';
import { esc, zoomImg } from '../lib/html.mjs';
import { layout } from './layout.mjs';

export function works3dPage() {
  const items = works3d
    .map(
      (w, i) => `<section class="work wrap" aria-labelledby="w${i}">
  <div class="work-media gridbg${w.images.length > 1 ? ' two' : ''}">${w.images.map((im) => zoomImg(im.key, { alt: im.alt, caption: `${w.title}. ${im.alt}` })).join('')}</div>
  <div class="work-text">
    <h2 id="w${i}">${esc(w.title)}</h2>
    <p class="work-type">${esc(w.type)}</p>
    <p>${esc(w.summary)}</p>
    <dl class="meta">${w.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
    <h3>Yang sudah dikerjakan</h3>
    <ul>${w.did.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
    <h3>Berikutnya</h3>
    <ul>${w.next.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
  </div>
</section>`,
    )
    .join('\n');

  const body = `<section class="wrap page-head" aria-labelledby="judul">
  <h1 id="judul">Desain 3D</h1>
  <p class="summary">${esc(intro3d)}</p>
</section>
${items}`;

  return layout({
    title: 'Desain 3D',
    description: 'Karya latihan SolidWorks: assembly crankshaft dan piston, part bracket penyangga, dan assembly die set, dengan arah manufaktur.',
    path: '/3d/',
    current: '/3d/',
    body,
  });
}
