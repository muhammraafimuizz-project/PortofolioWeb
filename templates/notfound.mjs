import { layout } from './layout.mjs';

export function notFoundPage() {
  return layout({
    title: 'Halaman tidak ditemukan',
    description: 'Halaman yang kamu cari tidak ada.',
    path: '/404.html',
    body: `<section class="wrap page-head" aria-labelledby="judul">
  <h1 id="judul">Halaman tidak ditemukan</h1>
  <p class="summary">Alamat yang kamu buka tidak ada, atau sudah dipindahkan.</p>
  <p class="btns"><a class="btn btn-primary" href="/">Ke beranda</a><a class="btn btn-ghost" href="/it/">Lihat proyek</a></p>
</section>`,
  });
}
