// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it ("returns false if alphabet isn't 26 characters", () => { 
     const actual = substitution("input", "abcegjy");    
expect(actual).to.be.false;
});
it ("correctly translates the given characters", () => {
    const actual = substitution("abc", "zaqwsxcderfvbgtyhnmjuiklop")
    const expected = "zaq"
    expect(actual).to.eql(expected);
    });
  it ("returns false if there are duplicate characters in the given alphabet", () => {
    const actual = substitution("testing", "zzqqwsxcderfvbgtyhnmjuiklop"); 
    expect(actual).to.be.false;
  });
   it("should maintain spaces & other symbols in the message", () => {
   const actual = substitution("ab cd ef", "zaqwsxcderfvbgtyhnmjuiklop" )
   const expected = "za qw sx";
   expect(actual).to.equal(expected);
 });
    it("ignores capital letters", () => {
       const actual = substitution("AbCD", "zaqwsxcderfvbgtyhnmjuiklop");
    const expected = "zaqw";
    expect(actual).to.eql(expected);
});
  
});