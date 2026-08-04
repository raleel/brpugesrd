# Ön Koşullar

1. [Markdown dili](https://www.markdownguide.org/basic-syntax/) hakkında temel bir anlayış.

2. Eğer yoksa ücretsiz bir [github](https://github.com/) hesabı oluşturmanız gerekecek. RPG'nizin adını kullanmanızı öneririm, çünkü bu, insanların SRD'nize erişmek için kullanacağı URL'nin bir parçası olacaktır.

3. Git bilmenize gerek kalmadan tüm bu süreci tarayıcı üzerinden gerçekleştirebilirsiniz. Ancak github desktop'ı öğrenmek, yaptığınız değişiklikleri dünyayla paylaşmadan önce yerel olarak test etmenize olanak tanır.

> Eğer kayıtlı bir alan adınız varsa, bunu bu süreçle birlikte kullanarak benim yaptığım gibi bir SRD oluşturabilirsiniz: https://srd.7thextinctionrpg.com

# Süreç

## Github'da Depo (Repository) Oluşturma

1. Github'a giriş yapın

2. Herkese açık şablona gidin: https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. "Use this template" (Bu şablonu kullan) seçeneğine tıklayın

![Step3](/_media/Step3.png)

4. "Create a new repository" (Yeni bir depo oluştur) seçeneğini seçin

5. Bir depo adı girin

![Step5](/_media/Step5.png)

6. 'Private' (Özel) seçeneğini seçin

7. 'Create repository' (Depo oluştur) seçeneğini seçin

Şablonun kopyalanması 5-30 saniye sürecek, ardından kendi kopyanıza sahip olacaksınız.

8. ".nojekyll" dosyasının mevcut olduğundan emin olun; bu, Github'da bir web sitesi barındırırken gereken boş bir dosyadır, aksi takdirde SRD düzgün görüntülenmeyecektir. *(GitHub Pages'e, yayınlanan dosyaları Jekyll aracılığıyla çalıştırmamasını söyler).*


## İçeriğinizi Ekleme

### *.md Dosyaları

.md dosyaları markdown dosyalarıdır. Markdown, düz metin belgelerine biçimlendirme öğeleri eklemek için kullanabileceğiniz hafif bir işaretleme dilidir. İçeriğinizin boyutuna bağlı olarak oyununuzun tüm bilgilerini tek bir *.md dosyasında toplayabilir veya benim [7thextinctionrpg.com](https://srd.7thextinctionrpg.com) adresinde yaptığım gibi her bölüm için ayrı dosyalar oluşturabilirsiniz. "sample.md" dosyası bazı biçimlendirme örnekleri sunar.

Markdown dilini öğrenmek çok kolaydır, söz diziminin tam listesi için yukarıdaki Ön Koşullar kısmının 2. maddesinde verilen bağlantıyı kullanın.

### _Sidebar.md

Bu, web sitesinin sol tarafındaki menünüz ve gezinme bölmenizdir. Deponuza bir markdown dosyası ekledikten sonra, içeriğinin dahil edilmesi için dosyayı buraya eklemeniz gerekir. Mevcut biçimlendirmeyi takip edin.


## Depoyu Web Sitesine Dönüştürmek için Github Pages'i Etkinleştirme

1. Deponuzda 'Settings' (Ayarlar) kısmına tıklayın

![Website-Step1](/_media/Website-Step1.png)

2. Sol taraftaki menüden 'Pages' (Sayfalar) kısmını seçin

![Website-Step2](/_media/Website-Step2.png)

3. Depoyu 'public' (herkese açık) yapmadıysanız, iki seçeneğiniz vardır:
    a. Depoyu herkese açık hale getirmek; bu, SRD Web Sitenizi ücretsiz olarak barındırmak için Github Pages'i kullanmanıza olanak tanır.
    b. Github hesabınızı yükseltmek (bu yazının yazıldığı sırada aylık 4$ veya yıllık 48$ ücreti vardır).

4. 'Branch' (Dal) altında 'main'i seçin ve kaydet'e tıklayın

5. 10-20 saniye bekleyin ve sayfayı yenileyin

6. Artık https://coweater.github.io/mysrd/ gibi URL'nizi göreceksiniz

![Website-Step6](/_media/Website-Step6.png)


## Yazı Tiplerini (Fontları) Değiştirme

1. /_assets/style.css dosyasını düzenleyin

2. 'body section' (gövde bölümü) altında siteFont ve headingFont değerlerini bulacaksınız

3. Bunları kullanmak istediğiniz yazı tipleriyle değiştirin


## SRD'nizde ücretsiz simgeleri görüntülemek için Fontawesome ve/veya Material Icons eklentisini kullanma

### Fontawesome

Ücretsiz simgeler ve hareketli simgeler elde etmek için Fontawesome'ı kullanın. Abone olan kullanıcılar Pro Simgeleri kullanabilir.

1. [Fontawesome](https://fontawesome.com/icons) adresinden simgeyi bulun
2. Simgeyi seçin
3. Açılır pencerede, HTML sekmesi altında " " arasındaki her şeyi kopyalayın

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Kopyalanan metni `:` arasına boşluk bırakmadan yerleştirin

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Daha fazla ücretsiz simge için Material Icons kullanın

1. Simgeleri [Material Icons](https://fonts.google.com/icons) adresinden bulun
2. Web span bağlantısını kopyalayın ve doğrudan markdown dosyalarınıza yapıştırın

```markup
<span class="material-icons">face</span>
```