function answer(sentence) {
  let str = sentence;
  let strArr = [];
  for (let i in str){
    strArr.push(str[i]);
  }
  for (let i in strArr){
    if(strArr[i] === '$'){
        strArr[i] = " ";
    }
  }
  let ans = "";
  for (let i in strArr){
    ans += strArr[i];
  }
  return ans;
}

answer("A$C")
module.exports = answer;
