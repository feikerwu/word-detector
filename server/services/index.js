const axios = require('axios');

const translate = async text => {
  const { data } = await axios('http://fy.iciba.com/ajax.php', {
    url: 'get',
    params: {
      a: 'fy',
      f: 'auto',
      t: 'auto',
      w: text
    }
  });

  return data.content.word_mean || data.content.out;
};

module.exports = {
  translate
};
