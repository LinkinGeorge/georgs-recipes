const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose;
const schema = new Schema({
  _id: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  order: Number,
});

const LookupCategory = mongoose.model('LookupCategory', schema);
module.exports = LookupCategory;
