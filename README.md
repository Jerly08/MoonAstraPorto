# Moon Astra Studio - Portofolio Website

Website portofolio untuk Moon Astra Studio, sebuah agensi digital yang menawarkan layanan pengembangan web, desain UI/UX, dan digital marketing.

## Fitur

- **Desain Modern**: Antarmuka yang bersih dan modern dengan dukungan tema gelap/terang
- **Responsif**: Tampilan yang responsif dan optimal di semua perangkat
- **Animasi**: Efek animasi halus menggunakan Framer Motion
- **SEO-Friendly**: Meta tag yang dioptimalkan untuk setiap halaman
- **Performa Tinggi**: Dibangun dengan Next.js untuk performa yang optimal

## Teknologi yang Digunakan

- [Next.js](https://nextjs.org/) - React framework dengan fitur SSR dan SSG
- [React](https://reactjs.org/) - Library JavaScript untuk membangun antarmuka pengguna
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript dengan tipe statis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Framer Motion](https://www.framer.com/motion/) - Library animasi untuk React
- [React Icons](https://react-icons.github.io/react-icons/) - Koleksi ikon populer untuk React
- [Next Themes](https://github.com/pacocoursey/next-themes) - Dukungan tema untuk Next.js

## Halaman

- **Home**: Halaman beranda dengan pengenalan dan highlight layanan
- **About**: Informasi tentang Moon Astra Studio, nilai-nilai, dan tim
- **Services**: Daftar layanan yang ditawarkan dengan detail
- **Projects**: Portofolio proyek yang telah dikerjakan
- **Contact**: Formulir kontak dan informasi kontak

## Cara Menjalankan Proyek

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/moon-astra-studio.git
   cd moon-astra-studio
   ```

2. Install dependensi:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## Membangun untuk Produksi

```bash
npm run build
```

Kemudian, untuk menjalankan versi produksi:

```bash
npm start
```

## Struktur Folder

- `public/` - Aset statis seperti gambar dan favicon
- `src/app/` - Halaman aplikasi menggunakan App Router Next.js
- `src/components/` - Komponen React yang dapat digunakan kembali
  - `sections/` - Komponen bagian halaman yang lebih besar
  - `ui/` - Komponen UI yang lebih kecil dan dapat digunakan kembali
- `src/lib/` - Fungsi utilitas dan konfigurasi
- `src/hooks/` - Custom React hooks
- `src/types/` - Definisi tipe TypeScript

## Pengembangan Selanjutnya

- Implementasi API untuk formulir kontak
- Integrasi CMS untuk manajemen konten
- Menambahkan halaman blog
- Implementasi analitik
- Optimalisasi performa lebih lanjut

## Lisensi

[MIT](LICENSE)

---

Dibuat oleh Moon Astra Studio
