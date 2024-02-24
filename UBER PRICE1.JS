class UberCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distance, time) {
    // Calculate total price based on distance and time
    const distanceCost = distance * this.costPerKilometer;
    const timeCost = time * this.costPerMinute;
    const totalPrice = this.baseFare + distanceCost + timeCost;

    return totalPrice;
  }
}

// Example usage:
const uberCalculator = new UberCalculator(5, 1.5, 0.2); // Example rates

// Calculate price for a 10 km ride taking 15 minutes
const totalPrice = uberCalculator.calculatePrice(10, 15);
console.log("Uber Price:", totalPrice);
