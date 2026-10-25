// Karya 3D. Tambahkan objek baru di array ini untuk menambah karya.
export const intro3d =
  'Saya sedang belajar SolidWorks dengan arah manufaktur. Berikut tiga karya latihan. Setiap karya akan saya lengkapi dengan gambar kerja, exploded view, dan daftar komponen.';

export const works3d = [
  {
    slug: 'crankshaft',
    title: 'Crankshaft dan piston',
    type: 'Assembly',
    summary: 'Rakitan empat piston lengkap dengan ring, connecting rod, dan crankshaft.',
    images: [{ key: '3d-crankshaft', alt: 'Rakitan crankshaft dengan empat piston dan connecting rod' }],
    meta: [
      ['Perangkat lunak', 'SolidWorks Premium 2024'],
      ['Jenis', 'Assembly dengan banyak komponen'],
      ['Status', 'Karya latihan'],
    ],
    did: ['Banyak komponen dirakit menjadi satu assembly.', 'Warna dibedakan menurut jenis komponen.'],
    next: ['Animasi gerak dengan Motion Study.', 'Exploded view dan daftar komponen (BOM).', 'Nama komponen yang jelas.'],
  },
  {
    slug: 'bracket',
    title: 'Bracket penyangga',
    type: 'Part',
    summary: 'Blok penyangga dengan dudukan berlubang dan alur, dimodelkan dari beberapa fitur.',
    images: [{ key: '3d-bracket', alt: 'Bracket penyangga dengan dudukan berlubang dan alur' }],
    meta: [
      ['Perangkat lunak', 'SolidWorks Premium 2024'],
      ['Material', 'AISI 1035 Steel'],
      ['Status', 'Karya latihan'],
    ],
    did: ['Material sudah ditetapkan.', 'Dimodelkan dengan boss-extrude, cut-extrude, chamfer, dan fillet.'],
    next: ['Gambar kerja dengan dimensi dan toleransi.', 'Catatan proses produksi, misalnya CNC.'],
  },
  {
    slug: 'die-set',
    title: 'Die set',
    type: 'Assembly',
    summary: 'Rakitan dies atas, dies bawah, dan baut.',
    images: [
      { key: '3d-dieset-1', alt: 'Die set dari sisi atas dengan dies atas yang membulat' },
      { key: '3d-dieset-2', alt: 'Die set dari sisi baut dengan dudukan heksagonal' },
    ],
    meta: [
      ['Perangkat lunak', 'SolidWorks Premium 2024'],
      ['Jenis', 'Assembly: dies atas, dies bawah, baut'],
      ['Status', 'Karya latihan'],
    ],
    did: ['Tiga komponen dirakit dengan mate.'],
    next: ['Melengkapi mate sampai fully defined.', 'Exploded view dan daftar komponen (BOM).'],
  },
];
