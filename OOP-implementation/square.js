import Shape from "./shape";

export default class Square extends Shape {

  constructor(length) {
      super(length, length);
            this.name = "Square";
          }

  get perimeter(){
            return 4*(this.height) ;
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