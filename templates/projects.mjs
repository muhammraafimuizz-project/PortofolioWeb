import { projects } from '../content/projects.mjs';
import { testCases, findings } from '../content/tables.mjs';
import { esc, img, zoomImg, passChip, prioChip, imageInfo } from '../lib/html.mjs';
import { layout } from './layout.mjs';

// Baris proyek, dipakai di beranda dan halaman daftar proyek.
export function projectRow(p) {
  const c = p.cover;
  return `<article class="proj" data-kind="${esc(p.kind)}">
  <a class="proj-media" href="/it/${p.slug}/" tabindex="-1" aria-hidden="true">${img(c.key, { alt: '', style: `object-position:${c.pos || 'top left'}` })}</a>
  <div class="proj-text">
    <h3><a href="/it/${p.slug}/">${esc(p.title)}</a></h3>
    <ul class="tags" aria-label="Kategori">${[p.kind, ...p.tags].map((t) => `<li class="tag">${esc(t)}</li>`).join('')}</ul>
    <p>${esc(p.short)}</p>
    <a class="more" href="/it/${p.slug}/">Baca studi kasus<span class="sr-only">: ${esc(p.title)}</span></a>
  </div>
</article>`;
}

function casesTable(caption) {
  return `<div class="tblwrap" tabindex="0" role="region" aria-label="${esc(caption)}">
  <table class="tbl">
    <caption>${esc(caption)}</caption>
    <thead><tr><th scope="col">Kode</th><th scope="col">Skenario</th><th scope="col">Langkah</th><th scope="col">Hasil yang diharapkan</th><th scope="col">Status</th></tr></thead>
    <tbody>${testCases
      .map(([id, s, step, exp]) => `<tr><td>${esc(id)}</td><td>${esc(s)}</td><td>${esc(step)}</td><td>${esc(exp)}</td><td>${passChip()}</td></tr>`)
      .join('')}</tbody>
  </table>
</div>`;
}

function findingsTable(caption) {
  return `<div class="tblwrap" tabindex="0" role="region" aria-label="${esc(caption)}">
  <table class="tbl">
    <caption>${esc(caption)}</caption>
    <thead><tr><th scope="col">Prioritas</th><th scope="col">Temuan</th><th scope="col">Hasil perbaikan</th><th scope="col">Uji ulang</th></tr></thead>
    <tbody>${findings
      .map(([prio, f, r]) => `<tr><td>${prioChip(prio)}</td><td>${esc(f)}</td><td>${esc(r)}</td><td>${passChip()}</td></tr>`)
      .join('')}</tbody>
  </table>
</div>`;
}

function block(b) {
  switch (b.type) {
    case 'p':
      return `<p>${esc(b.text)}</p>`;
    case 'list':
      return `<ul>${b.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
    case 'steps':
      return `<ol class="steps">${b.items.map(([t, d]) => `<li><strong>${esc(t)}</strong>${esc(d)}</li>`).join('')}</ol>`;
    case 'figure':
      return `<figure class="fig">${zoomImg(b.key, { alt: b.alt, caption: b.caption })}<figcaption>${esc(b.caption)}</figcaption></figure>`;
    case 'figures':
      return `<div class="figrow">${b.items
        .map((i) => `<figure class="fig fig-narrow">${zoomImg(i.key, { alt: i.alt, caption: i.caption })}<figcaption>${esc(i.caption)}</figcaption></figure>`)
        .join('')}</div>`;
    case 'note':
      return `<p class="note">${esc(b.text)}</p>`;
    case 'link':
      return `<p><a class="more" href="${esc(b.href)}">${esc(b.text)}</a></p>`;
    case 'testcases':
      return casesTable(b.caption);
    case 'findings':
      return findingsTable(b.caption);
    default:
      throw new Error(`Jenis blok tidak dikenal: ${b.type}`);
  }
}

export function projectsPage() {
  const kinds = [...new Set(projects.map((p) => p.kind))];
  const body = `<section class="wrap page-head" aria-labelledby="judul">
  <h1 id="judul">Proyek</h1>
  <p class="summary">Pengujian nyata, website, dan automation. Setiap proyek punya studi kasus: apa yang dikerjakan, caranya, dan hasilnya.</p>
</section>
<section class="wrap listing" aria-label="Daftar proyek">
  <div class="filters" role="group" aria-label="Filter proyek" data-filters hidden>
    <button type="button" data-filter="Semua" aria-pressed="true">Semua</button>
    ${kinds.map((k) => `<button type="button" data-filter="${esc(k)}" aria-pressed="false">${esc(k)}</button>`).join('')}
  </div>
  <p class="count" data-count aria-live="polite">${projects.length} proyek</p>
  <div class="projlist">${projects.map(projectRow).join('')}</div>
</section>`;
  return layout({
    title: 'Proyek',
    description: 'Studi kasus pengujian toko online, website open trip dengan panel admin, asisten AI di n8n, dan bot Telegram pencatat pengeluaran.',
    path: '/it/',
    current: '/it/',
    body,
  });
}

export function projectPage(p) {
  const links = p.links.length
    ? `<p class="btns">${p.links.map((l) => `<a class="btn btn-primary" href="${esc(l.href)}" rel="noopener" target="_blank">${esc(l.label)}<span class="sr-only"> (tab baru)</span></a>`).join('')}</p>`
    : '';
  const others = projects.filter((x) => x.slug !== p.slug);
  const sections = p.sections
    .map(
      (s, i) => `<section class="section wrap" aria-labelledby="s${i}">
  <div class="rail"><div class="rail-inner"><h2 id="s${i}">${esc(s.heading)}</h2></div></div>
  <div class="prose">${s.blocks.map(block).join('\n')}</div>
</section>`,
    )
    .join('\n');

  const body = `<section class="wrap page-head" aria-labelledby="judul">
  <p class="crumb"><a href="/it/">Proyek</a></p>
  <h1 id="judul">${esc(p.title)}</h1>
  <p class="summary">${esc(p.summary)}</p>
  <dl class="meta">${p.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
  ${links}
</section>
${sections}
<section class="section wrap" aria-labelledby="lain">
  <div class="rail"><div class="rail-inner"><h2 id="lain">Proyek lain</h2></div></div>
  <div class="prose"><ul class="plain">${others.map((o) => `<li><a href="/it/${o.slug}/">${esc(o.title)}</a></li>`).join('')}</ul></div>
</section>`;

  return layout({ title: p.title, description: p.summary, path: `/it/${p.slug}/`, current: '/it/', body });
}

export { imageInfo };
