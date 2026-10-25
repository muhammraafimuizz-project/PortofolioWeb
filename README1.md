# Portofolio Muhammad Raafi Muizz

Situs statis tanpa dependensi. Dibangun dengan Node.js murni — tidak perlu `npm install`.

## Cara menjalankan secara lokal

```bash
# Clone repo lalu masuk ke folder:
cd portofolio-raafi

# Build sekali (hasilnya di folder dist/):
node build.mjs

# Atau jalankan server lokal dengan live-reload:
node serve.mjs
# Buka http://localhost:4321
```

Node.js ≥ 18 diperlukan. Tidak ada dependensi lain.

---

## Struktur folder

```
content/          Semua isi situs (teks, proyek, pengalaman, dll.)
  site.mjs        Nama, email, link sosial, URL situs → ISI INI DULU
  home.mjs        Teks hero dan ringkasan
  projects.mjs    Studi kasus proyek IT
  works3d.mjs     Karya SolidWorks
  experience.mjs  Pengalaman dan pendidikan
  skills.mjs      Kelompok keahlian
  tables.mjs      Contoh test case dan temuan (disanitasi)
  images.json     Manifest gambar (src, lebar, tinggi)

assets/
  style.css       Semua gaya (tema terang/gelap, responsif)
  app.js          Interaksi ringan (tema, filter, lightbox, salin email)

public/
  favicon.svg     Monogram RM
  og.png          Gambar preview untuk media sosial (1200×630)
  img/            Gambar proyek (.webp)

templates/        Template halaman HTML (jangan diubah kecuali perlu)
lib/              Fungsi pembantu HTML

build.mjs         Script build utama
serve.mjs         Server lokal untuk pengembangan
```

---

## Yang harus diisi sebelum deploy

### 1. `content/site.mjs` — wajib

Buka file ini dan isi bagian yang masih kosong:

| Field | Isi dengan |
|-------|-----------|
| `url` | URL situs setelah deploy, contoh: `https://raafi.vercel.app` |
| `links.LinkedIn` | URL profil LinkedIn kamu |
| `links.GitHub` | URL profil GitHub kamu |
| `links.Instagram` | URL Instagram (opsional, hapus jika tidak mau tampil) |
| `cv` | Path ke file CV PDF di folder `public/`, contoh: `/cv-raafi.pdf` |

Untuk CV: simpan file PDF di `public/cv-raafi.pdf`, lalu isi `cv: '/cv-raafi.pdf'`.  
Pastikan CV **tidak** mencantumkan alamat rumah atau nomor telepon lengkap.

### 2. Repo Mountaineer

Di `content/projects.mjs`, cari proyek dengan slug `mountaineer` dan `asisten-ai-mountaineer`.  
Ganti baris:
```js
// { type: 'link', label: 'Lihat repositori', href: '' },
```
dengan link repo GitHub-mu yang sebenarnya.

### 3. og.png

Gambar preview sudah ada di `public/og.png`. Jika ingin mengganti dengan foto diri atau desain lain,
ganti file tersebut (ukuran 1200×630 px).

---

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Buka [vercel.com](https://vercel.com) → **Add New Project** → import repo.
3. Build Command: `node build.mjs`
4. Output Directory: `dist`
5. Klik Deploy.

Setelah dapat URL, isi `site.url` di `content/site.mjs` → commit → push.  
Vercel otomatis rebuild.

## Deploy ke Netlify

1. Push repo ke GitHub.
2. Buka [netlify.com](https://netlify.com) → **Add new site** → import repo.
3. Build command dan output directory sudah diatur di `netlify.toml` — tidak perlu diisi manual.
4. Klik Deploy.

---

## Menambah atau mengubah konten

- **Proyek baru**: tambah objek di `content/projects.mjs` dengan `slug` unik.
- **Pengalaman**: edit array di `content/experience.mjs`.
- **Keahlian**: edit `content/skills.mjs`.
- **Gambar baru**: simpan `.webp` di `public/img/`, tambah entry di `content/images.json`.
- Setelah mengubah konten, jalankan `node build.mjs` untuk memperbarui `dist/`.

---

## Catatan privasi

- Screenshot backoffice Maryame **tidak** disertakan sesuai permintaan klien.
- Tabel test case dan temuan di situs sudah disanitasi (tidak ada nama domain internal, nama vendor, atau nama orang).
- Kolom `chat_id` pada screenshot Google Sheets sudah dipotong.
