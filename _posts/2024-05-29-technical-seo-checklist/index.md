---
title: Daftar periksa teknikal SEO
date: '2024-05-29'
excerpt: Daftar periksa yang bisa kamu gunakan sebagai panduan terkait teknikal SEO
author: mazipan
published: true
featured: false
tags: [web]
coverImage: /thumbnail/technical-seo-checklist/pexels-thatguycraig000-1526857.jpg
lang: id
enready: false
---

## Apa itu teknikal SEO dan kenapa penting

Dalam artikel komprehensif [Technical SEO: The Definitive Guide](https://backlinko.com/technical-seo-guide) disebutkan bahwa teknikal SEO adalah proses untuk memastikan bahwa situs web memenuhi persyaratan teknis dari mesin pencari modern dengan tujuan meningkatkan peringkat organik.

Kenapa hal ini menjadi bagian penting dari keseluruhan proses optimasi mesin pencari adalah karena memang teknikal SEO merupakan landasan agar halaman website bisa ditampilkan dengan benar di mesin pencarian. Tapi bahkan setelah halaman website kalian berhasil di index dan ditampilkan di mesin pencarian, pun sebenarnya pekerjaan teknis mengenai SEO ini tidak berhenti sampai disitu. Kalian mesti tetap memastikan halaman-halaman tersebut memang telah dioptimalkan untuk SEO mulai dari keamaan yang tetap mesti terjaga dengan tetap memastikan minimal SSL nya tetap aktif, bisa ditampilkan di layar yang lebih kecil seperti telepon genggam dengan baik, cepat dalam urusan waktu pemuatan, memantau jumlah laman tidak ditemukan (404) agar tidak kebablasan, dan setumpuk pekerjaan lainnya.

Teknikal SEO aslinya bukan barang baru, dan kebanyakan pengetahuan itu masih mirip-mirip atau masih bisa diturunkan dari pengetahuan yang lebih lawas. Hanya saja karena perubahan implementasi dari suatu website tersebut makanya hal yang sama menjadi berbeda untuk mengaplikasikannya. Kenapa pentingnya memahami tujuan dasarnya dari pekerjaan teknikal SEO agar ketika misalnya di masa depan implemetasi teknologinya telah berubah pun tetap bisa mencari cara lain untuk mencapai hal yang sama atau serupa.

## Rendering Halaman

Sebelumnya sebaiknya kalian membaca artikel [Rendering on the Web](https://web.dev/articles/rendering-on-the-web) untuk memahami berbagai macam cara rendering sebuah laman web.

![Berbagai macam proses rendering beserta kelebihan dan kekurangannya](/thumbnail/technical-seo-checklist/rendering-tradeoff.png)

Meskipun sudah ada panduan dasar, bagaimana [Crawler bisa menjalankan JavaScript di client](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) sehingga opsi menggunakan *full client side rendering (CSR)* bisa saja diambil. Namun sebaiknya ini menjadi pilihan terakhir saja. Pun kalau Crawler dari mesin pencari bisa menjalankan JavaScript namun bisa jadi beberapa peralatan pengujian belum tentu bisa menjalankannya dengan baik sebaik yang Crawler lakukan. Akan ada kesenjangan yang bisa membingunkan untuk pengambilan keputusan di masa mendatang. Opsi terbaik tentu saja SSR atau opsi serupa yang tujuannya mengembalikan markup html langsung beserta konten yang dibutuhkan oleh Crawler.

### 🔖 Daftar Periksa: Rendering Halaman

- ✅ Memastikan halaman di render dengan benar
- ✅ Memastikan informasi penting telah di-*render* bersamaan dengan HTML

## Meta Tags

Meta tag merupakan tag HTML kritis yang dibutuhkan oleh Crawler untuk mengidentifikasi halaman dari sebuah website.

### 🔖 Daftar Periksa: Meta Tags

- ✅ Memastikan semua meta tag di-*render* dari server
- ✅ Memastikan sudah ada tag `<meta name="viewport"/>` yang tepat agar laman bisa responsive dengan perubahan lebar layar
- ✅ Memastikan sudah ada metatag `<meta name="robots" />` yang memberikan akses pada crawler untuk meng-*index* sebuah laman
- ✅ Memastikan hanya website dengan lingkungan production yang dibolehkan untuk di *index*
- ✅ Terdapat metatag `title` dan `description` yang unik untuk setiap laman yang berbeda
- ✅ Mengecek maksimum panjang karakter dari metatag `description` agar tidak melebihi dari 155 karaker atau beberapa referensi lain menyebutkan 160 karaker
- ✅ Terdapat metatag OpenGraph dan Twitter Card yang sesuai. Minimal ada tag untuk title, description, dan image
- ✅ Terdapat metatag `<link rel="canonical" />` agar bisa mengeliminasi kemungkinan halaman duplikat karena ada parameter tambahan yang tidak diinginkan

## Structured Data

### 🔖 Daftar Periksa: Structured Data

- ✅ Memastikan Structured Data di-*render* bersamaan dengan HTML
- ✅ Minimal ada Structured Data [Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) yang menunjukkan hierarki dari suatu laman
- ✅ Ada Structured Data [Article](https://developers.google.com/search/docs/appearance/structured-data/article) bila bentuk laman dibisa diatur serupa seperti artikel sebuah blog yang memiliki konten dengan banyak penjelasan informatif di dalamnya
- ✅ Ada Structured Data [SearchBox](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox) bila website tersebut memiliki universal search

## Semantic HTML

### 🔖 Daftar Periksa: Semantic HTML

- ✅ Memastikan telah me-*render* semua Link dengan benar menggunakan tag `<a>` agar mudah dibaca oleh Crawler
- ✅ Memastikan hanya terdapat 1 tag `h1` yang menjadi judul dari sebuah halaman
- ✅ Memilih tag-tag yang memberikan penekanan lebih, seperti `<strong>` danx `<em>` bila kata-kata tersebut penting untuk diperhatikan oleh Crawler. Namun tetap gunakan tag biasa bila memang tidak dibutuhkan.
- ✅ Me-*render* gambar dengan tepat beserta `alt` atau caption yang dekriptif

## Tampilan

### 🔖 Daftar Periksa: Tampilan

- ✅ Bisakah menyematkan komponen Breadcrumb sebagai alat navigasi yang di-*render* dengan tag `<a>`?
- ✅ Memastikan bisa ditampilkan di layar kecil dan tidak terdapat konten yang melebihi layar sehingga muncul horizontal scroll yang tidak pada tempatnya

## Robots dan Sitemaps

### 🔖 Daftar Periksa: Robots dan Sitemaps

- ✅ Memastikan sudah ada robots.txt.
- ✅ Memastikan robots.txt tidak melakukan bloking pada halaman-halaman yang tidak seharusnya
- ✅ Memastikan robots.txt sudah menyebutkan lokasi sitemaps.
- ✅ Memastikan sudah ada sitemaps, kalau terdapat banyak sitemaps maka pastikan membuat sitemaps index dan mendaftarkan semua lokasi sitemaps di dalamnya.
- ✅ Memastikan sitemaps sudah pula memuat laman-laman yang dinamis
- ✅ Memastikan sitemaps akan diperbarui secara berkala

## Performa Web

### 🔖 Daftar Periksa: Performa Web

- ✅ Lazy load gambar yang tidak dibutuhkan di awal
- ✅ Memberikan opsi gambar dengan ekstensi webp atau ekstensi lain yang lebih modern
- ✅ Memberikan opsi gambar dengan dimensi yang lebih kecil untuk layar yang lebih kecil
- ✅ Pastikan sebelumnya sudah melakukan kompresi kualitas pada gambar
- ✅ Kalau diperlukan, sudah melakukan `preload` pada asset atau sumber daya paling kritis
- ✅ Menyetel cache control dengan tepat terutama untuk berbagai asset dan static resources
- ✅ Pastikan sudah menyetel kompresi asset dan static resources, baik dengan Brotli atau gzip
- ✅ Secara berkala, melakukan pengecekan dan perbaikan terhadap error yang ditemui atau peningkatan yang bisa dikerjakan berkaitan dengan performa web

## Monitoring

### 🔖 Daftar Periksa: Monitoring

- ✅ Memastikan kepemilikan sudah tervalidasi dengan benar, umumnya dengan TXTRecord di DNS, tapi bisa juga dengan menambah meta tag
- ✅ Secara berkala mengecek Search Console dan memperbaiki berbagai error yang ditemukan

## Eksplorasi Tambahan

### 🔖 Daftar Periksa: Eksplorasi Tambahan

- ✅ Mungkinkah untuk menambahkan artikel tambahan (biasa dikenal dengan SEO Text) bahkan untuk halaman-halaman yang sejatinya bukan sebuah artikel blog?

## Peralatan Bantuan

- ▶️ [**Search Console**](https://search.google.com/search-console): untuk memonitor berbagai metrik terkait performa website kalian di mesin pencari
- ▶️ [**Rich Results**](https://search.google.com/test/rich-results): digunakan untuk melakukan pengujian [Stuctured Data Markup](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- ▶️ [**PageSpeed Insights**](https://pagespeed.web.dev/): digunakan untuk melakukan pengujian performa pemuatan dari sebuah laman website
- ▶️ [**Metatags.io**](https://metatags.io/): untuk melakukan pengujian pada meta tag sebuah laman

## 🚦 Peringatan Tambahan

Memberikan akses ke Crawler dan mesin pencari bisa menaikkan juga peluang halaman website kalian untuk di crawl oleh Bot yang tidak diinginkan. Hal ini akan menjadikan traffic ke dalam website bisa naik secara signifikan namuim belum tentu berbuah baik. Karenanya kalian mungkin perlu secara berkala mengecek traffic yang datang dan melakukan bloking bisa memang diperlukan terutama pada Bot yang tidak diinginkan.

## 👋 Sekian dan terima kasih

Semoga bermanfaat 🙇

---

Foto cover diambil dari laman [Pexel](https://www.pexels.com/id-id/foto/pria-menyelinap-di-rumah-kayu-coklat-1526857/), Foto oleh [Craig Adderley](https://www.pexels.com/id-id/@thatguycraig000/)
