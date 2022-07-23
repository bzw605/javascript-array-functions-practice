const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
// const names = characters.map((character) => character.name);
// console.log(names);

//2. Get array of all heights
// const heights = characters.map((character) => character.height);
// console.log(heights);

//3. Get array of objects with just name and height properties
// const objects = characters.map((character) => ({
//   name: character.name,
//   height: character.height,
// }));
// console.log(objects);

//4. Get array of all first names
// const firstNames = characters.map((character) => character.name.split(" ")[0]);
// console.log(firstNames);

//***REDUCE***
// //1. Get total mass of all characters
// const totalMass = characters.reduce((acc, cur) => {
//   return acc + cur.mass;
// }, 0);
// console.log(totalMass);

// //2. Get total height of all characters
// const totalHeight = characters.reduce((acc, cur) => {
//   return acc + cur.height;
// }, 0);
// console.log(totalHeight);

// //3. Get total number of characters by eye color
// const charColor = characters.reduce((acc, cur) => {
//   const color = cur.eye_color;
//   if (acc[color]) {
//     acc[color]++;
//   } else {
//     acc[color] = 1;
//   }
//   return acc;
// }, {});
// console.log(charColor);

// //4. Get total number of characters in all the character names
// const totalChars = characters.reduce((acc, cur) => {
//   return acc + cur.name.length;
// }, 0);
// console.log(totalChars);

//***FILTER***
// //1. Get characters with mass greater than 100
// const greater100 = characters.filter((character) => {
//   return character.mass > 100;
// });
// console.log(greater100);

// //2. Get characters with height less than 200
// const shortChars = characters.filter((character) => {
//   return character.height < 200;
// });
// console.log(shortChars);

// //3. Get all male characters
// const males = characters.filter((character) => character.gender === "male");
// console.log(males);

// //4. Get all female characters
// const females = characters.filter((character) => character.gender === "female");
// console.log(females);

//***SORT***
// //1. Sort by mass
// const byMass = characters.sort((a, b) => {
//   return a.mass - b.mass;
// });
// console.log(byMass);

// //2. Sort by height
// const byHeight = characters.sort((a, b) => {
//   return a.height - b.height;
// });
// console.log(byHeight);

// //3. Sort by name
// const byName = characters.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   return 1;
// });
// console.log(byName);

// //4. Sort by gender
// const byGender = characters.sort((a, b) => {
//   if (a.gender === "female") return -1;
//   return 1;
// });
// console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
const isBlue = characters.every((character) => {
  return character.eye_color === "blue";
});
console.log(isBlue);

//2. Does every character have mass more than 40?
const allMass = characters.every((character) => character.mass > 40);
console.log(allMass);

//3. Is every character shorter than 200?
const allShort = characters.every((character) => character.height < 200);
console.log(allShort);

//4. Is every character male?
const allMale = characters.every((character) => character.gender === "male");
console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const someMale = characters.some((character) => character.gender === "male");
console.log(someMale);

//2. Is there at least one character with blue eyes?
const someBlue = characters.some((character) => character.eye_color === "blue");
console.log(someBlue);

//3. Is there at least one character taller than 210?
const someTaller = characters.some((character) => character.height > 210);
console.log(someTaller);

//4. Is there at least one character that has mass less than 50?
const someMass = characters.some((character) => character.mass < 50);
console.log(someMass);
