function addition(x, y) { //Adding numbers and modifying HTML element
    var add = x + y;
    document.getElementById("math").innerHTML = add;
}

function subtraction(x, y) { //Subtract numbers and modifying HTML element
    var sub = x - y;
    document.getElementById("math2").innerHTML = sub;
}

function multiply(x, y) { //Multiply numbers and modifying HTML element
    var mult = x * y;
    document.getElementById("math3").innerHTML = mult;
}

function division(x, y) { //Divide numbers and modifying HTML element
    var divi = x / y;
    document.getElementById("math4").innerHTML = divi;
}

function mixedMath(w, x, y, z) { //Multiple operations and modifying HTML element
    var mix = (w * y) + z / x - y;
    document.getElementById("math5").innerHTML = mix;
}

function modulus(x, y) { //Finding the remainder from diving numbers and modifying HTML element
    var mod = x % y;
    document.getElementById("math6").innerHTML = mod;
}

function negationOperator(x) { //Turning positive number into negative number and modifying HTML element
    var neg = -x;
    document.getElementById("math7").innerHTML = neg;
}

function incrementDecrement(x, y) { //Increment/Decrement numbers and modifying HTML element
    var inc = x++;
    var dec = y--;
    var str = "Increment: " + inc + " Decrement: " + dec;
    document.getElementById("math8").innerHTML = str;
}

function random() { //Generate a random number from 1 - 100 and modifying HTML element
    var ran = Math.random() * 100;
    document.getElementById("math9").innerHTML = ran;
}

function cosine(x) { //Finding the cosine of a number and modifying HTML element
    var cosi = Math.cos(x);
    document.getElementById("math10").innerHTML = cosi;
}