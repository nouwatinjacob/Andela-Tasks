import Shape from "./shape";

export default class Rectangle extends Shape {

  constructor(height, width) {
            super(height, width);
            this.name = "Rectangle";
          }

  get perimeter(){
            return 2*(this.height + this.width) ;
          }

  set perimeter(value){
            this.perimeter = value;
          }

  get area(){
            return this.height * this.width;
          }

  set area(value){
            this.area = value;
          }

}