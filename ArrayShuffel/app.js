function swap(a, b, arr) {
  let temp;
  temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function answer(lower_bound, upper_bound) {
  let arr = [];
  for (let i = lower_bound; i < upper_bound; i++) {
    arr.push(i);
  }

  let rand = Math.floor(Math.random() * upper_bound - 1 + lower_bound);
  let firstPtr = 0;
  let secondPtr = rand;
  while (firstPtr < arr.length && secondPtr < arr.length) {
    if(secondPtr >= arr.length){
        break;
    }
    swap(firstPtr , secondPtr , arr);
    firstPtr++;
    secondPtr++;
  }
  console.log(rand);
  console.log(arr);
}
answer(1, 10);

module.exports = answer;
