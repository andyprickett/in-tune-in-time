'use strict';

let keys = [
  { name: "C", notes: ["C","D","E","F","G","A","B"], createdAt: new Date(), updatedAt: new Date() },
  { name: "Db", notes: ["Db","Eb","F","Gb","Ab","Bb","C"], createdAt: new Date(), updatedAt: new Date() },
  { name: "D", notes: ["D","E","Gb","G","A","B","Db"], createdAt: new Date(), updatedAt: new Date() },
  { name: "Eb", notes: ["Eb","F","G","Ab","Bb","C","D"], createdAt: new Date(), updatedAt: new Date() },
  { name: "E", notes: ["E","Gb","Ab","A","B","Db","Eb"], createdAt: new Date(), updatedAt: new Date() },
  { name: "F", notes: ["F","G","A","Bb","C","D","E"], createdAt: new Date(), updatedAt: new Date() },
  { name: "Gb", notes: ["Gb","Ab","Bb","B","Db","Eb","F"], createdAt: new Date(), updatedAt: new Date() },
  { name: "G", notes: ["G","A","B","C","D","E","Gb"], createdAt: new Date(), updatedAt: new Date() },
  { name: "Ab", notes: ["Ab","Bb","C","Db","Eb","F","G"], createdAt: new Date(), updatedAt: new Date() },
  { name: "A", notes: ["A","B","Db","D","E","Gb","Ab"], createdAt: new Date(), updatedAt: new Date() },
  { name: "Bb", notes: ["Bb","C","D","Eb","F","G","A"], createdAt: new Date(), updatedAt: new Date() },
  { name: "B", notes: ["B","Db","Eb","E","Gb","Ab","Bb"], createdAt: new Date(), updatedAt: new Date() }
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
   return queryInterface.bulkInsert("Keys", keys, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete("Keys", null, {});
  }
};
