class Beverage {
  static #address = "Melkmarkt 9, 2000 Antwerpen";
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
    return `This beverage is served at ${Beverage.#address} and costs ${
      this.#price
    } euros.`;
  }

  // Static function to print the address without creating a new instance
  static printAddress() {
    console.log(`Address: ${Beverage.#address}`);
  }

  // Static function to get the address without creating a new instance
  static getAddress() {
    return `Address: ${Beverage.#address}`;
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
    return `This beer, ${this.#name}, is served at ${Beverage.#address} with ${
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
console.log(duvel.getBarInfo());

// Creating a function to use the constant barname and display the alcohol percentage in beer
console.log(duvel.getBarInfo());

// Printing the address without creating a new instance in two different ways
Beverage.printAddress();
console.log(Beverage.getAddress());
