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

// fonction fléchée
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
