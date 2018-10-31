'use strict';

let notes = [
  { name: "C", frequency: 32.703, createdAt: new Date(), updatedAt: new Date() },
  { name: "Db", frequency: 34.648, createdAt: new Date(), updatedAt: new Date() },
  { name: "D", frequency: 36.708, createdAt: new Date(), updatedAt: new Date() },
  { name: "Eb", frequency: 38.891, createdAt: new Date(), updatedAt: new Date() },
  { name: "E", frequency: 41.203, createdAt: new Date(), updatedAt: new Date() },
  { name: "F", frequency: 43.654, createdAt: new Date(), updatedAt: new Date() },
  { name: "Gb", frequency: 46.249, createdAt: new Date(), updatedAt: new Date() },
  { name: "G", frequency: 48.999, createdAt: new Date(), updatedAt: new Date() },
  { name: "Ab", frequency: 51.913, createdAt: new Date(), updatedAt: new Date() },
  { name: "A", frequency: 55.000, createdAt: new Date(), updatedAt: new Date() },
  { name: "Bb", frequency: 58.270, createdAt: new Date(), updatedAt: new Date() },
  { name: "B", frequency: 61.735, createdAt: new Date(), updatedAt: new Date() }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Notes", notes, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete("Notes", null, {});
  }
};
