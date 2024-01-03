class Beverage {
  // Properties are made protected
  _color;
  _price;
  _temperature;

  // Constructor with default value "cold" for temperature
  constructor(color, price) {
    this._color = color;
    this._price = price;
    this._temperature = "cold";
  }

  // getInfo method
  getInfo() {
    return `This beverage is ${this._temperature} and ${this._color} and ${this._price}.`;
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

  // New private method beerInfo
  #beerInfo() {
    return `Hi, I'm ${this.#name} and have an alcohol percentage of ${
      this.#pourcentageOh
    } and I have a ${this._color} color.`; // Use protected property
  }

  // Overriding getInfo method from Beverage
  getInfo() {
    return this.#beerInfo();
  }
}

// Instantiation of the object representing Duvel
const duvel = new Beer("Duvel", 8.5, "light", 3.5);

// Printing alcohol percentage without calling getters in the child class
console.log(`Alcohol Percentage: ${duvel.#pourcentageOh}`); // Error: private property

// Printing color on the screen without calling getters in the child class
console.log(`Color: ${duvel._color}`); // Use protected property

// Printing information using the getInfo method of the Beverage class
console.log(duvel.getInfo());

// Changing the color of Duvel to "light"
duvel._color = "light"; // Use protected property

// Printing the new color after the changes
console.log(`New Color: ${duvel._color}`);
