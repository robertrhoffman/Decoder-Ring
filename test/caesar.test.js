const {caesar} = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should ignore capital letters", () => {
    const actual = caesar("ABCD", 2)
    const expected = "cdef"
    expect(actual).to.eql(expected)
})
  
  it ("should return false if shift is 0, less than -25, greater than 25, or not present", () => {
    const actual = caesar("fail", 0)    
    const expected = false
    expect(actual).to.eql(expected)
})
 
  it("should wrap around the end of the alphabet", () => {
    const actual = caesar ("vwxyz", 4)
    const expected = "zabcd"
    expect(actual).to.eql(expected)
})
  
  it("should wrap around the beginning of the alphabet", () => {
    const actual = caesar("abcde", -4)
    const expected = "wxyza"
    expect(actual).to.eql(expected)
  })
  
 it("should maintain spaces and other symbols in the message", () => {
   const actual = caesar("ab lm xy", 1)
   const expected = "bc mn yz"
   expect(actual).to.equal(expected)
 })
})
     
