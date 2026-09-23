# Prasyarat

1. Pemahaman dasar tentang [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Kamu perlu membuat akun [github](https://github.com/) gratis jika belum memilikinya. Disarankan untuk menggunakan nama RPG kamu karena ini akan menjadi bagian dari URL yang digunakan orang untuk mengakses SRD kamu. 

3. Kamu bisa melakukan seluruh proses ini melalui peramban tanpa harus tahu git. Walaupun mempelajari github desktop akan memungkinkanmu untuk menguji setiap perubahan secara lokal sebelum menayangkannya langsung agar dunia bisa melihatnya.

> Jika kamu sudah mendaftarkan nama domain, kamu bisa menggunakannya dengan proses ini untuk membuat SRD seperti yang saya miliki https://srd.7thextinctionrpg.com

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

Dibutuhkan waktu 5-30 detik untuk menyalin templat, setelah itu kamu akan memiliki salinan milikmu sendiri.

8. Pastikan kamu memiliki berkas ".nojekyll", ini adalah berkas kosong yang diperlukan saat meng-hosting situs web di Github, jika tidak SRD tidak akan tampil dengan benar. *(Memberitahu GitHub Pages untuk tidak menjalankan berkas yang dipublikasikan melalui Jekyll).*


## Menambahkan Konten Kamu

### Berkas *.md

Berkas .md adalah berkas markdown, Markdown adalah bahasa markup ringan yang bisa kamu gunakan untuk menambahkan elemen pemformatan ke dokumen teks biasa. Tergantung pada ukuran kontenmu, kamu bisa meletakkan semua informasi game-mu dalam satu berkas *.md tunggal, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), membuat berkas terpisah untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan. 

Bahasa Markdown sangat mudah dipelajari, gunakan tautan yang disediakan pada poin 2 di bawah Prasyarat di atas untuk daftar sintaks lengkap. 

### _Sidebar.md

Ini adalah menu, panel navigasi di sisi kiri situs web. Setelah kamu menambahkan berkas markdown ke repositorimu, kamu perlu menambahkan berkas tersebut di sini agar isinya disertakan. Ikuti pemformatan yang sudah ada.


## Mengaktifkan Github Pages untuk Mengubah Repositori Menjadi Situs Web

1. Di repositorimu, klik 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' pada menu sisi kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika kamu belum membuat repositori menjadi 'public', kamu punya dua pilihan
    a. Membuat repositori menjadi publik yang nantinya memungkinkanmu menggunakan Github pages untuk meng-hosting Situs Web SRD kamu secara gratis
    b. Meningkatkan akun Github kamu (pada saat penulisan ini, biayanya $4 per bulan atau biaya tahunan $48)

4. Di bawah 'Branch', pilih 'main' dan klik save

5. Tunggu 10-20 detik lalu segarkan halaman

6. Kamu sekarang akan melihat URL milikmu seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Mengubah Font

1. Edit berkas /_assets/Gaya.css 

2. Di bawah 'body section', kamu akan menemukan siteFont & headingFont

3. Ubah ini ke font yang ingin kamu gunakan


## Menggunakan plugin Fontawesome dan/atau Material Icons untuk menampilkan ikon gratis di SRD kamu

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon gratis dan ikon animasi. Pengguna berlangganan dapat menggunakan Pro Icons

1. Temukan ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon tersebut
3. Di jendela popup, di bawah tab HTML, salin semua yang ada di antara " "

```EXAMPLE
<i Kelas="fa-solid fa-dice-d20"></i>
```

4. Letakkan teks yang disalin di antara `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakan Material Icons untuk mendapatkan lebih banyak ikon gratis

1. Temukan ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan tautan span web langsung ke dalam berkas markdown kamu

```markup
<span Kelas="material-icons">face</span>
```