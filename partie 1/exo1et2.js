
// je déclare une classe nommée:
class Boisson {
  constructor(color = "inconnue", price = 0.0) {
    this.color = color;
    this.price = price;
    this.temperature = "froide";
  }

  getInfo() {
    return `Cette boisson est ${this.temperature} et elle est ${this.color}.`;
  }
};

// TODO: Instantiate an object representing cola with specific properties
const cola = new Beverage("black", 2);

// TODO: Print the result of getInfo on the screen
console.log(cola.getInfo());

// TODO: Print the temperature on the screen
console.log(`Temperature: ${cola.temperature}`);

/* EXERCISE 2 */

class Biere extends Boisson {
constructor(name="inconnu", pourcentageOh=0.0, color="inconnue", price=0.0, temperature= "cold")
{super(color, price, temperature);
this.name=name;
this.pourcentageOh=pourcentageOh;
}
getPourcentageOh() {
    return this.pourcentageOh;
}
}

// Instanciation de l'objet représentant Duvel
const duvel = new Biere("Duvel", 8.5, "blond", 3.5);

// Affichage du taux d'alcool de deux manières différentes
console.log(`Pourcentage d'alcool: ${duvel.getPourcentageOh()}`);
console.log(`Pourcentage d'alcool: ${duvel.PourcentageOh}`);

// Affichage de la couleur sur l'écran
console.log(`Color: ${duvel.color}`);

// Affichage des informations sur l'écran en utilisant la méthode getInfo de la classe Beverage
console.log(duvel.getInfo());