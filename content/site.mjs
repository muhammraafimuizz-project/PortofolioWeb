// Data umum situs. Ubah di sini, lalu jalankan `npm run build`.
export const site = {
  name: 'Muhammad Raafi Muizz',
  short: 'Raafi Muizz',
  role: 'QA tester dan automation',
  // Isi dengan alamat situs setelah deploy (tanpa garis miring di akhir),
  // contoh: 'https://raafimuizz.vercel.app'. Dipakai untuk pratinjau saat link dibagikan.
  url: process.env.SITE_URL || '',
  description:
    'Portofolio Muhammad Raafi Muizz: QA tester yang menguji alur belanja dari ujung ke ujung, membuat automation dengan n8n, dan belajar desain 3D untuk manufaktur dengan SolidWorks.',
  email: 'muham.raafi11@gmail.com',
  location: 'Bandung',
  // Kosongkan jika belum ada; tautan yang kosong tidak ditampilkan.
  links: {
    LinkedIn: '',
    GitHub: '',
    Instagram: '',
  },
  // Letakkan file CV di folder public/, lalu isi, contoh: '/CV-Muhammad-Raafi-Muizz.pdf'.
  // Pastikan CV untuk publik tidak memuat alamat rumah dan nomor telepon.
  cv: '',
};
