abstract class Shape {
  /* ??? */ 
    abstract getArea(): number;

}

class Circle extends Shape {
  /* ??? */
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {		//bu kısmı yaparken biraz yardım aldım tam anlayamadım
        return Math.PI * this.radius * this.radius;
}
}
const circle = new Circle(10); // 10 yarıçaplı
console.log(circle.getArea());