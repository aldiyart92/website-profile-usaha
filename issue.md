# 🚀 Website Profil Usaha — Project Planning

## Ringkasan Proyek

Membangun website profil usaha menggunakan **Next.js** dengan desain clean & modern. Website ini menampilkan profil cafe & coworking space, kelas/program yang ditawarkan, peluang kolaborasi, galeri, artikel blog, dan informasi kontak.

---

## 1. Inisialisasi Proyek

### Setup Next.js
- Buat project Next.js baru di root folder ini menggunakan `npx create-next-app@latest ./` dengan App Router
- Gunakan TypeScript
- Konfigurasi ESLint bawaan

### Install Dependencies
```bash
npm install tailwindcss @tailwindcss/postcss postcss aos
npm install -D @types/aos
```

### Setup Font
- Gunakan Google Font **Poppins** (weight: 300, 400, 500, 600, 700) via `next/font/google`
- Set sebagai font default di layout utama

---

## 2. Design System & Tema

### Palet Warna
Konsep: **hijau tua yang soft** — nuansa nature/earthy, premium tapi tidak mencolok.

| Token           | Warna (Hex)   | Kegunaan                          |
|-----------------|---------------|-----------------------------------|
| `primary`       | `#2D6A4F`     | Warna utama (tombol, heading)     |
| `primary-light` | `#52B788`     | Aksen hover, highlight            |
| `primary-dark`  | `#1B4332`     | Navbar, footer, teks tebal        |
| `accent`        | `#95D5B2`     | Badge, dekorasi, border           |
| `background`    | `#FAFDF7`     | Background utama halaman          |
| `surface`       | `#FFFFFF`     | Card, section background          |
| `text-primary`  | `#1A1A2E`     | Teks utama                        |
| `text-secondary`| `#6B7280`     | Teks pendukung, caption           |
| `text-on-dark`  | `#F0FFF4`     | Teks di atas background gelap     |

### Prinsip Desain
- **Clean & Modern**: banyak whitespace, layout rapi, tidak overcrowded
- **Soft Green Accent**: warna hijau dipakai sebagai aksen, bukan mendominasi
- **Rounded corners** pada card dan tombol (border-radius ~12px)
- **Subtle shadow** pada card (shadow ringan, tidak dramatis)
- **Konsisten spacing** menggunakan kelipatan 4px/8px

### Animasi
- Gunakan library **AOS (Animate on Scroll)** untuk animasi elemen saat scroll
- Tipe animasi yang dipakai: `fade-up`, `fade-in`, `zoom-in` (jangan berlebihan)
- Inisialisasi AOS di layout utama atau komponen provider
- Duration default: 800ms, offset: 100px

---

## 3. Struktur Halaman & Navigasi

### Layout Utama (`app/layout.tsx`)
- **Navbar** — fixed/sticky di atas, background semi-transparan dengan backdrop blur
- **Footer** — background `primary-dark`, berisi info kontak ringkas, sosial media, copyright
- **AOS Provider** — inisialisasi AOS di client component wrapper

### Menu Navigasi

| No | Menu                    | Route                | Keterangan                                     |
|----|-------------------------|----------------------|-------------------------------------------------|
| 1  | Beranda                 | `/`                  | Landing page utama                              |
| 2  | Cafe & Coworking Space  | `/cafe-coworking`    | Info tentang fasilitas cafe & coworking          |
| 3  | Kelas & Programme       | `/kelas-programme`   | Daftar kelas, workshop, program yang ditawarkan  |
| 4  | Kolaborasi              | `/kolaborasi`        | Info peluang kolaborasi & partnership            |
| 5  | Tentang Kami            | `/tentang-kami`      | Profil, visi misi, tim                           |
| 6  | Artikel                 | `/artikel`           | Blog / daftar artikel                            |
| 7  | Galeri                  | `/galeri`            | Galeri foto kegiatan & tempat                    |
| 8  | Kontak Kami             | `/kontak`            | Form kontak, peta lokasi, info kontak            |

---

## 4. Detail Setiap Halaman

### 4.1 Beranda (`/`)
- **Hero Section**: gambar besar / background image dengan overlay gelap, judul tagline usaha, tombol CTA ("Jelajahi" / "Hubungi Kami")
- **Highlight Section**: 3–4 card fitur unggulan (ikon + judul + deskripsi singkat) — mis. Cafe, Coworking, Kelas
- **Tentang Singkat**: paragraf singkat tentang usaha + tombol "Selengkapnya" ke halaman Tentang Kami
- **Galeri Preview**: grid 4–6 foto terbaik + tombol "Lihat Semua" ke halaman Galeri
- **CTA Section**: section ajakan kolaborasi atau kunjungi tempat, dengan background warna `primary`

### 4.2 Cafe & Coworking Space (`/cafe-coworking`)
- **Hero kecil**: judul halaman + deskripsi singkat
- **Section Cafe**: deskripsi suasana cafe, menu unggulan (bisa berupa grid card)
- **Section Coworking**: fasilitas coworking, harga/paket (tabel atau card), keunggulan
- **Foto-foto**: beberapa gambar suasana

