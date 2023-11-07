const answer = require('./app');



describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("A")).toEqual(true);
  });
});

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("BARK")).toEqual(true);
  });
});

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("BOOK")).toEqual(false);
  });
});

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("TREAT")).toEqual(false);
  });
});

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("COMMON")).toEqual(false);
  });
});

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("SQUAD")).toEqual(false);
  });
});

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer("CONFUSE")).toEqual(false);
  });
});


