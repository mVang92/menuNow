
var mongoose = require("mongoose");
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
var userSchema = new Schema({
  _id: { type: Number },
  name: { type: String, unique: true},
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", userSchema);

// Export the Book model
module.exports = User;
