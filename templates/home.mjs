import { site } from '../content/site.mjs';
import { home } from '../content/home.mjs';
import { experience, otherExperience, education } from '../content/experience.mjs';
import { skillGroups } from '../content/skills.mjs';
import { heroCases } from '../content/tables.mjs';
import { projects } from '../content/projects.mjs';
import { works3d } from '../content/works3d.mjs';
import { esc, img, passChip } from '../lib/html.mjs';
import { layout } from './layout.mjs';
import { projectRow } from './projects.mjs';

function worksheet() {
  return `<div class="sheet" data-sheet>
  <div class="sheet-title">
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M6 3h8l4 4v14H6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 12h6M9 16h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    <span>Lembar kerja</span>
  </div>
  <div class="sheet-panels">
    <div class="sheet-panel" role="tabpanel" id="panel-uji" aria-labelledby="tab-uji">
      <table class="cases">
        <caption class="sr-only">Contoh skenario pengujian toko online dan statusnya</caption>
        <thead><tr><th scope="col">Kode</th><th scope="col">Skenario</th><th scope="col" class="c-exp">Hasil yang diharapkan</th><th scope="col">Status</th></tr></thead>
        <tbody>${heroCases
          .map(([id, s, , exp]) => `<tr><td>${esc(id)}</td><td>${esc(s)}</td><td class="c-exp">${esc(exp)}</td><td data-status>${passChip()}</td></tr>`)
          .join('')}</tbody>
      </table>
      <div class="sheet-foot">
        <span>Contoh, disederhanakan dari dokumen kerja asli.</span>
        <button class="replay" type="button" data-replay>Jalankan ulang</button>
      </div>
    </div>
    <div class="sheet-panel" role="tabpanel" id="panel-model" aria-labelledby="tab-model" hidden>
      <figure class="model">
        ${img('3d-crankshaft', { alt: 'Rakitan crankshaft dengan empat piston, dimodelkan di SolidWorks' })}
        <figcaption>Crankshaft dan piston, SolidWorks. Karya latihan.</figcaption>
      </figure>
      <div class="sheet-foot"><a href="/3d/">Lihat semua karya 3D</a></div>
    </div>
  </div>
  <div class="sheet-tabs" role="tablist" aria-label="Lembar kerja">
    <button type="button" role="tab" id="tab-uji" aria-selected="true" aria-controls="panel-uji">Uji</button>
    <button type="button" role="tab" id="tab-model" aria-selected="false" aria-controls="panel-model" tabindex="-1">Model 3D</button>
  </div>
</div>`;
}

const section = (id, heading, note, content) => `<section class="section wrap" id="${id}" aria-labelledby="h-${id}">
  <div class="rail"><div class="rail-inner"><h2 id="h-${id}">${esc(heading)}</h2>${note ? `<p class="rail-note">${esc(note)}</p>` : ''}</div></div>
  <div class="content">${content}</div>
</section>`;

export function homePage() {
  const cv = site.cv ? `<a class="btn btn-ghost" href="${esc(site.cv)}" download>Unduh CV</a>` : '';
  const nameLines = site.name
    .split(' ')
    .map((w) => `<span>${esc(w)}</span>`)
    .join('');

  const hero = `<section class="wrap hero" aria-labelledby="judul">
  <div class="hero-main">
    <h1 id="judul" class="d1">${nameLines}</h1>
    <p class="lead">${esc(home.lead)}</p>
    <p class="hero-text">${esc(home.body)}</p>
    <div class="btns">
      <a class="btn btn-primary" href="/it/pengujian-maryame/">Baca studi kasus Maryame</a>
      <a class="btn btn-ghost" href="/it/">Semua proyek</a>
      ${cv}
    </div>
  </div>
  ${worksheet()}
</section>`;

  const results = section(
    'hasil',
    'Hasil kerja',
    home.resultsNote,
    `<dl class="facts">${home.results.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`,
  );

  const proj = section('proyek', 'Proyek', home.projectsNote, `<div class="projlist">${projects.map(projectRow).join('')}</div><p class="after"><a class="more" href="/it/">Lihat semua proyek</a></p>`);

  const [main, ...rest] = works3d;
  const threeD = section(
    '3d',
    'Desain 3D',
    'Arah berikutnya: manufaktur.',
    `<div class="teaser">
    <a class="teaser-main gridbg" href="/3d/" tabindex="-1" aria-hidden="true">${img(main.images[0].key, { alt: '' })}</a>
    <div>
      <p class="teaser-text">${esc(home.threeD.text)}</p>
      <ul class="thumbs" aria-hidden="true">${rest.map((w) => `<li class="gridbg">${img(w.images[0].key, { alt: '' })}</li>`).join('')}</ul>
      <a class="btn btn-ghost" href="/3d/">Lihat karya 3D</a>
    </div>
  </div>`,
  );

  const exp = section(
    'pengalaman',
    'Pengalaman',
    `${education.school}, ${education.major}. ${education.year}.`,
    `<ol class="timeline">${experience
      .map(
        (e) => `<li>
      <p class="when">${esc(e.when)}</p>
      <h3>${esc(e.role)}</h3>
      <p class="org">${esc(e.org)}</p>
      <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </li>`,
      )
      .join('')}</ol>
    <p class="other">Pengalaman lain: ${otherExperience.map(esc).join(' ')}</p>`,
  );

  const skills = section(
    'keahlian',
    'Keahlian',
    'Yang bertanda belajar masih dalam proses.',
    `<div class="skillgrid">${skillGroups
      .map(
        (g) => `<div><h3>${esc(g.title)}</h3><ul>${g.items
          .map((i) => `<li><span>${esc(i.name)}</span>${i.learning ? '<span class="chip chip-learn">Belajar</span>' : ''}</li>`)
          .join('')}</ul></div>`,
      )
      .join('')}</div>`,
  );

  const links = Object.entries(site.links).filter(([, v]) => v);
  const contact = section(
    'kontak',
    'Kontak',
    `Berbasis di ${site.location}.`,
    `<p class="contact-text">${esc(home.contact)}</p>
    <p><a class="mail" href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
    <p class="btns"><button class="btn btn-ghost" type="button" data-copy="${esc(site.email)}">Salin email</button><span class="copied" data-copied role="status"></span></p>
    ${links.length ? `<ul class="contact-links">${links.map(([k, v]) => `<li><a href="${esc(v)}" rel="noopener me" target="_blank">${esc(k)}<span class="sr-only"> (tab baru)</span></a></li>`).join('')}</ul>` : ''}`,
  );

  return layout({
    title: site.name,
    description: site.description,
    path: '/',
    current: '/',
    body: [hero, results, proj, threeD, exp, skills, contact].join('\n'),
  });
}
