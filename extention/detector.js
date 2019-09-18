const normalizeWord = word => word.trim().toLowerCase();

const isValidWord = word => {
  const reg = /[a-zA-Z]*/;
  return reg.test(word);
};

function detector(info = {}) {
  let { selectionText: word } = info;
  word = normalizeWord(word);
  if (isValidWord(word)) {
    console.log(word);
  }
}

chrome.contextMenus.create({
  type: 'normal',
  title: 'save',
  contexts: ['all'],
  onclick: detector
});
