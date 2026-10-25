// Interaksi ringan. Situs tetap bisa dibaca penuh tanpa JavaScript.
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Tema terang atau gelap
  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
    themeBtn.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      themeBtn.setAttribute('aria-pressed', String(next === 'dark'));
      try { localStorage.setItem('theme', next); } catch (e) { /* abaikan */ }
    });
  }

  // Lembar kerja di hero: tab dan animasi uji
  const sheet = document.querySelector('[data-sheet]');
  if (sheet) {
    const tabs = [...sheet.querySelectorAll('[role="tab"]')];
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
        if (dir) { e.preventDefault(); select(tabs[(i + dir + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1], true); }
      });
    });

    const cells = [...sheet.querySelectorAll('[data-status]')];
    const passHTML = cells.length ? cells[0].innerHTML : '';
    const runHTML = '<span class="chip chip-run"><span class="dot" aria-hidden="true"></span>Berjalan</span>';
    let timers = [];
    const run = () => {
      timers.forEach(clearTimeout);
      timers = [];
      cells.forEach((c) => { c.innerHTML = runHTML; });
      cells.forEach((c, i) => timers.push(setTimeout(() => { c.innerHTML = passHTML; }, 700 + i * 520)));
    };
    if (!reduce) run();
    const replay = sheet.querySelector('[data-replay]');
    if (replay && !reduce) replay.addEventListener('click', run);
    if (replay && reduce) replay.hidden = true;
  }

  // Filter proyek
  const filters = document.querySelector('[data-filters]');
  if (filters) {
    filters.hidden = false;
    const rows = [...document.querySelectorAll('.projlist .proj')];
    const count = document.querySelector('[data-count]');
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-filter]');
      if (!btn) return;
      const kind = btn.dataset.filter;
      filters.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let shown = 0;
      rows.forEach((r) => {
        const on = kind === 'Semua' || r.dataset.kind === kind;
        r.hidden = !on;
        if (on) shown += 1;
      });
      if (count) count.textContent = `${shown} proyek`;
    });
  }

  // Perbesar gambar
  const box = document.querySelector('dialog.lightbox');
  if (box && typeof box.showModal === 'function') {
    const bigImg = box.querySelector('img');
    const cap = box.querySelector('.lb-cap');
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-zoom]');
      if (!link) return;
      e.preventDefault();
      bigImg.src = link.href;
      bigImg.alt = link.querySelector('img')?.alt || '';
      cap.textContent = link.dataset.caption || '';
      box.showModal();
    });
    box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
  }

  // Salin email
  const copyBtn = document.querySelector('[data-copy]');
  const copied = document.querySelector('[data-copied]');
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.copy);
        if (copied) { copied.textContent = 'Email tersalin'; setTimeout(() => { copied.textContent = ''; }, 2500); }
      } catch (e) {
        if (copied) copied.textContent = 'Gagal menyalin. Salin manual dari tautan di atas.';
      }
    });
  } else if (copyBtn) {
    copyBtn.hidden = true;
  }
})();
