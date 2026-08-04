# Prasyarat

1. Pemahaman asas tentang [bahasa markdown](https://www.markdownguide.org/basic-syntax/).

2. Anda perlu membuat akaun [github](https://github.com/) percuma jika belum mempunyai satu. Adalah disyorkan supaya anda menggunakan nama RPG anda kerana ini akan menjadi sebahagian daripada URL yang akan digunakan oleh orang ramai untuk mengakses SRD anda.

3. Anda boleh melakukan keseluruhan proses ini melalui pelayar web tanpa perlu mengetahui git. Walau bagaimanapun, mempelajari github desktop akan membolehkan anda menguji sebarang perubahan secara lokal sebelum menerbitkannya secara langsung untuk dilihat oleh dunia.

> Jika anda mempunyai nama domain yang berdaftar, anda boleh menggunakannya dengan proses ini untuk membuat SRD seperti yang saya lakukan https://srd.7thextinctionrpg.com

# Proses

## Mencipta Repositori di Github

1. Log masuk ke Github

2. Navigasi ke templat awam https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Klik "Use this template"

![Step3](/_media/Step3.png)

4. Pilih "Create a new repository"

5. Masukkan nama repositori

![Step5](/_media/Step5.png)

6. Pilih 'Private'

7. Pilih 'Create repository'

Ia akan mengambil masa 5-30 saat untuk menyalin templat tersebut, kemudian anda akan mempunyai salinan anda sendiri.

8. Pastikan anda mempunyai fail ".nojekyll", ini adalah fail kosong yang diperlukan apabila mengehoskan laman web di Github, jika tidak SRD tidak akan dipaparkan dengan betul. *(Memberitahu GitHub Pages supaya tidak menjalankan fail yang diterbitkan melalui Jekyll).*


## Menambah Kandungan Anda

### Fail *.md

Fail .md ialah fail markdown; Markdown ialah bahasa penanda ringan yang boleh anda gunakan untuk menambah elemen pemformatan pada dokumen teks biasa. Bergantung pada saiz kandungan anda, anda boleh meletakkan semua maklumat permainan anda dalam satu fail *.md, atau seperti yang saya lakukan di [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), cipta fail berasingan untuk setiap bab. "sample.md" menyediakan beberapa contoh pemformatan.

Bahasa Markdown sangat mudah dipelajari, gunakan pautan yang disediakan pada perkara 2 di bawah Prasyarat di atas untuk senarai sintaks penuh.

### _Sidebar.md

Ini ialah menu atau anak tetingkap navigasi anda di sebelah kiri laman web. Sebaik sahaja anda telah menambah fail markdown ke repositori anda, anda perlu menambah fail tersebut di sini supaya kandungannya disertakan. Ikuti pemformatan sedia ada.


## Mendayakan Github Pages untuk Menukar Repositori kepada Laman Web

1. Dalam repositori anda, klik pada 'Settings'

![Website-Step1](/_media/Website-Step1.png)

2. Pilih 'Pages' pada menu sebelah kiri

![Website-Step2](/_media/Website-Step2.png)

3. Jika anda belum menjadikan repositori tersebut 'public', anda mempunyai dua pilihan:
    a. Jadikan repositori tersebut awam (public), yang kemudiannya membolehkan anda menggunakan Github pages untuk mengehoskan Laman Web SRD anda secara percuma.
    b. Naik taraf akaun Github anda (pada masa penulisan ini, ia berharga $4 sebulan atau yuran tahunan $48).

4. Di bawah 'Branch', pilih 'main' dan klik simpan.

5. Berikan masa 10-20 saat kemudian muat semula (refresh) halaman tersebut.

6. Anda kini akan melihat URL anda seperti https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Menukar Fon

1. Edit fail /_assets/style.css

2. Di bawah 'body section', anda akan menemui siteFont & headingFont

3. Tukar bahagian ini kepada fon yang ingin anda gunakan


## Menggunakan pemalam Fontawesome dan/atau Material Icons untuk memaparkan ikon percuma dalam SRD anda

### Fontawesome

Gunakan Fontawesome untuk mendapatkan ikon percuma dan ikon animasi. Pengguna yang melanggan boleh menggunakan Pro Icons.

1. Cari ikon di [Fontawesome](https://fontawesome.com/icons)
2. Pilih ikon tersebut
3. Dalam tetingkap timbul (popup), di bawah tab HTML, salin semua yang berada di antara " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Letakkan teks yang disalin di antara `:` tanpa ruang

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Gunakan Material Icons untuk lebih banyak ikon percuma

1. Cari ikon di [Material Icons](https://fonts.google.com/icons)
2. Salin & masukkan pautan web span terus ke dalam fail markdown anda

```markup
<span class="material-icons">face</span>
```