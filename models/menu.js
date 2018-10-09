const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  key: String,
  name: { type: String,
     required: true, 
     unique: true },
  ingredients: { type: String },
  description: { type: String },
  price: { type: Number },
  
  // similar to the foreign key in sql,
  // 'users' an array to store ObjectIds, ref prop is a reference to the user model; this will allow
  // the user to modify the Menu using the ID.
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ],

  dateCreated: { type: Date, default: Date.now },
  note: String,
  calories: { type: Number }
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;