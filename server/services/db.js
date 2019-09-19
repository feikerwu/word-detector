const mongoose = require('mongoose');
const dbUrl = 'mongodb://127.0.0.1:27017/feiker';

const { info, error } = require('../utils');

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    info('connected successfully');
  })
  .catch(err => error(err));

const { Schema } = mongoose;

const WordSchema = new Schema({
  date: { type: Date, default: Date.now },
  word: String,
  translatedValue: Array
});

const Word = mongoose.model('Word', WordSchema);

module.exports = {
  Word
};
