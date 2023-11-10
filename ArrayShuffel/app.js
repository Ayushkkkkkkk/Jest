let arr = [1, 2, 3, 4, 5, 6, 7];
let temp = [4, 5, 6, 7, 2, 3, 1];
function swap(a, b, arr) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function answer(R) {
  let rand = 3;
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
  return temp;
}
answer(3);
console.log(arr);

module.exports = answer;
