interface Shape {
    calculateArea(): number;
}

class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
    }
    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number): void {
        this.radius = radius;
    }
}

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    getWidth(): number {
        return this.width;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number): void {
        this.height = height;
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());

const rectangle = new Rectangle(3, 4);
console.log("Rectangle Area:", rectangle.calculateArea());