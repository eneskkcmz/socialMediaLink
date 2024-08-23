const globalMessage = require('./returnStatusMessage');
const enumVeriable = require('./env');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// mongoose.connect('mongodb://localhost:27017/socialLink', {
  mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB bağlantısı başarılı!');
});

const socialLinksSchema = new mongoose.Schema({
  linkAdress: { type: String, required: true },
  linkAdressName: { type: String, required: true },
  linkAdressDescription: { type: String }
}, {
  versionKey: false
});

const SocialMedia = mongoose.model('SocialLinks', socialLinksSchema);

app.get('/api/GetAllSocialLinks', async (req, res) => {
  try {
    const links = await SocialMedia.find(); //mongo db bağlantısı ile modelden döneni arayarak dönen response alır
    //json'a çevrilerek datayı alır. Duruma göre status veya api dönüş mesajları kontrol edilebilir. Burada succes mesajı verilmiştir. Hata ve success mesajı verilmiştir.
    res.json({
      message: globalMessage.getAllLinkSuccess,
      data: links
    });
  } catch (err) {
    res.status(500).json({
      message: globalMessage.getAllNotReturnLink,
      error: err.message
    });
  }
});

app.get('/api/GetSocialMediaLinkById/:id', async (req, res) => {
  try {
    const link = await SocialMedia.findById(req.params.id);

    if (!link) {
      return res.status(404).send({ message: 'Link not found' });
    }

    res.send({ message: 'Link retrieved successfully', data: link });
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving link', error: err.message });
  }
});

app.post('/api/InsertSocialAddLink', async (req, res) => {
  const { linkAdress, linkAdressName, linkAdressDescription } = req.body;

  // Her alanın doğruluğunun kontrolü sağlanarak global mesaj yönetimi sağlanmıştır. Proje geliştikçe burada oluşan hata durumları daha da güçlendirilebilir.
  if (!linkAdress || typeof linkAdress !== 'string') {
    return res.status(400).json({
      message: globalMessage.postErrorSocialAddLinkAdress
    });
  }
  if (!linkAdressName || typeof linkAdressName !== 'string') {
    return res.status(400).json({
      message: globalMessage.postErrorSocialAddLinkAdressName
    });
  }
  if (!linkAdressDescription || typeof linkAdressDescription !== 'string') {
    return res.status(400).json({
      message: globalMessage.postErrorSocialAddLinkDescription
    });
  }

  const newLink = new SocialMedia({
    linkAdress,
    linkAdressName,
    linkAdressDescription
  });

  await newLink.save();

  const responseData = newLink.toObject();
  res.status(201).json({
    message: globalMessage.postSuccessAddLink,
    data: responseData
  });
});

app.put('/api/UpdateSocialLink/:id', async (req, res) => {

  const { id } = req.params;

  const { linkAdress, linkAdressName, linkAdressDescription } = req.body;

  // Her alanın doğruluğunun kontrolü sağlanarak global mesaj yönetimi sağlanmıştır. Proje geliştikçe burada oluşan hata durumları daha da güçlendirilebilir.
  if (!linkAdress || typeof linkAdress !== 'string') {
    return res.status(400).json({
      message: globalMessage.putErrorLinkAdress
    });
  }
  if (!linkAdressName || typeof linkAdressName !== 'string') {
    return res.status(400).json({
      message: globalMessage.putErrorLinkAdressName
    });
  }
  if (!linkAdressDescription || typeof linkAdressDescription !== 'string') {
    return res.status(400).json({
      message: globalMessage.putErrorLinkAdressDescription
    });
  }

  // Belirtilen id'ye sahip datayı bulma burada 
  const checkId = await SocialMedia.findById(id); //mongoose da kullanılan object id ile ilişkilendirilmiş datayı bulmayı sağlar

  if (!checkId) {
    return res.status(404).json({
      message: globalMessage.putErrorIdCheck
    });
  }

  checkId.linkAdress = linkAdress;
  checkId.linkAdressName = linkAdressName;
  checkId.linkAdressDescription = linkAdressDescription;

  const updatedLink = await checkId.save();

  // Başarıyla güncellendiğinde döndürülecek yanıt status 200 olarak put http restful api yönetimine göre.
  const responseData = updatedLink.toObject();
  res.status(200).json({
    message: globalMessage.putSocialAddLink,
    data: responseData
  });
});

app.delete('/api/DeleteSocialLink/:id', async (req, res) => {
  const { id } = req.params;

  const deletedLink = await SocialMedia.findByIdAndDelete(id);

  if (!deletedLink) {
    return res.status(404).json({
      message: globalMessage.deleteErrorIdCheck
    });
  }

  res.status(200).json({
    message: globalMessage.deleteSuccessLink,
    data: deletedLink
  });
});

app.listen(enumVeriable.port, () => {
  console.log(`Sunucu http://localhost:${enumVeriable.port} adresinde çalışıyor`);
});