### 4.3 Kelas & Programme (`/kelas-programme`)
- **Hero kecil**: judul + deskripsi
- **Daftar Program**: grid card berisi nama program, deskripsi singkat, jadwal, dan tombol "Detail" atau "Daftar"
- **Testimoni**: 2–3 testimoni peserta sebelumnya (opsional)

### 4.4 Kolaborasi (`/kolaborasi`)
- **Hero kecil**: judul + deskripsi ajakan kolaborasi
- **Jenis Kolaborasi**: card atau list (mis. Event Collaboration, Brand Partnership, Community Program)
- **Form / CTA**: tombol atau form singkat untuk mengajukan kolaborasi

### 4.5 Tentang Kami (`/tentang-kami`)
- **Hero kecil**: judul
- **Cerita / Story**: narasi tentang usaha, kapan didirikan, motivasi
- **Visi & Misi**: ditampilkan dengan layout 2 kolom atau card
- **Tim**: grid card anggota tim (foto, nama, jabatan) — bisa pakai placeholder dulu

### 4.6 Artikel (`/artikel`)
- **Daftar Artikel**: grid card berisi thumbnail, judul, tanggal, ringkasan
- **Data**: untuk sementara gunakan data dummy / static JSON
- **Halaman Detail**: buat route `/artikel/[slug]` untuk menampilkan isi artikel lengkap

### 4.7 Galeri (`/galeri`)
- **Grid Foto**: masonry layout atau grid responsif (3 kolom desktop, 2 tablet, 1 mobile)
- **Lightbox**: klik foto untuk melihat ukuran besar (bisa pakai CSS modal atau library ringan)
- **Data**: gunakan gambar placeholder atau dummy images

### 4.8 Kontak Kami (`/kontak`)
- **Info Kontak**: alamat, telepon, email, jam operasional — ditampilkan dalam card atau list
- **Form Kontak**: nama, email, subjek, pesan — dengan validasi dasar (required fields)
- **Peta**: embed Google Maps iframe lokasi usaha
- **Sosial Media**: link ikon sosial media

---

## 5. Komponen Reusable yang Perlu Dibuat

| Komponen          | Deskripsi                                                  |
|-------------------|------------------------------------------------------------|
| `Navbar`          | Navigasi sticky, responsive (hamburger menu di mobile)     |
| `Footer`          | Footer global dengan info kontak & sosmed                  |
| `HeroSection`     | Hero reusable untuk setiap halaman (judul, deskripsi, bg)  |
| `Card`            | Card generik (gambar, judul, deskripsi, action)            |
| `SectionHeading`  | Heading + subheading untuk setiap section                  |
| `Button`          | Tombol dengan variant: primary, outline, ghost             |
| `ContactForm`     | Form kontak dengan field standar                           |
| `GalleryGrid`     | Grid foto responsif                                        |
| `ArticleCard`     | Card khusus untuk preview artikel                          |
| `TestimonialCard` | Card testimoni (foto, nama, kutipan)                       |

---

## 6. Responsivitas

- **Mobile First**: desain dimulai dari mobile lalu scale up
- **Breakpoints**: ikuti default Tailwind (`sm`, `md`, `lg`, `xl`)
- **Navbar**: hamburger menu di bawah breakpoint `md`
- **Grid**: 1 kolom di mobile, 2 di tablet, 3–4 di desktop
- **Font size**: scale proporsional di tiap breakpoint

---

## 7. Catatan Teknis

- Semua halaman dibuat sebagai **Server Component** kecuali yang butuh interaktivitas (form, navbar mobile toggle, AOS init) → pakai `"use client"` hanya di komponen tersebut
- Data artikel & program menggunakan **static data** (JSON/TypeScript array) — tidak perlu database untuk saat ini
- Gambar menggunakan komponen `next/image` untuk optimasi
- Konfigurasi TailwindCSS v4 menggunakan `@import "tailwindcss"` di file CSS utama
- Semua teks konten boleh menggunakan **lorem ipsum / placeholder** — yang penting struktur dan layout sudah benar

---

## 8. Urutan Pengerjaan (Fase)

### Fase 1 — Foundation
1. Init project Next.js + install semua dependencies
2. Setup Tailwind CSS, font Poppins, dan konfigurasi warna custom
3. Inisialisasi AOS
4. Buat layout utama (Navbar + Footer)

### Fase 2 — Halaman Utama
5. Buat halaman Beranda dengan semua section
6. Buat halaman Tentang Kami
7. Buat halaman Kontak Kami (termasuk form)

### Fase 3 — Halaman Konten
8. Buat halaman Cafe & Coworking Space
9. Buat halaman Kelas & Programme
10. Buat halaman Kolaborasi

### Fase 4 — Halaman Dinamis
11. Buat halaman Artikel (list + detail)
12. Buat halaman Galeri (grid + lightbox)

### Fase 5 — Polish
13. Review responsivitas di semua breakpoint
14. Review dan sesuaikan animasi AOS
15. Optimasi performa (image, lazy loading)
16. Final review UI/UX consistency
