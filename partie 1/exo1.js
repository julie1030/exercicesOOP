<?php

declare(strict_types=1);

/* EXERCISE 1
TODO: Create a class beverage.
TODO: Create the properties color (string), price (float) and temperature (string) and also foresee a construct.
TODO: Have a default value "cold" in the construct for temperature.

Remember for now we will use properties and methods that can be accessed from everywhere.
TODO: Make a getInfo function which returns "This beverage is <temperature> and <color>."
TODO: Instantiate an object which represents cola. Make sure that the color is set to black, the price equals 2 euro and the temperature to cold automatically
 print the getInfo on the screen.
TODO: Print the temperature on the screen.

USE TYPEHINTING EVERYWHERE!
*/
// je déclare une classe nommée:
class Boisson {
  constructor(couleur="inconnue", prix= 0.0, temperature="froid") {
    this.couleur = couleur;
    this.prix = prix;
    this.temperature = temperature;
  }


getInfo () {
    return `Cette boisson est ${this.temperature} et elle est ${this.couleur}.`;
}
};
/* EXERCISE 2

TODO: Make class beer that extends from Beverage.
TODO: Create the properties name (string) and alcoholPercentage (float).
TODO: Foresee a construct that's allows us to use all the properties from beverage and that sets the values for name and alcoholpercentage.

Remember for now we will use properties and methods that can be accessed from everywhere.
TODO: Make a getAlcoholPercentage function which returns the alocoholPercentage.
TODO: Instantiate an object which represents Duvel. Make sure that the color is set to blond, the price equals 3.5 euro and the temperature to cold automatically.
TODO: Also the name equal to Duvel and the alcohol percentage to 8,5%
TODO: Print the getAlcoholPercentage 2 times on the screen in two different ways, print the color on the screen and the getInfo.

Make sure that each print is on a different line.
Try to get this error on the screen= Fatal error: Uncaught Error: Call to undefined method Beverage::getAlcoholPercentage() in /var/www/becode/workshop/exercise2.php on line 64
*/

class Biere extends Boisson {
constructor(nom="inconnu", pourcentageOh=0.0, couleur="inconnue", prix=0.0, temperature= "froid")
{super(couleur, prix, temperature);
this.nom=nom;
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