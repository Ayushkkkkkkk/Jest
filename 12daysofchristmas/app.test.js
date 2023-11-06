
const answer = require('./app');
const verces = [
    "On the first day of Christmas My true love gave to me: A partridge in a pear tree.",
    "On the second day of Christmas My true love gave to me: Two turtle doves and A partridge in a pear tree.",
    "On the third day of Christmas My true love gave to me: Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the fourth day of Christmas My true love gave to me: Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the fifth day of Christmas My true love gave to me: Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the sixth day of Christmas, My true love gave to me: Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the seventh day of Christmas, My true love gave to me: Seven swans a-swimming Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the eight day of Christmas, My true love gave to me: Eight maids a-milking Seven swans a-swimming Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the ninth day of Christmas, My true love gave to me: Nine ladies dancing Eight maids a-milking Seven swans a-swimming Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the tenth day of Christmas, My true love gave to me: Ten lords a-leaping Nine ladies dancing Eight maids a-milking Seven swans a-swimming Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the eleventh day of Christmas, My true love gave to me: Eleven pipers piping Ten lords a-leaping Nine ladies dancing Eight maids a-milking Seven swans a-swimming Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree.",
    "On the twelfth day of Christmas, My true love gave to me: Twelve drummers drumming Eleven pipers piping Ten lords a-leaping Nine ladies dancing Eight maids a-milking Seven swans a-swimming Six geese a-laying Five golden rings Four calling birds Three french hens Two turtle doves and A partridge in a pear tree",
  ];

let str = "";
 verces.map((elem)=>{
    str += elem;
 })

// describe('answer', () => {
//   it('to life the universe and everything', () => {
//     expect(answer(1)).toEqual(42);
//   });
// });

describe('answer' , ()=>{
    it('verse 1' , ()=> {
        expect(answer(1)).toEqual(verces[0]);
    })
})


describe('answer' , ()=>{
    it('verse 2' , ()=> {
        expect(answer(2)).toEqual(verces[1]);
    })
})

describe('answer' , ()=>{
    it('verse 3' , ()=> {
        expect(answer(3)).toEqual(verces[2]);
    })
})


describe('answer' , ()=>{
    it('verse 4' , ()=> {
        expect(answer(4)).toEqual(verces[3]);
    })
})

describe('answer' , ()=>{
    it('verse 5' , ()=> {
        expect(answer(5)).toEqual(verces[4]);
    })
})

describe('answer' , ()=>{
    it('verse 6' , ()=> {
        expect(answer(6)).toEqual(verces[5]);
    })
})

describe('answer' , ()=>{
    it('verse 7' , ()=> {
        expect(answer(7)).toEqual(verces[6]);
    })
})

describe('answer' , ()=>{
    it('verse 8' , ()=> {
        expect(answer(8)).toEqual(verces[7]);
    })
})

describe('answer' , ()=>{
    it('verse 9' , ()=> {
        expect(answer(9)).toEqual(verces[8]);
    })
})

describe('answer' , ()=>{
    it('verse 10' , ()=> {
        expect(answer(10)).toEqual(verces[9]);
    })
})

describe('answer' , ()=>{
    it('verse 11' , ()=> {
        expect(answer(11)).toEqual(verces[10]);
    })
})

describe('answer' , ()=>{
    it('verse 12' , ()=> {
        expect(answer(12)).toEqual(verces[11]);
    })
})

describe('answer' , ()=>{
    it('print all the verses' , ()=>{
        expect(answer(12 , true)).toEqual(str);
    })
})