"Use strict";

const car = {
  builtIn: 1954,
  miles: 8000,
};
const car2 = {
  builtIn: 1978,
  miles: 1800,
};

var taxi = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

function checkCar(carSpecs) {
  return carSpecs.builtIn < 1960 && carSpecs.miles < 10000;
}

let worthAlook = checkCar(taxi);

if (worthAlook) {
  console.log(`You gotta check out this ${taxi.make}, ${taxi.model}`);
} else {
  console.log(`You should really pass on the ${taxi.make}, ${taxi.model}`);
}
