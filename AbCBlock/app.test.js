const answer = require('./app');

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });
});
