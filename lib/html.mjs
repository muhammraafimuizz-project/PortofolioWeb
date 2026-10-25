import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../content/images.json', import.meta.url), 'utf8'));

// Diisi oleh build.mjs: versi aset untuk cache busting.
export const assets = { v: '' };

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function imageInfo(key) {
  const m = manifest[key];
  if (!m) throw new Error(`Gambar tidak ditemukan di content/images.json: ${key}`);
  return m;
}

// alt wajib diisi (gunakan '' hanya untuk gambar dekoratif).
export function img(key, { alt, cls = '', eager = false, style = '' } = {}) {
  if (alt === undefined) throw new Error(`alt wajib diisi untuk gambar: ${key}`);
  const m = imageInfo(key);
  return `<img${cls ? ` class="${cls}"` : ''} src="${m.src}" width="${m.w}" height="${m.h}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${style ? ` style="${style}"` : ''}>`;
}

// Gambar yang bisa diperbesar. Tanpa JavaScript, tautan membuka gambar langsung.
export function zoomImg(key, { alt, caption = '', cls = '' } = {}) {
  const m = imageInfo(key);
  return `<a class="zoom" href="${m.src}" data-zoom data-caption="${esc(caption || alt)}" aria-label="Perbesar gambar: ${esc(alt)}">${img(key, { alt, cls })}</a>`;
}

const CHECK =
  '<svg class="ic" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M3 8.5l3.2 3L13 4.8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export const passChip = () => `<span class="chip chip-pass">${CHECK}PASS</span>`;
export const prioChip = (p) => `<span class="chip chip-${esc(p.toLowerCase())}">${esc(p)}</span>`;
