# AstroBilgi – Web Proje Ödevi
**Hazırlayan:** Aslı Berra Çekçi  
**Ders:** Ağ Tabanlı Programlamaya Giriş

Bu proje, Ağ Tabnlı Programlamaya Giriş dersi kapsamında hazırlanmış bir astroloji temalı tanıtım sitesidir.  
Sitenin ana konusu burçlar ve temel astroloji bilgileri üzerine kuruludur.

## Kullanılan Teknolojiler

- **HTML5**: Sayfa yapısı ve içerik
- **CSS3**: Tasarım, renkler, yerleşim ve responsive yapı
- **JavaScript**: Burç hesaplama ve galeri etkileşimleri

## Sayfa Yapısı

- **index.html (Anasayfa)**  
  - Üst kısımda sabit bir menü (AstroBilgi logosu, Anasayfa / Galeri / Hakkımızda / İletişim linkleri)  
  - “Yıldızların Diline Hoşgeldiniz” başlıklı hero alanı  
  - 12 burcun kartlar halinde listelendiği bölüm  
  - Gün ve aya göre Güneş burcunu hesaplayan bir form

- **galeri.html (Galeri)**  
  - Solda büyük, sağda küçük görsellerden oluşan bir galeri  
  - Küçük görsele tıklayınca JavaScript ile büyük görsel değişmektedir.

- **hakkimizda.html (Hakkımızda)**  
  - Projenin amacı ve kullanılan teknolojiler hakkında kısa metin

- **iletisim.html (İletişim)**  
  - İsim, e-posta ve mesaj alanlarından oluşan basit bir form  
  - Form gönderildiğinde JavaScript ile “Mesajınız gönderildi” uyarısı veren buton

- **Burç detay sayfaları (koc.html, boga.html, ikizler.html, ...)**  
  - Her sayfada ilgili burcun tarih aralığı, elementi, yönetici gezegeni ve kısa açıklaması bulunmaktadır.

## JavaScript Özellikleri

- **Burç Hesaplama (script.js)**  
  - Kullanıcının girdiği gün ve aya göre ilgili Güneş burcunu hesaplar  
  - Sonucu sayfa üzerinde gösterir

- **Galeri Görsel Değiştirme**  
  - Galeri sayfasında küçük görsellere tıklanınca büyük görsel dinamik olarak değiştirilir.

## Öğrenilenler / Kazanımlar

- HTML ile çok sayfalı site yapısı oluşturma  
- Ortak CSS dosyası ile farklı sayfalara tasarım vermek  
- Basit JavaScript ile form işlemleri ve etkileşimli görsel galeri oluşturma  
- GitHub üzerinde repository oluşturma ve projeyi publish etme
