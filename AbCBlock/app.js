const blocks = [
  ["B", "O"],
  ["X", "K"],
  ["D", "Q"],
  ["C", "P"],
  ["N", "A"],
  ["G", "T"],
  ["R", "E"],
  ["T", "G"],
  ["Q", "D"],
  ["F", "S"],
  ["J", "W"],
  ["H", "U"],
  ["V", "I"],
  ["A", "N"],
  ["O", "B"],
  ["E", "R"],
  ["F", "S"],
  ["L", "Y"],
  ["P", "C"],
  ["Z", "M"],
];

const BOOOLEAN = [];
// blocks.sort();

for (let i = 0; i < 20; i++) {
  BOOOLEAN.push(false);
  // blocks[i].sort();
}

function checkChar(char) {
  let str = "";
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 2; j++) {
      if (blocks[i][j] === char && !BOOOLEAN[i]) {
        BOOOLEAN[i] = true;
        console.log(blocks[i][j]);
        console.log(i);
        str += blocks[i][j];
        return str;
      }
    }
  }
}



function answer(word) {
  let str = word;
  let len = str.length;
  let strArray = [];
  for (let i = 0; i < len; i++) {
    strArray.push(str[i]);
  }
  let temp = "";
  for (let i = 0; i < len; i++) {
    temp += checkChar(str[i]);
  }
  console.log(temp);

  return temp == word;
}

module.exports = answer;
