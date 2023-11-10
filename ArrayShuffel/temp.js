let arr = [1, 2, 3, 4, 5, 6, 7];
let temp = [1, 2, 3, 4, 5, 6, 7];

function swap(a, b, arr) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

let rand;

function shuffler(lower_bound, upper_bound) {
//   rand = Math.floor(Math.random() * upper_bound + lower_bound);
    rand = 3;
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
console.log(arr);
