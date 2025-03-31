"use strict";

/*
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

/*
//function
function logger (){
      // console.log('My name is Jonas');
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor (apples, oranges){
      const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
      return juice;
   
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

*/

/*
//function declaration

function calcAge1(birthYear) {
      return 2037 - birthYear;
}
const age1 = calcAge1(1987);


//function expression

const calcAge2 = function (birthYear) {
      return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

*/

/*
//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear,firstName) => {
      const age = 2037 - birthYear;
      const retirement = 65 - age;
      return `${firstName} retires in ${retirement} years`;
}
yearsUntilRetirement(1991);
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
//function

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}
fruitProcessor(2, 3);
console.log(fruitProcessor(2, 3));
// 

*/

// ----------------------------------------------------------------------

/*
// function expression
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};
// function declaration
function retirementAge (ageRet) {
    return ageRet - 65;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    const jaiEnfinTrouve = retirementAge(age);


    if (retirement > 0) {
        return retirement;
        
    } else if (retirement < 0) {
        const retirementAge = `${firstName} est retraité(e) depuis ${jaiEnfinTrouve} ans`;
        return retirementAge;
    } else {
        return "Vos données sont incorrectes";
    }
};

// return `${firstName} retires in ${retirement} years`;

yearsUntilRetirement(1991, "Jonas");
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

// Challenge #1

// Expression de fonction
// const calcAverage = function (score1, score2, score3) {
//     const averageScore = (score1 + score2 + score3) / 3;
//     return averageScore;
// };
//

// fonction fléchée
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage (85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

 const checkWinner = function(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >=scoreKoalas * 2) {
        console.log(`Dolphins win (${scoreDolphins} vs ${scoreKoalas})`);
    } else if (scoreKoalas >=scoreDolphins * 2) {
        console.log(`Koalas win (${scoreKoalas} vs ${scoreDolphins})`);
    } else {
        console.log("No team wins ...");
    }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
// *
*/

// Arrays
/*
const friends = ["Mickeal", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

// Pour obtenir le nombre d'éléments qui est contenu dans le tableau

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// On nepeut pas modifire tout un tableau
// friends = ["Jay", "Mary"]

const firstName = "Hadia";

const hadia = [firstName, "Sacko", 2025 - 1987, "Développeuse FullStack", friends];
console.log(hadia);
console.log(hadia.length);
*/

// Exercise

/*
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

calcAge(years);
console.log(calcAge(years));
/*
// Mon exercices
console.log(years[years.length-1]-10);
console.log(calcAge(years[2]));
*/

/*
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages =[ calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])]
console.log(ages)
*/

/*
// Methods

// PUSH
const friends = ["Mickeal", "Steven", "Peter"];
// friends.push("jay");
console.log(friends);

// Nous créons une variable avec la fonction push pour pourvoir stocker les données ou la valeur retrounées

const newLength = friends.push("Jay");
console.log(newLength);

//  UNSHIFT

friends.unshift("John");
console.log(friends);

//POP (Renvoie l'élément supprimé)

friends.pop();
console.log(friends);

const popped = friends.pop();
console.log(popped);
console.log(friends);

// friends.shift();
console.log(friends);

const shifted = friends.shift();
console.log(shifted);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Steven"));
console.log(friends.includes("Mike"));

if (friends.includes("Steven")) {
    console.log("You have a friends called Steven");
}

*/

const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

const calcTip = function (bill) {
    const tip2 = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2; 
    return tip2;
};
calcTip(100);
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2]+ tips[2]];
console.log(bills);
console.log(tips);
console.log(totals);
