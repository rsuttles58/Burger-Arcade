// Import the ORM to create s that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  //Self-identifying s will manipulate the burgers model appropriately.
  //Get all, update one, or select one are options.
  selectAll: cb => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;