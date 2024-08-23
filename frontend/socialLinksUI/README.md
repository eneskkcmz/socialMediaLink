# Sosyal Medya Link Yönetim Sistemi

**Proje Açıklaması:**
Bu proje, kullanıcıların sosyal medya bağlantılarını yönetebilmeleri için geliştirilmiştir. Kullanıcılar, sosyal medya linklerini ekleyebilir, güncelleyebilir, silebilir ve son gezilen linklerin listesini görüntüleyebilirler.

## Özellikler

- [x] Sosyal medya linklerinin listelenmesi
- [x] Yeni sosyal medya linklerinin eklenmesi
- [x] Mevcut sosyal medya linklerinin güncellenmesi
- [x] Sosyal medya linklerinin silinmesi
- [x] Son gezilen linklerin listelenmesi
- [x] Responsive tasarım ve kullanıcı dostu arayüz
- [x] Angular Material ile kullanıcı deneyimini geliştirme

## Başlangıç

Bu projeyi yerel ortamınıza kurmak ve çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

Projeyi çalıştırmak için gerekli araçlar:

- [Node.js](https://nodejs.org/) (12.x veya üzeri)
- [Angular CLI](https://angular.io/cli) (v12 veya üzeri)

### Yapılandırma

- **API URL'si**: API yapılandırmasını `src/environments/environment.ts` dosyasından yapabilirsiniz.

## Kullanım

Projenin temel kullanımına dair adımlar:

1. **Link Ekleme:**
    - Ana sayfadaki "Yeni Hesap Ekle" butonuna tıklayın.
    - Açılan formu doldurup "Kaydet" butonuna tıklayın.
  
2. **Link Güncelleme:**
    - Listelenen linklerin bulunduğa row'a tıklayın.
    - Açılan formda gerekli güncellemeleri yapın ve "Kaydet" butonuna tıklayın.

3. **Link Silme:**
    - Listelenen linklerin bulunduğa row'a tıklayın ve burada İptal Et butonuna tıklayın.
    - Silme işlemini onaylayın.

4. **Son Gezilen Linklerin Listelenmesi:**
    - Ana sayfadaki "Son Gezilen Linkler" bölümünden en son ziyaret edilen sosyal medya linklerini görüntüleyin.

### Kurulum

Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/eneskkcmz/socialMediaLink
    cd frontend
    cd socialLinksUI
    ```

2. **Ortam Değişkenlerini Yapılandırın:**

    Ortam değişkenlerini yapılandırma adımları 2 durumda kontrol edilmektedir.

    1. Docker ile kurulum,
      git clone https://github.com/eneskkcmz/socialMediaLink
      proje repo üzerinden alındıktan sonra. Gelen ana klasörde cmd çalıştırmak ve bilgisayarda docker'ı çalıştırmak.
      docker compose up --build ile komut çalıştırma işlemi gerçekleştirilir.
      Backend ve frontend için oluşturulmuş docker file'ları mongo db ile compose içerisinde ayağa kaldırır.
      mongoDb docker ile mongodb://localhost:27000 da ayağa kalkar.
      **-**
      Backend için gerekli npm kütüphaneleri kurulumunu sağlar (npm install), ardından backend için geliştirilen Seed Data için yazılan seed.js dosyasını (node ./seed.js) olarak
      çalıştırır ve mongo db üzerinden mongodb://localhost:27000 bağlanır. Seed Data olarak verilen 5 datayı örnek oluşturması açısından database ekler ve ardından restful api 
      methodlarının bulunduğu servis sayfasını (node ./socialLinksApiServer.js) çalıştırır ve böylelikle backendi ayağa kaldırır.
      **-**
      Frontend için gerekli npm kütüphaneleri kurulumunu sağlar (npm install), ardından frontend projesinin ayağa kalkması için (ng serve) komutunu çalıştırır ve projeyi ayağa
      kaldırarak çalıştırır. Compose tamamlandıktan sonra çalıştırılan konsol üzerinden http://localhost:4200/ portunda proje ayağa kalkar.
      **-**
      Bu kullanım ile proje paketlerinin yüklenmesi ve proje ayağa kalkması sağlanır. Ortamların ayrı ayrı kontrolü ve data problemlerinin önüne geçilmek amaçlı eklenmiştir.

    2. Manuel kurulum,
       Docker ile kurulumda projey erişip tekrar ayağa kaldırmaya gerek yoktur çünkü docker file ve compose içerinde bu işlemler gerçekleşir. Manuel geliştirme ortamı için,

       socilLinkUI dosya yolunda,
       komut satırında, npm install komutu ile kütüphanelerin yüklenmesi,
       komut satırında, ng serve projeninin ayağa kaldırılması sağlanır.

      **Projenin ana klasörünü ayağa kaldırma konfigürasyon ve dataylı örnekleri pdf olarak eklenmiştir.**