const mongoose = require('mongoose');

const socialLinksSchema = new mongoose.Schema({
  linkAdress: { type: String, required: true },
  linkAdressName: { type: String, required: true },
  linkAdressDescription: { type: String }
}, {
  versionKey: false
});

const SocialLink = mongoose.model('SocialLink', socialLinksSchema);

const seedData = [
  {
    linkAdress: 'instagram.com/mobilerast/',
    linkAdressName: 'Instagram',
    linkAdressDescription: "We'll help you to finish your development project successfully."
  },
  {
    linkAdress: 'tr.linkedin.com/company/rastmobile',
    linkAdressName: 'Linkedin',
    linkAdressDescription: 'Hire vetted developers from Rast Mobile to scale up your tech projects.'
  },
  {
    linkAdress: 'behance.net/rastmobile',
    linkAdressName: 'Twitter ',
    linkAdressDescription: 'Software Development Agency Rast Mobile Information Technology Ltd.'
  },
  {
    linkAdress: 'https://www.linkedin.com/in/enes-kocamaz/',
    linkAdressName: 'Linkedin ',
    linkAdressDescription: 'Software Developer Enes Kocamaz Linkedin URL.'
  },
  {
    linkAdress: 'https://github.com/eneskkcmz/',
    linkAdressName: 'GitHub ',
    linkAdressDescription: 'Software Developer Enes Kocamaz Github URL.'
  },
];

const connectDB = async () => {
  try {
    // await mongoose.connect('mongodb://localhost:27017/socialLink', {
      await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const seedDB = async () => {
  try {
    await SocialLink.deleteMany({});
    console.log('Existing data cleared');

    await SocialLink.insertMany(seedData);
    console.log('Seed data inserted');
  } catch (error) {
    console.error('Error seeding data:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

const run = async () => {
  await connectDB();
  await seedDB();
};

run();
