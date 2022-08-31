"Use strict";

// const car = {
//   builtIn: 1954,
//   miles: 8000,
// };
// const car2 = {
//   builtIn: 1978,
//   miles: 1800,
// };

// const taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
// };

// const cadi = {
//   make: "GM",
//   model: "Cadillac",
//   year: 1955,
//   color: "tan",
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
// };

// const fiat = {
//   make: "Fiat",
//   model: "500",
//   year: 1957,
//   color: "Medium Blue",
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
// };

// const chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
// };

// function checkCar(car) {
//   //   return carSpecs.builtIn < 1960 && carSpecs.miles < 10000;
//   if (car.year < 1960 && car.mileage < 10000) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function worthAlook(car) {
//   if (checkCar(car)) {
//     console.log(`You gotta check out this ${car.make}, ${car.model}`);
//   } else {
//     console.log(`You should really pass on the ${car.make}, ${car.model}`);
//   }
// }

// worthAlook(taxi);
// worthAlook(cadi);
// worthAlook(fiat);
// worthAlook(chevy);

// =======================
// AUTO-O-MATIC
// PAGE 195

// function makeCar() {
//   const makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//   const models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//   const years = [1955, 1957, 1948, 1954, 1961];
//   const colors = ["red", "blue", "tan", "yellow", "white"];
//   const convertible = [true, false];
//   const rand1 = Math.floor(Math.random() * makes.length);
//   const rand2 = Math.floor(Math.random() * models.length);
//   const rand3 = Math.floor(Math.random() * years.length);
//   const rand4 = Math.floor(Math.random() * colors.length);
//   const rand5 = Math.floor(Math.random() * 5) + 1;
//   const rand6 = Math.floor(Math.random() * 2);
//   const car = {
//     make: makes[rand1],
//     model: models[rand2],
//     year: years[rand3],
//     color: colors[rand4],
//     passengers: rand5,
//     convertible: convertible[rand6],
//     mileage: 0,
//   };
//   return car;
// }
// function displayCar(car) {
//   console.log(
//     "Your new car is a " + car.year + " " + car.make + " " + car.model
//   );
// }
// const carToSell = makeCar();
// displayCar(carToSell);

// =======================
// METHODS
// PAGE 198

// const fiat = {
//   make: "Fiat",
//   model: "500",
//   year: 1957,
//   color: "Medium Blue",
//   passengers: 2,
//   convertible: false,
//   mileage: 88000,
//   started: false,
//   start() {
//     this.started = true;
//   },
//   stop() {
//     this.started = false;
//   },
//   drive() {
//     if (this.started) {
//       alert("Zoom, Zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();

// =======================
// EXERCISE
// PAGE 207

// const cadi = {
//   make: "GM",
//   model: "Cadillac",
//   year: 1955,
//   color: "tan",
//   passengers: 5,
//   convertible: false,
//   mileage: 12892,
//   started: false,
//   start() {
//     this.started = true;
//   },
//   stop() {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// const chevy = {
//   make: "Chevy",
//   model: "Bel Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   mileage: 1021,
//   started: false,
//   start() {
//     this.started = true;
//   },
//   stop() {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// const taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1955,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 281341,
//   started: false,
//   start() {
//     this.started = true;
//   },
//   stop() {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert(this.make + " " + this.model + " goes zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

// cadi.start();
// cadi.drive();
// cadi.stop();
// chevy.start();
// chevy.drive();
// chevy.stop();
// taxi.start();
// taxi.drive();
// taxi.stop();

// =======================
// For in
// PAGE 209

const chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
  started: false,
  fuel: 0,
  start() {
    this.started = true;
  },
  stop() {
    this.started = false;
  },
  drive() {
    if (this.started) {
      if (this.fuel > 0) {
        alert(`${this.make} ${this.model} goes zoom zoom!`);
        this.fuel = this.fuel - 1;
      } else {
        alert(`Uh oh, out of fuel`);
        this.stop();
      }
    }
  },
  addFuel(amount) {
    this.fuel = this.fuel + amount;
  },
};

for (const prop in chevy) {
  console.log(`${prop} : ${chevy[prop]}`);
}

chevy.start();
chevy.drive();
chevy.addFuel(2);
chevy.start();
chevy.drive();
chevy.drive();
chevy.drive();
chevy.stop();
