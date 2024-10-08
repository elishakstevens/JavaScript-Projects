//Creating a counting function using a While Loop
function Call_Loop() {
    var num = "";
    var X = 1;
    while (X < 6) {
        num += "<br>" + X; //num = num + "<br>" + X
        X++;
    }
    document.getElementById("loop").innerHTML = num;
}

//Accessing and using the length of a string
function String_Length() {
    let string = "I want to know how long this string is.";
    let length = string.length;
    document.getElementById("length").innerHTML = length;
}

//Displaying a list of instruments using a For Loop
var Instruments = ["Guitar", "Piano", "Flute", "Drumset", "Clarinet"];
var content = "";
var i;
function for_Loop() {
    for(i = 0; i < Instruments.length; i++) {
        content += Instruments[i] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//Creating an array and accessing values within it
function Array_Function() {
    var Dog = [];
    Dog[0] = "sleeping";
    Dog[1] = "playing with a ball";
    Dog[2] = "eating";
    Dog[3] = "asking for pets";
    document.getElementById("array").innerHTML = "The dog is " + Dog[1];
}

//Creating an object using constant keyword
function Constant_Function() {
    const My_Dog = {breed: "Chihuahua", age: 15, color: "black and white"};
    My_Dog.color = "white";
    My_Dog.name = "Ren";
    document.getElementById("constant").innerHTML = "My " + My_Dog.color + " " + My_Dog.breed + " is named " + My_Dog.name + "!";
}

//Block Scope with the Let Keyword
var F = 35;
document.getElementById("varKey").innerHTML = F;
{
    let F = 46;
    document.getElementById("letKey").innerHTML = F;
}
document.getElementById("block").innerHTML = F;

//Using return statement to perform math operation
document.getElementById("Return").innerHTML = returnFunction(4);
function returnFunction(num) {
    return 87 * num;
}

//Creating an object with properties and a method
let Bird = {
    breed: "Parakeet ",
    age: 2,
    name: "Sky ",
    description: function() {
        return "This bird is a " + this.age + " year old " + this.breed + "named " + this.name + "!";
    }
};
document.getElementById("bird").innerHTML = Bird.description();

//Breaking out of a loop if condition is true
function breakLoop() {
    let num = "";
    for(i = 0; i < 15; i++) {
        if (i == 7) {
            break;
        }
        num += "This number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = num;
}

//Breaking an interation of a loop if condition is true
function continueLoop() {
    let num = "";
    for(i = 0; i < 15; i++) {
        if (i == 7) {
            continue;
        }
        num += "This number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = num;
}