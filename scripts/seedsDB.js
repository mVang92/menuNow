const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/menuNow"
);

const menuSeed = [
  {
    name: "Enchiladas",
    ingredients: "Salsa, sour cream, onions, shredded cheese, chicken",
    description: "A delicious popular mexican dish",
    price: 25.00,
    dateCreated: new Date(Date.now()),
    note: "This is good"
  },

  {
    name: "hamburger",
    ingredients: "bread, cheese, hambuger patty, tomatoes, lettuce, ketchup",
    description:" An american classic",
    price: 15.00,
    dateCreated: new Date(Date.now()),
    note: "This is great"
  }

];

// if it doesnt work, use db.Menu
 db.User.collection.insertMany(menuSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });