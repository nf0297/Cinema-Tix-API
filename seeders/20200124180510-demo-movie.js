'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('movies', [
      {
        title: "Finding Nemo",
        image: "https://images-na.ssl-images-amazon.com/images/I/51Dk%2BVlE%2B2L.jpg",
        id_genre: 6,
        id_rating: 1,
        startdate: "2003-03-30",
        enddate: "2003-04-30",
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Finding Dory",
        image: "https://images-na.ssl-images-amazon.com/images/I/5160uVVW3JL.jpg",
        id_genre: 6,
        id_rating: 1,
        startdate: "2016-06-16",
        enddate: "2006-07-16",
        duration: 105,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Wall-E",
        image: "https://images-na.ssl-images-amazon.com/images/I/511hxYSktAL.jpg",
        id_genre: 6,
        id_rating: 1,
        startdate: "2008-08-13",
        enddate: "2008-09-30",
        duration: 103,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Avengers: Endgame",
        image: "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY606_.jpg",
        id_genre: 1,
        id_rating: 3,
        startdate: "2019-04-24",
        enddate: "2019-06-24",
        duration: 182,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cats",
        image: "https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
        id_genre: 5,
        id_rating: 2,
        startdate: "2019-12-27",
        enddate: "2020-01-27",
        duration: 103,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Maleficent: Mistress of Evil",
        image: "https://images-na.ssl-images-amazon.com/images/I/91McXc5Cb4L._SY679_.jpg",
        id_genre: 1,
        id_rating: 2,
        startdate: "2019-10-16",
        enddate: "2019-11-16",
        duration: 118,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Joker",
        image: "https://images-na.ssl-images-amazon.com/images/I/91McXc5Cb4L._SY679_.jpg",
        id_genre: 4,
        id_rating: 4,
        startdate: "2019-10-04",
        enddate: "2019-11-27",
        duration: 122,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bad Boys for Life",
        image: "https://www.layar.id/wp-content/uploads/2020/01/0-poster-5.jpg",
        id_genre: 1,
        id_rating: 4,
        startdate: "2020-01-17",
        enddate: "2020-02-20",
        duration: 124,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "La La Land",
        image: "https://images-na.ssl-images-amazon.com/images/I/91lKGPwlu2L._SY606_.jpg",
        id_genre: 3,
        id_rating: 3,
        startdate: "2016-08-16",
        enddate: "2016-09-20",
        duration: 128,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Black Widow",
        image: "https://i.pinimg.com/474x/aa/ce/2a/aace2a497b277e6264c707c35e462130.jpg",
        id_genre: 7,
        id_rating: 3,
        startdate: "2020-04-29",
        enddate: "2020-05-30",
        duration: 128,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Birds of Prey",
        image: "https://www.layar.id/wp-content/uploads/2019/12/1-poster-1.png",
        id_genre: 7,
        id_rating: 3,
        startdate: "2020-02-05",
        enddate: "2020-03-16",
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sonic the Hedgehog",
        image: "https://images-na.ssl-images-amazon.com/images/I/81cw8XZx5pL._AC_SY679_.jpg",
        id_genre: 5,
        id_rating: 2,
        startdate: "2020-02-09",
        enddate: "2020-03-018",
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dolittle",
        image: "https://images-na.ssl-images-amazon.com/images/I/71fjduo0OEL._AC_SY879_.jpg",
        id_genre: 1,
        id_rating: 3,
        startdate: "2020-01-17",
        enddate: "2020-02-20",
        duration: 101,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
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
