// Contoh tabel untuk studi kasus. Sudah disamarkan dan diringkas dari dokumen kerja asli:
// tanpa nama sistem, tanpa tautan, tanpa data pelanggan.

export const testCases = [
  ['TC-01', 'Pencarian produk', 'Cari berdasarkan nama atau kategori', 'Hasil akurat dan cepat'],
  ['TC-02', 'Filter dan urutan', 'Urutkan menurut harga dan produk terbaru', 'Daftar mengikuti urutan yang dipilih'],
  ['TC-03', 'Varian produk', 'Pilih ukuran atau warna', 'Harga, deskripsi, dan stok mengikuti varian'],
  ['TC-04', 'Jumlah di keranjang', 'Tambah atau kurangi jumlah item', 'Subtotal ikut berubah'],
  ['TC-05', 'Ongkos kirim', 'Isi alamat lengkap', 'Kurir dan tarif sesuai alamat'],
  ['TC-06', 'Kupon diskon', 'Masukkan kode yang masih berlaku', 'Total bayar berkurang sesuai kupon'],
  ['TC-07', 'Pembayaran', 'Bayar lewat QRIS atau virtual account', 'Status berubah otomatis setelah dibayar'],
  ['TC-08', 'Poin loyalitas', 'Gunakan poin di transaksi kedua', 'Poin dipotongkan dari tagihan'],
];

// Dipakai di hero halaman utama.
export const heroCases = [testCases[1], testCases[3], testCases[4], testCases[5], testCases[6]];

export const findings = [
  ['Critical', 'Stok di keranjang tidak mengikuti stok terbaru, pelanggan baru tahu setelah membayar', 'Stok divalidasi ulang sebelum pembayaran'],
  ['Critical', 'Data pelanggan di label pengiriman belum seluruhnya tersamarkan', 'Data pelanggan tersamarkan di label'],
  ['High', 'Hasil ekspor pesanan memuat baris ganda', 'Satu pesanan tampil satu baris'],
  ['High', 'Tombol pengajuan pengembalian aktif sebelum bukti diunggah, melewati batas waktu, atau saat barang masih diantar', 'Tombol mengikuti aturan pengembalian'],
  ['High', 'Nilai diskon dari poin loyalitas tidak sesuai jumlah poin yang ditukar', 'Potongan sesuai poin yang dipakai'],
  ['High', 'Status pengiriman di tampilan pelanggan tertinggal dari status di backoffice', 'Tampilan pelanggan ikut status terbaru'],
];
