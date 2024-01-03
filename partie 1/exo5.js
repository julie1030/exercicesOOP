class Beverage {
  #color;
  #price; // Utilisation de la propriété privée #price
  #temperature;

  constructor(color = "inconnue", price = 0.0) {
    this.#color = color;
    this.#price = price;
    this.#temperature = "froide";
  }

  getInfo() {
    return `Cette boisson est ${this.#temperature} et elle est ${this.#color}.`;
  }

  // Nouvelle méthode pour changer le prix
  changePrice(newPrice) {
    this.#price = newPrice;
  }

  // Nouvelle méthode pour obtenir le prix
  getPrice() {
    return this.#price;
  }
}

// Instantiation de l'objet représentant une boisson
const beverage = new Beverage();

// Affichage des informations en utilisant la méthode getInfo
console.log(beverage.getInfo());

// Changement du prix à 3.5 euros en utilisant la nouvelle méthode
beverage.changePrice(3.5);

// Obtention et affichage du nouveau prix en utilisant la nouvelle méthode
console.log(`Nouveau prix : ${beverage.getPrice()} euro.`);
