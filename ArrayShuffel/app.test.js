const answer = require("./app");
let arr = [1, 2, 3, 4, 5, 6, 7];

function swap(a, b, arr) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let rand;

function shuffler(lower_bound , upper_bound) {
  for (let i = lower_bound; i <= upper_bound; i++) {
    arr.push(i);
  }

  rand = 4;;
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

shuffler(1 , 7);
console.log(rand);
// console.log('working');

console.log(answer(1 , 7 , rand));
describe("answer", () => {
  it("to life the universe and everything", () => {
    expect(answer(1, 7)).toEqual(arr);
  });
});
