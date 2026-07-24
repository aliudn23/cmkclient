# CMK Client

Aplikasi frontend ini dibuat dengan Next.js.

## Cara menjalankan di local

1. Install dependency

```bash
npm install
```

2. Buat file `.env.local` dan isi URL API backend

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

> Sesuaikan nilai di atas dengan alamat backend yang sedang berjalan di lokal Anda.

3. Jalankan aplikasi

```bash
npm run dev
```

4. Buka browser ke

```text
http://localhost:3000
```

## Build untuk produksi

```bash
npm run build
npm run start
```
