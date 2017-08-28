const {assert} = require("chai");
const arithGeotest = require("./arit.js");


describe("Arithmetic progression:", () => {

  it("should return 0 if array is emtpy", () => {
      let res = arithGeotest([]);
      assert.equal(res, 0, `Not Empty Array`);
  });

  it("should return: Enter atleast 3 array index values, if array.length < 2", () => {
      let res = arithGeotest([2,3]);
      assert.equal(res, "Enter atleast 3 array index values", `Array length > 2`);
  });

  it("should return -1 if not Arithmetic/Geometric", () => {
      let res = arithGeotest([2,4,16]);
      assert.equal(res, -1);
  });

  it("should return 'Not an array'", () => {
      let res = arithGeotest("aaa");
      assert.equal(res, "Not an array");
  });

  it("should return `Arithmetic` if the array is Arithmetic", () => {
      let res = arithGeotest([2,4,6]);
      assert.equal(res, "Arithmetic", `Not Arithmetic`);
  });

});

describe("Geometric progression:", () => {

  it("should return 0 if array is emtpy", () =>{
      let res = arithGeotest([]);
      assert.equal(res, 0, `Not Empty Array`);
  });

  it("should return: Enter atleast 3 array index values, if array.length < 2", () =>{
      let res = arithGeotest([2,3]);
      assert.equal(res, "Enter atleast 3 array index values", `Array length > 2`);
  });

  it("should return -1 if not Geometric/Arithmetic", () =>{
      let res = arithGeotest([3,6,11]);
      assert.equal(res, -1, `Geometric`);
  });

  it("should return 'Not an array'", () =>{
      let res = arithGeotest(1,1);
      assert.equal(res, "Not an array");
  });

  it("should return 'Not an array'", () => {
      let res = arithGeotest("aaa");
      assert.equal(res, "Not an array");
  });

});
