'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        fullname: "Freya Allan",
        email: "freya@freya.com",
        username: "freya",
        password: "freya",
        image: "https://external-preview.redd.it/dWsI-_W4DacNR30L5PAdLrbPUdtCKE7bf0yQzXaJlcs.jpg?auto=webp&s=90eb47263d70f9b87f8347dde111d1d6bb2f749d",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Aimer",
        email: "aimer@aimer.com",
        username: "aimer",
        password: "aimer",
        image: "https://cdnx.natalie.mu/media/pp/static/music/aimer15/photo04.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Lee Ji-eun",
        email: "iu@iu.com",
        username: "iu",
        password: "iu",
        image: "https://asset.kompas.com/crops/bw0QAj68dglRsBgxXbWXflA79TM=/82x0:886x536/750x500/data/photo/2018/05/08/1328492635.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Chelsea Islan",
        email: "chelsea@chelsea.com",
        username: "chelsea",
        password: "chelsea",
        image: "https://cdn-brilio-net.akamaized.net/news/2016/08/26/92772/435915-chelsea-islan.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
