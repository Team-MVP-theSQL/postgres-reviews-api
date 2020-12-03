const db = require('./index.js');
const Reviews = require('./Reviews.js');
const faker = require('faker');
const mongoose = require('mongoose');

let seedFunc = () => {

  let seedObjects = [];

  for (let i = 0; i < 500000; i++) {

    let randomImages = [];

    let randomNumberOfImages = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfImages; j++) {
      randomImages.push(faker.image.imageUrl());
    }

    let pros = [];

    let randomNumberOfPros = Math.floor(Math.random() * 5);
    for (let j = 0; j < randomNumberOfPros; j++) {
      pros.push(faker.lorem.word());
    }

    let cons = [];
    let randomNumberOfCons = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfCons; j++) {
      cons.push(faker.lorem.word());
    }

    let randomShoeId = Math.floor(Math.random() * 50000);

    let seedObject = {
      shoeId: randomShoeId,
      nickname: faker.name.findName(),
      location: faker.address.city(),
      title: faker.lorem.words(),
      body: faker.lorem.paragraph(),
      photos: randomImages,
      pros: pros,
      cons: cons,
      recommended: faker.random.boolean(),
      overallRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      qualityRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      valueRating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      timeCreated: faker.date.past(),
    };

    seedObjects.push(seedObject);
  }

  Reviews.deleteMany({})
    .then(() => {
      console.log('Reviews deleted')
      Reviews.insertMany(seedObjects)
        .then(() => {
          console.log('Reviews seeded');
          mongoose.connection.close();
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

seedFunc();