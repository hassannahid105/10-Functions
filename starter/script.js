'use strict';

const booking = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //  ES5
  numPassengers = numPassengers || 1;
  price = price || 199;
  const bookings = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(bookings);
  booking.push(bookings);
};

createBooking('LH123');
createBooking('LH123', undefined, 400);
createBooking('LH123', 12);

const flight = 'LH234';
const passenger = {
  name: 'Jonas Schmedtman',
  passport: 234567890,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH566';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 234567890) {
    // alert('Check In');
  } else {
    // alert('Wrong Passport');
  }
};
checkIn(flight, passenger);
console.log(passenger);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};
newPassport(passenger);

checkIn(flight, passenger);

add();
const multiply = function (a, b = add()) {
  // b = typeof b !== 'undefined' ? b : 1;
  return a * b;
};
const x = multiply(8);

console.log(x);
function add() {
  return 2;
}

function add(a, b = () => console.log(a)) {
  b();
  console.log(a);
}

add('Hello');
function append(value, arr = []) {
  console.log(arr);
  return arr.push(value);
}
// const x = append(8);
// console.log(x);

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};

const upperCase = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

const transform = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transform(`JavaScript is the best!`, upperCase);
transform(`JavaScript is the best!`, oneWord);

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `flight ${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Nahid');
lufthansa.book(444, 'Arif');

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// console.log(book);
// eurowings.book(666, 'Mahim');

book.call(eurowings, 455, 'Ashik');

const swiss = {
  airline: 'swiss Airline',
  iataCode: 'Lx',
  booking: [],
};

book.call(swiss, 999, 'Nava');
// apply method
const flightData = [877, 'Monoara'];
const flightData2 = [999, 'Mohin'];
book.apply(eurowings, flightData);
book.call(swiss, ...flightData2);
// bind method

const bookEw = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLx = book.bind(swiss);

const bookEw23 = book.bind(eurowings, 1233);

bookEw23('Mohona');
bookEw23('Shamim');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  // console.log(this.plane);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(3445));
console.log(addVat(9000));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

console.log(typeof bookEw);

function vat() {
  return function (rate, value) {
    return value + value * rate;
  };
}
const now = vat();
console.log(now(0.34, 345));
console.log(now(0.12, 3456));
