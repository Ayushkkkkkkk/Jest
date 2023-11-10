const answer = require("./app");
let arr = [1, 2, 3, 4, 5, 6, 7];
let temp = [1, 2, 3, 4, 5, 6, 7];

function swap(a, b, arr) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let rand = 3;

function shuffler() {
  console.log(rand);
  let firstPtr = 0;
  let secondPtr = rand;
  while (firstPtr < arr.length && secondPtr < arr.length) {
    if (secondPtr >= arr.length) {
      break;
    }
    swap(firstPtr, secondPtr, arr);
    firstPtr++;
    secondPtr++;
  }
}

shuffler(1, 7);

describe("answer", () => {
  it("to life the universe and everything", () => {
    expect(answer(3)).toEqual([4, 5, 6, 7, 2, 3, 1]);
  });
});
