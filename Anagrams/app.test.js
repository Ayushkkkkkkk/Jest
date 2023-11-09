const answer = require('./app');


const word = "rand";
let fact = 1;
for (let i = word.length ; i >= 1 ; i--){
  fact *= i;
}

describe('answer', () => {
  it('answer should be equal to the factorial of the length of the word', () => {
    expect(answer(word , f = true)).toEqual(fact);
  });
});