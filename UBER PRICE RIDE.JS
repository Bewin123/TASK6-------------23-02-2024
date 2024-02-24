class UberPriceCalculator {
  constructor(baseFare, costPerMinute, costPerMile) {
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerMile = costPerMile;
  }

  calculatePrice(distance, time) {
    const fare =
      this.baseFare + this.costPerMinute * time + this.costPerMile * distance;
    return fare;
  }
}

// Example usage:
const calculator = new UberPriceCalculator(2.5, 0.3, 1.5); // Example rates
const distance = 10; // in miles
const time = 20; // in minutes
const price = calculator.calculatePrice(distance, time);
console.log("Uber Price:", price.toFixed(2)); // Output: Uber Price: 33.50
