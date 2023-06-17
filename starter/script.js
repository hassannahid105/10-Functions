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

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

 */

const poll = {
  question: 'What is your favourite programming language!',
  option: [`0: JavaScript`, '1: Python', '2: Rust', '3: C++'],
  answer: new Array(4).fill(0),
  registerNewAnswer: function () {
    const x = Number(
      prompt(` What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)
    );
    return x;
  },
};

const input = poll.registerNewAnswer();

const inputUser = input + 1;
console.log(inputUser);
const answerOk = poll.answer;
for (const [element, num] of answerOk.entries()) {
}
//

// 2. Call this method whenever the user clicks the "Answer poll" button.
//
const runOnce = function () {
  console.log('this will never run again');
};

runOnce();

(function () {
  console.log('this will never run again 2');
})();

(() => console.log('this will never run again 3'))();

const myFunction = function () {
  let i = 0;
  return function () {
    i++;
    console.log(i);
  };
};

const add1 = myFunction();
add1();
add1();
add1();

function outer() {
  var outerVariable = 'I am from outer';

  function inner() {
    console.log(outerVariable);
  }

  return inner;
}

var closureFunction = outer();
closureFunction(); // Output: "I am from outer"

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
booker();
