const {polybius} = require("../src/polybius");
const expect = require("chai").expect;


describe("polybius", () => {
    it ("translates 42 to i & j", () => {
     const actual = polybius("42", false)    
    const expected = "(i/j)";
expect(actual).to.eql(expected);
});
  it("translates i & j to 42", () => {
    const actual = polybius("jif");
    const expected = "424212";
    expect(actual).to.eql(expected);
  });
    it("ignores capital letters", () => {
       const actual = polybius("aBC");
    const expected = polybius ("abc");
    expect(actual).to.eql(expected);
});
   it("should maintain spaces & other symbols in the message", () => {
   const actual = polybius("11 21 31", false);
   const expected = "a b c";
   expect(actual).to.eql(expected);
 });
});


