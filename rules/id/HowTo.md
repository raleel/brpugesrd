# Prasyarat

1. Pemahaman dasar tentang [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Kamu perlu membuat akun [github](https://github.com/) gratis jika belum memilikinya. Disarankan untuk menggunakan nama RPG kamu karena ini akan menjadi bagian dari URL yang digunakan orang untuk mengakses SRD kamu.

3. Kamu bisa melakukan seluruh proses ini melalui browser tanpa perlu tahu git. Meskipun mempelajari github desktop akan memungkinkanmu untuk menguji perubahan apa pun secara lokal sebelum menerbitkannya agar dilihat dunia.

> Jika kamu memiliki nama domain terdaftar, kamu bisa menggunakannya dengan proses ini untuk membuat SRD seperti yang saya lakukan https://srd.7thextinctionrpg.com

# Prosesnya

## Membuat Repositori di Github

1. Masuk ke Github

2. Navigasikan ke template publik https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template"

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository"

5. Masukkan nama repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private'

7. Pilih 'Create repository'

Dibutuhkan 5-30 detik untuk menyalin template, kemudian kamu akan memiliki salinan milikmu sendiri.

8. Pastikan kamu memiliki file ".nojekyll", ini adalah file kosong yang diperlukan saat menghosting situs web di Github, jika tidak, SRD tidak akan ditampilkan dengan benar. *(Memberitahu GitHub Pages untuk tidak menjalankan file yang dipublikasikan melalui Jekyll).*


## Menambahkan Konten Kamu

### File *.md

File .md adalah file markdown, Markdown adalah bahasa markup ringan yang bisa kamu gunakan untuk menambahkan elemen pemformatan ke dokumen teks biasa. Bergantung pada ukuran kontenmu, kamu bisa menempatkan semua informasi game-mu dalam satu file *.md, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) dengan membuat file terpisah untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan.

Bahasa Markdown sangat mudah dipelajari, gunakan tautan yang disediakan pada poin 2 di bawah Prasyarat di atas untuk daftar sintaks lengkap.

### _Sidebar.md

Ini adalah menu kamu, panel navigasi di sisi kiri situs web. Setelah kamu menambahkan file markdown ke repositorimu, kamu perlu menambahkan file tersebut di sini agar isinya disertakan. Ikuti pemformatan yang sudah ada.


## Mengaktifkan Github Pages untuk Mengubah Repositori menjadi Situs Web

1. Di repositorimu klik 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' pada menu sisi kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika kamu belum membuat repositori menjadi 'public', kamu memiliki dua pilihan
    a. Jadikan repositori publik yang kemudian akan memungkinkanmu menggunakan Github pages untuk menghosting Situs Web SRD kamu secara gratis
    b. Tingkatkan akun Github kamu (pada saat penulisan ini, biayanya $4 per bulan atau biaya tahunan $48)

4. Di bawah 'Branch' pilih 'main' dan klik simpan

5. Beri waktu 10-20 detik lalu segarkan halaman

6. Kamu sekarang akan melihat URL milikmu seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Mengubah Font

1. Edit file /_assets/Gaya.css

2. Di bawah 'body section' kamu akan menemukan siteFont & headingFont

3. Ubah ini ke font yang ingin kamu gunakan


## Menggunakan plugin Fontawesome dan/atau Material Icons untuk menampilkan ikon gratis di SRD kamu

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon gratis dan ikon animasi. Pengguna yang berlangganan dapat menggunakan Pro Icons

1. Temukan ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon tersebut
3. Di jendela pop-up, di bawah tab HTML salin semua yang ada di antara " "

```EXAMPLE
<i Kelas="fa-solid fa-dice-d20"></i>
```

4. Tempatkan teks yang disalin di antara `:` tanpa spasi

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakan Material Icons untuk lebih banyak ikon gratis

1. Temukan ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan tautan span web langsung ke file markdown kamu

```markup
<span Kelas="material-icons">face</span>
```