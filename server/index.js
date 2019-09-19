const express = require('express');
const { translate } = require('./services');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const { text } = req.query;
  console.log(text);
  try {
    const translatedValue = await translate(text, { to: 'en' });
    console.log(translatedValue);
    res.json({
      code: 0,
      msg: 'translated successfully',
      data: {
        translatedValue
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`server listening on port ${port}`));
