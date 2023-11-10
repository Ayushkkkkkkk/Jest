const answer = require('./app');

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });
});


describe('answer', () => {
    it('to life the universe and everything', () => {
      expect(answer(1 , 7)).toEqual(42);
    });
  });
  