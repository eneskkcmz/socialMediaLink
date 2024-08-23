# Sosyal Medya Link Yönetim Sistemi - Backend

**Proje Açıklaması:**
Bu proje, sosyal medya linklerini yönetmek için bir RESTful API sağlar. Kullanıcılar link ekleyebilir, güncelleyebilir, silebilirler. Bu API, bir Angular frontend ile entegre çalışmak üzere tasarlanmıştır.

## Özellikler

- [x] Sosyal medya linklerini listeleme (GET /api/GetAllSocialLinks)
- [x] Sosyal medya linki listeleme (GET /api/GetSocialMediaLinkById/:id)
- [x] Yeni link ekleme (POST /api/InsertSocialAddLink)
- [x] Mevcut linki güncelleme (PUT /api/UpdateSocialLink/:id)
- [x] Link silme (DELETE /api/DeleteSocialLink/:id)
- [x] MongoDB ile veri depolama

## Başlangıç

Bu projeyi yerel ortamınıza kurmak ve çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

Projeyi çalıştırmak için gerekli araçlar:

- [Node.js](https://nodejs.org/) (14.x veya üzeri)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Kurulum

Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyin:

1. **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/eneskkcmz/socialMediaLink
    cd backend
    cd socialLinkAPI
    ```

2. **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3. **Ortam Değişkenlerini Yapılandırın:**

    Ortam değişkenlerini yapılandırma adımları 3 durumda kontrol edilmektedir.

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

    2. Proje Ortamlarının Manuel kurulumu -- Bu kurulum 2 yönlü olarak düzenlenmiştir.
      git clone https://github.com/eneskkcmz/socialMediaLink
      proje repo üzerinden alındıktan sonra. Gelen ana klasörde cmd çalıştırmak ve 
      cd backend komutunu çalıştırarak dosya yoluna gelmek,
      cd socialLinkAPI komutunu çalıştırarak,
      backend projesine erişmek,
      burada projeyi çalışılacak proje ortamında açılmasını sağlamak örnek (vs code),
      daha sonra npm install ile gerekli kütüphaneleri yüklemek, **Buraya kadar kurulum alanları ortak buradan sonra ayrılmaktadır.**

      **CONFIG**  
      Projenin ayağa kalkma config durumu docker olarak düzenldiği için bu yöntemi kullanmak için projede seed.js içerisinde ve socialLinksApiServer.js,
      connectDB fonksiyonuna gidip mongose connect url'i 'mongodb://localhost:27017/socialLink' olarak değiştirmelisiniz.

     **Seed Data ile kuruluma devam etmek**
      Proje geliştirmesi local üzerinden ilerlediği ve datanın sadece geliştirilen bilgisayarın local ortamında kalmasından dolayı projenin alındığı ortamlar çalışılması için örnek 
      dataların oluşturulması sağlandı. 
      MongoDb bulunan bilgisayarda ortak adım sonrası node ./seed.js çalıştırılması default olarak bulunan mongodb://localhost:27017 database bağlanır.
      Gerekli dataları içeriye insert ederek kullanıcın projeye datayla ulaşmasını sağlar.
      Ardından node ./socialLinksApiServer.js çalıştırılarak backend tamamen ayağa kaldırılır.
      **Seed Datasız Kurulum**
      Burada direkt olarak node ./socialLinksApiServer.js çalıştırılarak backend tamamen ayağa kaldırılır.

      **Projenin ana klasörünü ayağa kaldırma konfigürasyon ve dataylı örnekleri pdf olarak eklenmiştir.**