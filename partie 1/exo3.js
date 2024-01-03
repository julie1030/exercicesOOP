

class Boisson {
  // Properties are made private
  #color;
  #price;
  #temperature;

  // Constructor with default value "cold" for temperature
  constructor(color, price) {
    this.#color = color;
    this.#price = price;
    this.#temperature = "cold";
  }

  // getInfo method
  getInfo() {
    return `This beverage is ${this.#temperature} and ${this.#color} and ${this.#price}.`;
  }
}

class Beer extends Beverage {
  #nom;
  #pourcentageOh;

  constructor(
    nom = "inconnu",
    pourcentageOh = 0.0,
    color = "inconnue",
    price = 0.0,
    temperature = "froide"
  ) {
    super(color, price, temperature);
    this.#nom = nom;
    this.#pourcentageOh = pourcentageOh;
  }

  // New private method beerInfo
  #beerInfo() {
    return `Hi, I'm ${this.#nom} and have an alcohol percentage of ${
      this.#pourcentageOh
    } and I have a ${this.#color} color.`;
  }

  // Getter for pourcentageOh
  getPourcentageOh() {
    return this.#pourcentageOh;
  }

  // Overriding getInfo method from Beverage
  getInfo() {
    return this.#beerInfo();
  }
}

// Instantiation of the object representing Duvel
const duvel = new Beer("Duvel", 8.5, "blond", 3.5);

// Printing alcohol percentage using both methods
console.log(`Alcohol Percentage: ${duvel.getPourcentageOh()}`);
console.log(`Alcohol Percentage: ${duvel.#pourcentageOh}`); // Error: private property

// Printing color on the screen
console.log(`Color: ${duvel.#color}`); // Error: private property

// Printing information using the getInfo method of the Beverage class
console.log(duvel.getInfo());

// Changing the color of Duvel to "light"
duvel.#color = "light";

// Printing the new color after the changes
console.log(`New Color: ${duvel.#color}`);
