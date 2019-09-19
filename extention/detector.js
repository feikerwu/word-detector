const normalizeWord = word => word.trim().toLowerCase();

const isValidWord = word => {
  const reg = /[a-zA-Z]*/;
  return reg.test(word);
};

function detector(info = {}) {
  let { selectionText: word } = info;
  word = normalizeWord(word);
  if (isValidWord(word)) {
    translate(word);
  }
}

function translate(text) {
  fetch(`http://localhost:3000?text=${text}`).then(res => {
    console.log(res.json());
  });
}

chrome.contextMenus.create({
  type: 'normal',
  title: 'save',
  contexts: ['all'],
  onclick: detector
});
