//GLOBAL VARIABLE
var globalVar = 13;
function globalFunction() {
    document.write(globalVar + 42 + "<br>");
}
function globalFuncTwo() {
    document.write(globalVar + 31 + "<br>");
}
globalFunction();
globalFuncTwo();

//LOCAL VARIABLE
function localFunction() {
    var localVar = 13;
    document.write(localVar + 42 + "<br>");
}
function localFuncTwo() {
    console.log(localVar + 31 + "<br>"); 
}
localFunction();
localFuncTwo(); //Error due to variable not defined

//Using Date().getHours() method in an 'if' statement
function dateMethod() {
    if (new Date().getHours() > 17) {
        document.getElementById("date").innerHTML = "It's time for dinner!";
    }
}

//Creating my own if statement and adding else statement
function numGuests(num) {
    if (num > 20) {
        people = "20+ Guests";
    }
    else {
        people = num + " Guests";
    }
    document.getElementById("guests").innerHTML = people;
}

//Function with if and else statements
function rideHeight() {
    Height = document.getElementById("height").value;
    if (Height >= 48) {
        Ride = "You can ride the roller coaster!";
    }
    else {
        Ride = "You cannot ride the roller coaster...";
    }
    document.getElementById("ride").innerHTML = Ride;
}

//Function with if, if else, and else statements
function timeOfDay() {
    Time = new Date().getHours();
    if (Time < 12 == Time > 0) {
        dayTime = "Morning Time!";
    }
    else if (Time >= 12 == Time < 17) {
        dayTime = "The Afternoon!";
    }
    else {
        dayTime = "Evening Time!";
    }
    document.getElementById("time").innerHTML = dayTime;
}