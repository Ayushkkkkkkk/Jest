const answer = require("./app");

const sentence = "Given$a$text$file$of$many$lines,$where$fields$within$a$line$are$delineated$by$a$single$'dollar'$character,$write$a$programthat$aligns$each$column$of$fields$by$ensuring$that$words$in$each$column$are$separated$by$at$least$one$space"
const withSpace = "Given a text file of many lines, where fields within a line are delineated by a single 'dollar' character, write a programthat aligns each column of fields by ensuring that words in each column are separated by at least one space"

describe("answer", () => {
  it("to life the universe and everything", () => {
    expect(answer(sentence)).toEqual(withSpace);
  });
});
