// Studi kasus proyek. Tiap bagian berisi blok: p, list, steps, figure, figures, note, link,
// testcases, findings. Menambah proyek = menambah satu objek di array ini.
export const projects = [
  {
    slug: 'pengujian-maryame',
    title: 'Pengujian toko online Maryame',
    kind: 'QA',
    tags: ['Manual testing', 'UAT', 'End-to-end'],
    cover: { key: 'maryame-desktop', pos: 'top left' },
    short: 'Dua bulan menguji alur belanja sampai pengiriman secara manual: 96 skenario UAT dan 36 temuan yang dilacak.',
    summary:
      'Dua bulan menguji alur belanja, pembayaran, pengiriman, dan pengelolaan pesanan di toko online skincare, secara manual dari ujung ke ujung.',
    meta: [
      ['Peran', 'QA tester'],
      ['Lama', '2 bulan'],
      ['Cara uji', 'Manual, berbasis skenario'],
      ['Lingkup', 'Sisi pelanggan dan backoffice'],
      ['Alat', 'Spreadsheet untuk skenario dan pelacakan temuan'],
    ],
    links: [{ label: 'Kunjungi website Maryame', href: 'https://maryame.id/id' }],
    sections: [
      {
        heading: 'Yang diuji',
        blocks: [
          { type: 'p', text: 'Maryame adalah toko online skincare. Saya menguji dua sisi: pengalaman pelanggan di website, dan pekerjaan tim di backoffice.' },
          {
            type: 'list',
            items: [
              'Sisi pelanggan: akun dan keamanan, katalog, keranjang, checkout dan pembayaran, pelacakan pesanan, voucher dan promo.',
              'Sisi backoffice: produk dan media, pemrosesan pesanan dan keuangan, logistik dan fulfillment, marketing dan pelanggan.',
              'Alur ujung ke ujung yang melintasi webstore, pembayaran, pengiriman, dan pencatatan internal.',
            ],
          },
          { type: 'figure', key: 'maryame-desktop', alt: 'Halaman semua produk toko online Maryame di desktop, dengan filter kategori dan harga', caption: 'Halaman semua produk di desktop. Tampilan backoffice tidak ditampilkan demi privasi klien.' },
          { type: 'figures', items: [{ key: 'maryame-mobile', alt: 'Halaman produk Maryame di ponsel dengan navigasi bawah', caption: 'Tampilan di ponsel.' }] },
        ],
      },
      {
        heading: 'Cara bekerja',
        blocks: [
          { type: 'p', text: 'Tanpa tools otomatis. Ketelitian dan dokumentasi yang rapi menjadi alat utamanya.' },
          {
            type: 'steps',
            items: [
              ['Menyusun skenario', 'Dari alur pengguna, lengkap dengan langkah pengujian dan hasil yang diharapkan.'],
              ['Menjalankan skenario', 'Langkah demi langkah, lalu mencatat hasil dan saran perbaikan.'],
              ['Melaporkan temuan', 'Dengan prioritas, bukti, dan hasil yang diharapkan, untuk tim developer.'],
              ['Menguji ulang', 'Setelah perbaikan, sampai statusnya PASS.'],
              ['Mencatat jadwal lanjutan', 'Permintaan yang dikerjakan di putaran pengembangan berikutnya ditandai terpisah.'],
            ],
          },
          { type: 'testcases', caption: 'Contoh skenario, disederhanakan dari dokumen kerja asli.' },
        ],
      },
      {
        heading: 'Temuan',
        blocks: [
          { type: 'p', text: 'Setiap temuan dicatat dengan prioritas, deskripsi masalah, bukti, dan hasil yang diharapkan. Berikut contoh yang sudah diperbaiki dan lolos uji ulang.' },
          { type: 'findings', caption: 'Contoh temuan, dengan istilah yang disamarkan.' },
        ],
      },
      {
        heading: 'Hasil',
        blocks: [
          {
            type: 'list',
            items: [
              '96 skenario UAT di 11 sub-modul, seluruhnya berstatus PASS di akhir periode.',
              '36 temuan dan permintaan perbaikan dilacak: 2 Critical, 23 High, 8 Medium, 3 Low.',
              'Pengujian ujung ke ujung lintas webstore, pembayaran, pengiriman, dan pencatatan internal.',
            ],
          },
          { type: 'note', text: 'Backoffice dan dokumen kerja asli tidak ditampilkan demi menjaga privasi klien. Permintaan perbaikan yang masih terbuka juga tidak dicantumkan.' },
        ],
      },
      {
        heading: 'Yang saya pelajari',
        blocks: [
          { type: 'p', text: 'Menguji alur yang melibatkan banyak sistem menuntut catatan yang rapi, karena satu masalah sering baru terlihat setelah data berpindah dari satu sistem ke sistem lain. Berikutnya saya belajar automation dengan n8n untuk membantu pekerjaan yang berulang.' },
        ],
      },
    ],
  },

  {
    slug: 'mountaineer',
    title: 'Mountaineer: web open trip dengan panel admin',
    kind: 'Web',
    tags: ['Proyek latihan', 'Data demo', 'Panel admin'],
    cover: { key: 'mountaineer-desktop', pos: 'top left' },
    short: 'Platform pemesanan open trip, private trip, dan sewa guide pendakian, lengkap dengan panel admin dan asisten AI.',
    summary:
      'Platform pemesanan open trip, private trip, dan sewa guide pendakian, lengkap dengan panel admin untuk mengelola paket, jadwal, booking, pembayaran, dan promo.',
    meta: [
      ['Peran', 'Pembuat'],
      ['Status', 'Proyek latihan dengan data demo'],
      ['Isi', 'Website pengunjung, panel admin, asisten AI'],
    ],
    links: [],
    sections: [
      {
        heading: 'Sisi pengunjung',
        blocks: [
          { type: 'p', text: 'Pengunjung mencari gunung dan tanggal berangkat, lalu memilih paket Open Trip, Private Trip, atau Sewa Guide. Katalog bisa difilter menurut tipe dan dicari berdasarkan nama paket atau gunung.' },
          { type: 'figure', key: 'mountaineer-desktop', alt: 'Beranda Mountaineer dengan pencarian gunung dan tanggal berangkat', caption: 'Beranda dengan pencarian gunung dan tanggal.' },
          { type: 'figure', key: 'mountaineer-catalog', alt: 'Katalog paket pendakian dengan filter tipe dan kolom pencarian', caption: 'Katalog paket dengan filter tipe dan pencarian.' },
          { type: 'figures', items: [{ key: 'mountaineer-mobile', alt: 'Beranda Mountaineer di ponsel', caption: 'Tampilan di ponsel.' }] },
        ],
      },
      {
        heading: 'Panel admin',
        blocks: [
          { type: 'p', text: 'Admin mengelola semuanya dari satu panel. Peran SUPER_ADMIN punya akses penuh, dan setiap perubahan tercatat di audit log.' },
          {
            type: 'list',
            items: [
              'Konten (CMS), gunung, dan paket',
              'Jadwal dan kuota, serta guide',
              'Booking, pembayaran, dan refund',
              'Promo, customer, dan role',
              'Laporan, pengaturan, dan audit log',
            ],
          },
          { type: 'figure', key: 'mountaineer-admin', alt: 'Dashboard admin Mountaineer dengan ringkasan booking dan menu pengelolaan', caption: 'Dashboard admin. Seluruh angka dan pendapatan adalah simulasi.' },
        ],
      },
      {
        heading: 'Asisten AI',
        blocks: [
          { type: 'p', text: 'Website ini punya asisten chat yang menjawab pertanyaan pengunjung seputar gunung, paket, dan booking.' },
          { type: 'link', text: 'Baca cara kerja asisten AI', href: '/it/asisten-ai-mountaineer/' },
        ],
      },
      {
        heading: 'Catatan',
        blocks: [{ type: 'note', text: 'Ini proyek latihan. Semua data berlabel DEMO, dan pendapatan ditandai sebagai simulasi, bukan uang nyata.' }],
      },
    ],
  },

  {
    slug: 'asisten-ai-mountaineer',
    title: 'Asisten AI untuk website Mountaineer',
    kind: 'Automation dan AI',
    tags: ['n8n', 'AI Agent', 'OpenAI', 'Supabase'],
    cover: { key: 'mountaineer-chat', pos: 'top right' },
    short: 'Chatbot yang tertanam di website dan menjawab dari data gunung di database, dibangun dengan AI Agent di n8n.',
    summary:
      'Chatbot yang tertanam di website open trip. Ia menjawab pertanyaan pengunjung dengan mengambil data dari database, dibangun dengan AI Agent di n8n.',
    meta: [
      ['Peran', 'Pembuat'],
      ['Alat', 'n8n AI Agent, model OpenAI, Supabase'],
      ['Status', 'Demo dengan data contoh'],
    ],
    links: [],
    sections: [
      {
        heading: 'Cara kerja',
        blocks: [
          {
            type: 'steps',
            items: [
              ['Pengunjung bertanya', 'Pertanyaan diketik di widget chat pada website.'],
              ['n8n menerima pesan', 'Workflow dimulai dari chat trigger, lalu pesan diteruskan ke AI Agent.'],
              ['Agent mencari data', 'Dengan model OpenAI, ingatan percakapan, dan alat untuk membaca data dari Supabase serta tanggal hari ini.'],
              ['Jawaban kembali ke chat', 'Pengunjung menerima jawaban berdasarkan data yang ada.'],
            ],
          },
          { type: 'figure', key: 'mountaineer-chat', alt: 'Widget asisten Mountaineer di beranda, menjawab daftar gunung yang tersedia', caption: 'Percakapan contoh: asisten menyebut lokasi, ketinggian, tingkat kesulitan, dan durasi pendakian.' },
        ],
      },
      {
        heading: 'Isi workflow',
        blocks: [
          {
            type: 'list',
            items: [
              'Chat trigger: menerima pesan dari website.',
              'AI Agent: mengatur percakapan dan memilih alat yang dibutuhkan.',
              'Model OpenAI: menyusun jawaban.',
              'Simple Memory: mengingat konteks percakapan.',
              'Alat tanggal dan waktu: agar jawaban tahu hari ini.',
              'Alat Supabase: mengambil baris data dari database.',
            ],
          },
          { type: 'figure', key: 'mountaineer-n8n', alt: 'Workflow n8n: chat trigger menuju AI Agent dengan model OpenAI, memori, tanggal dan waktu, dan Supabase', caption: 'Workflow di n8n.' },
        ],
      },
      {
        heading: 'Catatan',
        blocks: [
          { type: 'note', text: 'Jika dibuka untuk umum, asisten seperti ini memerlukan batas pemakaian, pengamanan webhook, dan akses data baca-saja, supaya biaya dan data tetap terkendali.' },
        ],
      },
    ],
  },

  {
    slug: 'uangku-bot-telegram',
    title: 'Uangku: bot Telegram pencatat pengeluaran',
    kind: 'Automation dan AI',
    tags: ['n8n', 'Telegram', 'Google Sheets'],
    cover: { key: 'uangku-telegram', pos: 'top center' },
    short: 'Kirim foto struk atau satu baris teks, pengeluaran tercatat di Google Sheets, laporan lewat perintah.',
    summary:
      'Bot Telegram yang mencatat pengeluaran dari foto struk atau teks singkat ke Google Sheets, dengan laporan harian, mingguan, dan bulanan.',
    meta: [
      ['Peran', 'Pembuat'],
      ['Alat', 'n8n, Telegram, Google Sheets'],
      ['Status', 'Berjalan'],
    ],
    links: [],
    sections: [
      {
        heading: 'Cara kerja',
        blocks: [
          {
            type: 'steps',
            items: [
              ['Kirim ke bot', 'Foto struk, atau tulis pengeluaran seperti "makan siang 25000".'],
              ['n8n membaca isinya', 'Tanggal, toko, kategori, total, dan catatan diambil dari struk atau teks.'],
              ['Tercatat di Google Sheets', 'Kolom sumber menandai apakah data berasal dari foto struk atau teks.'],
              ['Laporan lewat perintah', '/harian, /mingguan, dan /bulanan dijawab langsung di chat.'],
            ],
          },
        ],
      },
      {
        heading: 'Hasil',
        blocks: [
          { type: 'figures', items: [{ key: 'uangku-telegram', alt: 'Percakapan dengan bot Uangku: laporan harian dan konfirmasi pencatatan struk', caption: 'Di Telegram: laporan harian dan konfirmasi pencatatan.' }] },
          { type: 'figure', key: 'uangku-sheet', alt: 'Google Sheet pengeluaran dengan kolom tanggal, toko, kategori, total, catatan, sumber, dan pengguna', caption: 'Di Google Sheets: satu baris untuk setiap pengeluaran.' },
        ],
      },
    ],
  },
];
