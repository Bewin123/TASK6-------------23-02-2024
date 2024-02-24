class Circle {
    // Attributes
    private radius: number;

    // Constructor
    constructor(radius: number) {
        this.radius = radius;
    }

    // Methods
    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Example usage:
const myCircle = new Circle(5);
console.log("Radius:", myCircle.getRadius());
console.log("Area:", myCircle.getArea());
