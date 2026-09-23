# Prasyarat

1. Pemahaman dasar mengenai [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Anda perlu membuat akun [github](https://github.com/) gratis jika belum memilikinya. Disarankan untuk menggunakan nama RPG Anda karena ini akan menjadi bagian dari URL yang digunakan orang untuk mengakses SRD Anda. 

3. Anda dapat melakukan seluruh proses ini melalui peramban tanpa harus memahami git. Meskipun mempelajari github desktop akan memungkinkan Anda untuk menguji perubahan apa pun secara lokal sebelum menerbitkannya secara langsung agar dilihat dunia.

> Jika Anda memiliki nama domain terdaftar, Anda dapat menggunakannya dalam proses ini untuk membuat SRD seperti yang saya miliki https://srd.7thextinctionrpg.com

# Prosesnya

## Membuat Repositori di Github

1. Masuk ke Github

2. Navigasikan ke templat publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template"

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository"

5. Masukkan nama repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private' 

7. Pilih 'Create repository'

Dibutuhkan waktu 5-30 detik untuk menyalin templat, kemudian Anda akan memiliki salinan Anda sendiri.

8. Pastikan Anda memiliki berkas ".nojekyll". Ini adalah berkas kosong yang diperlukan saat menhosting situs web di Github, jika tidak, SRD tidak akan ditampilkan dengan benar. *(Memberitahu GitHub Pages untuk tidak menjalankan berkas yang dipublikasikan melalui Jekyll).*


## Menambahkan Konten Anda

### Berkas *.md

Berkas .md adalah berkas markdown. Markdown adalah bahasa markup ringan yang dapat Anda gunakan untuk menambahkan elemen pemformatan ke dokumen teks polos. Bergantung pada ukuran konten Anda, Anda dapat menempatkan semua informasi gim Anda dalam satu berkas *.md, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), buat berkas terpisah untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan. 

Bahasa markdown sangat mudah dipelajari, gunakan tautan yang disediakan pada poin 2 di bawah Prasyarat di atas untuk daftar lengkap sintaks. 

### _Sidebar.md

Ini adalah menu Anda, panel navigasi di sisi kiri situs web. Setelah Anda menambahkan berkas markdown ke repositori Anda, Anda perlu menambahkan berkas tersebut di sini agar isinya disertakan. Ikuti pemformatan yang sudah ada.


## Mengaktifkan Github Pages untuk Mengubah Repositori menjadi Situs Web

1. Di dalam repositori Anda, klik 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' pada menu sisi kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika Anda belum membuat repositori menjadi 'public', Anda memiliki dua pilihan
    a. Jadikan repositori publik yang kemudian akan memungkinkan Anda menggunakan Github pages untuk menghosting Situs Web SRD Anda secara gratis
    b. Tingkatkan akun Github Anda (pada saat penulisan ini, biayanya $4 per bulan atau $48 biaya tahunan)

4. Di bawah 'Branch', pilih 'main' dan klik save

5. Tunggu 10-20 detik kemudian segarkan halaman

6. Anda sekarang akan melihat URL Anda seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Mengubah Font

1. Edit berkas /_assets/Gaya.css 

2. Di bawah 'body section', Anda akan menemukan siteFont & headingFont

3. Ubah ini menjadi font yang ingin Anda gunakan


## Menggunakan plugin Fontawesome dan/atau Material Icons untuk menampilkan ikon gratis di SRD Anda

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon gratis dan ikon animasi. Pengguna yang berlangganan dapat menggunakan Pro Icons

1. Temukan ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon tersebut
3. Di jendela sembulan, di bawah tab HTML, salin semua yang ada di antara " "

```EXAMPLE
<i Kelas="fa-solid fa-dice-d20"></i>
```

4. Letakkan teks yang disalin di antara `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakan Material Icons untuk lebih banyak ikon gratis

1. Temukan ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan tautan span web secara langsung ke dalam berkas markdown Anda

```markup
<span Kelas="material-icons">face</span>
```