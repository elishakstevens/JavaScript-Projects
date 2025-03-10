//Concatenating a sentence together using the concat() method
function sentenceParts() {
    part_1 = "This is ";
    part_2 = "a whole ";
    part_3 = "sentence.";
    sentence = part_1.concat(part_2, part_3);
    document.getElementById("concatenate").innerHTML = sentence;
}

//Slicing part of a string using the slice() method
function sliceString() {
    Sentence = "He's barking up the wrong tree.";
    Section = Sentence.slice(5, 12);
    document.getElementById("slice").innerHTML = Section;
}

//Changing string to all Upper Case letters using toUpperCase() method
function upperCaseMethod() {
    sentence = "This text is Upper Case.";
    document.getElementById("upperCase").innerHTML = sentence.toUpperCase();
}

//Finding the position of a word in a string using the search() method
function searchMethod() {
    sentence = "I'm going to search for a word in this sentence.";
    document.getElementById("position").innerHTML = sentence.search("search");
}

//Converting a number into a string using the toString() method
function numToString() {
    number = 429;
    document.getElementById("number").innerHTML = number.toString();
}

//Formatting number to specific length using toPrecision() method
function numPrecision() {
    number = 4236.981027836019263749571638490;
    document.getElementById("precision").innerHTML = number.toPrecision(7);
}

//Rounding a number and converting it into a string using toFixed() method
function fixedMethod() {
    number = 236.89056283948;
    document.getElementById("fixed").innerHTML = number.toFixed();
}

//Returning the value of a string using the valueOf() method
function valueMethod() {
    sentence = "The big red dog rolled down the hill."
    document.getElementById("value").innerHTML = sentence.valueOf();
}