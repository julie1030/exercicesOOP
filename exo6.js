class Beverage {
  #color;
  #price;
  #temperature;

  constructor(color = "inconnue", price = 0.0, temperature = "froide") {
    this.#color = color;
    this.#price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Cette boisson est ${this.#temperature} et elle est ${this.#color}.`;
  }

  // New function to use the constant barname and display the price
  getBarInfo() {
    const barname = "Het Vervolg";
    return `This beverage is served at ${barname} and costs ${
      this.#price
    } euros.`;
  }
}

class Beer extends Beverage {
  #name;
  #pourcentageOh;

  constructor(
    name = "inconnu",
    pourcentageOh = 0.0,
    color = "inconnue",
    price = 0.0,
    temperature = "cold"
  ) {
    super(color, price, temperature);
    this.#name = name;
    this.#pourcentageOh = pourcentageOh;
  }

  // New function to use the constant barname and display the alcohol percentage
  getBarInfo() {
    const barname = "Het Vervolg";
    return `This beer, ${this.#name}, is served at ${barname} with ${
      this.#pourcentageOh
    }% alcohol.`;
  }
}

// Instantiation of the object representing Duvel
const duvel = new Beer("Duvel", 8.5, "blond", 3.5);

// Printing alcohol percentage using both methods
console.log(`Pourcentage d'alcool: ${duvel.getPourcentageOh()}`);
console.log(`Pourcentage d'alcool: ${duvel.#pourcentageOh}`); // Error: private property

// Printing color on the screen
console.log(`Color: ${duvel.#color}`); // Error: private property

// Printing information using the getInfo method of the Beverage class
console.log(duvel.getInfo());

// Creating a function to use the constant barname and display the price in beverage
console.log(beverage.getBarInfo());

// Creating a function to use the constant barname and display the alcohol percentage in beer
console.log(duvel.getBarInfo());
