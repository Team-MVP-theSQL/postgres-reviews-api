const db = require('./index.js');
const Review = require('./Reviews.js');
const faker = require('faker');

let seedFunc = async () => {

  let seedObjects = [];
  let numSeeded = 0;

  for (let i = 0; i < 100000; i++) {

    let randomImages = [];

    let imageStr = '';
    let randomNumberOfImages = Math.floor(Math.random() * 3);
    for (let j = 0; j < randomNumberOfImages; j++) {
      randomImages.push(`https://loremflickr.com/640/480/shoelaces?random=${j}`);
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

    let seedObject = {
      shoeid: Math.floor(Math.random() * 10000),
      nickname: faker.name.findName(),
      location: faker.address.city(),
      title: faker.lorem.words(),
      body: faker.lorem.paragraph($nbSentences = 2, $variableNbSentences = true),
      photos: randomImages,
      pros: pros,
      cons: cons,
      recommended: faker.random.boolean(),
      overallrating: Math.floor(Math.random() * 4 + 1),
      qualityrating: Math.floor(Math.random() * 4 + 1),
      valuerating: Math.floor(Math.random() * 4 + 1),
      timecreated: faker.date.past(),
    };

    seedObjects.push(seedObject);
    // numSeeded += 1;

    if (i % 20000 === 0) {
      numSeeded += 20000;
      await Review.bulkCreate(seedObjects)
        .then(() => {
          console.log(`${numSeeded} reviews added to array.`);
          seedObjects = [];
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }

  // await Review.bulkCreate(seedObjects)
  // .then(() => {
  //   console.log(`${numSeeded} reviews added to array.`);
  //   seedObjects = [];
  // })
  // .catch((err) => {
  //   console.error(err);
  // })
};

const runSeed = async () => {
  await seedFunc();
  db.close();
}

runSeed();
