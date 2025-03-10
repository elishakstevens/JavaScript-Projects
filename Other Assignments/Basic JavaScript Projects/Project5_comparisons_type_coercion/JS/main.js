document.write(typeof 4); //typeof operator to return number
document.write("86" + 365); //combining a string and a number

function notANumber() { //will display NaN because cannot divide 0 by 0
    document.getElementById("noNum").innerHTML = 0/0;
}

function trueNumber() { //will display true because the string is not a number
    document.getElementById("true").innerHTML = isNaN('String');
}

function falseNumber() { //will display false because the string is a number
    document.getElementById("false").innerHTML = isNaN('8934');
}

function positiveInfinity() { //Will display infinity
    document.getElementById("posInfinity").innerHTML = 3E472;
}

function negativeInfinity() { //Will display -infinity
    document.getElementById("negInfinity").innerHTML = -3E472;
}

document.write(23 < 25); //True
document.write(23 > 25); //False

console.log(45 + 12); //Sum will display in the console of webpage

console.log(43 > 68); //False will display in the console of webpage

document.write(23 == 23); //True
document.write(23 == 24); //False

document.write(23 === 23); //True
document.write(23 === "24"); //False because different data types and values
document.write(23 === "23"); //False because different data types
document.write(23 === 24); //False because different values

document.write(23 < 24 && 56 > 54); //True because both statements are true
document.write(23 < 24 && 56 < 54); //False because one statement is false
document.write(23 < 24 || 56 < 54); //True because one statement is true
document.write(23 > 24 || 56 < 54); //False because both statements are false

function notOperatorTrue() { //Will display true because not(false)
    document.getElementById("trueNot").innerHTML = !(24 > 39);
}

function notOperatorFalse() { //Will display false because not(true)
    document.getElementById("falseNot").innerHTML = !(24 < 39);
}