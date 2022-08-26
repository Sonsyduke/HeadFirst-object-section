"Use strict";

const car = {
  builtIn: 1954,
  miles: 8000,
};
const car2 = {
  builtIn: 1978,
  miles: 1800,
};

const taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

const cadi = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
};

const fiat = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
};

const chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
};

function checkCar(car) {
  //   return carSpecs.builtIn < 1960 && carSpecs.miles < 10000;
  if (car.year < 1960 && car.mileage < 10000) {
    return true;
  } else {
    return false;
  }
}

function worthAlook(car) {
  if (checkCar(car)) {
    console.log(`You gotta check out this ${car.make}, ${car.model}`);
  } else {
    console.log(`You should really pass on the ${car.make}, ${car.model}`);
  }
}

worthAlook(taxi);
worthAlook(cadi);
worthAlook(fiat);
worthAlook(chevy);
