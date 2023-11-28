// // Kintamojo deklaravimas su let
// let x = 10;
// console.log(x);

// // aritmetiniai opretoriai + - * / %(liekana)
// x = x + 5;
// console.log(x);

// // liekana
// x = x % 4;
// console.log(x);

// x += 5;
// console.log(x);

// console.log(typeof x);

// x += "Lorem";
// console.log(x);
// console.log(typeof x);

// // kondicine logika
// x = 6;

// if (x < 5) {
//   console.log("x mazesnis uz 5");
// } else {
//   console.log("x didesnis uz 5");
// }

// // teksto lyginimas = '===' sulyginmo operatorius. TIkrina reiksme ir tipa
// // teksto lyginimas = '==' sulyginmo operatorius. TIkrina tik reiksme
// let tekstas = "labas";
// if (tekstas === "labas") {
//   console.log("true");
// } else {
//   console.log("false");
// }
// // teksto lyginimas = '!==' operatorius melygu

// if (tekstas !== "laba diena") {
//   console.log("nelygus");
// } else {
//   console.log("lygus");
// }

// // operacjos su string
// let eilerastis = "lorem ipsum";

// console.log(eilerastis);

// eilerastis += " dolor sit amet";
// console.log(eilerastis);

// //
// let kintamasis = 'CHICKEN';

// console.log(kintamasis[0]);

//      1.

let firstName = "Jonas";
let lastName = "Jonaitis";
if (firstName.length < lastName.length) {
  console.log(firstName);
} else {
  console.log(lastName);
}

//      2.

// let firstName = "Jonas";
// let lastName = "Jonaitis";
let gimimoMetai = 2000;
let metai = 2023;
console.log(
  `Aš esu ${firstName} ${lastName}. Man yra ${metai - gimimoMetai} metai(ų)`
);

//      3.

// let firstName = "Jonas";
// let lastName = "Jonaitis";
let inicialai = firstName[0] + lastName[0];
console.log(inicialai);

//      4.

// var id = "ctl03_Tabs1";
// var lastFive = id.substr(id.length - 5); // => "Tabs1"

// let firstName = "Jonas";
// let lastName = "Jonaitis";
let lastThreeChars =
  firstName.substring(firstName.length - 3) +
  lastName.substring(lastName.length - 3);
console.log(lastThreeChars);

//      5.
let list = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// mySubString = str.substring(
//   str.indexOf(":") + 1,
//   str.lastIndexOf(";")
// str.slice(a, b)       paimti nuo a indekso (imtinai) iki b indekso (imtinai)

let data = "2023-10-07";
// let month = data.substring(data.indexOf("-") + 1, data.lastIndexOf("-"));
let month = data.slice(5, 7);
console.log(month);
// if (month === "01") {
//   console.log(list[0]);
// } else if (month === "02") {
//   console.log(list[1]);
// } else if (month === "03") {
//   console.log(list[2]);
// } else if (month === "04") {
//   console.log(list[3]);
// } else if (month === "05") {
//   console.log(list[4]);
// } else if (month === "06") {
//   console.log(list[5]);
// } else if (month === "07") {
//   console.log(list[8]);
// } else if (month === "08") {
//   console.log(list[7]);
// } else if (month === "09") {
//   console.log(list[8]);
// } else if (month === "10") {
//   console.log(list[9]);
// } else if (month === "11") {
//   console.log(list[10]);
// } else if (month === "12") {
//   console.log(list[11]);
// }

switch (true) {
  case month === "01":
    console.log(list[0]);
    break;

  case month === "02":
    console.log(list[1]);
    break;

  case month === "03":
    console.log(list[2]);
    break;

  case month === "04":
    console.log(list[3]);
    break;

  case month === "05":
    console.log(list[4]);
    break;

  case month === "06":
    console.log(list[5]);
    break;

  case month === "07":
    console.log(list[6]);
    break;

  case month === "08":
    console.log(list[7]);
    break;

  case month === "09":
    console.log(list[8]);
    break;

  case month === "10":
    console.log(list[9]);
    break;

  case month === "11":
    console.log(list[10]);
    break;

  case month === "12":
    console.log(list[11]);
    break;
}
