import {expect} from "chai";
import Shape from "./shape";
import Rectangle from "./rectangle";
import Square from "./square";

describe("Rectangle:", () => {
  const rectangle = new Rectangle(6,5);
  it("Should instantiate Rectangle class ", () =>{
    expect(rectangle).to.be.an.instanceof(Rectangle);
  });

  it("Should return name of rectangle", () =>{
    expect(rectangle.name).to.equal("Rectangle");
  });

  it("Should return the area of rectangle", () =>{
    const area = rectangle.area;
    expect(area).to.equal(30);
  });

  it("Should return the perimeter of rectangle", () =>{
    const perimeter = rectangle.perimeter;
    expect(perimeter).to.equal(22);
  });

});

describe("Square:", () => {
  const square = new Square(6);
  it("Should instantiate Square class ", () =>{
    expect(square).to.be.an.instanceof(Square);
  });

  it("Should return name of square", () =>{
    expect(square.name).to.equal("Square");
  });

  it("Should return the area of square", () =>{
    const area = square.area;
    expect(area).to.equal(36);
  });

  it("Should return the perimeter of square", () =>{
    const perimeter = square.perimeter;
    expect(perimeter).to.equal(24);
  });

});
