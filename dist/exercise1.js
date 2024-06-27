"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
}
const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea());
const rectangle = new Rectangle(3, 4);
console.log("Rectangle Area:", rectangle.calculateArea());
