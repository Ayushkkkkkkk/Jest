function swap(a, b, arr) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
let temp = [1, 2, 3, 4, 5, 6, 7 ];

function helper(rand) {
  return rand;
}

let randTemp;

function answer(lower_bound, upper_bound) {
  let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7];

  let rand = 4;
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
  console.log(arr);
  console.log(upper_bound);
  return arr;
}


module.exports = answer;
