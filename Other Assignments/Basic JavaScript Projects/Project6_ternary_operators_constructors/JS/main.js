//RIDER HEIGHT ASSIGNMENT
function rideFunction() {
    var height, canRide;
    height = document.getElementById('height').value; //Save input from user in height variable
    canRide = (height < 52) ? "You are too short":"You are tall enough"; //Ternary Operator to determine if someone is too short or tall enough
    document.getElementById('ride').innerHTML = canRide + " to ride."; //Modifying HTML element to inform user
}

//VEHICLE CONSTRUCTOR ASSIGNMENT
function vehicle(Make, Model, Year, Color) { //Creating object constructor
    this.vehicle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red"); //Creating objects from the vehicle function
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function carFunction() {  //Using objects to modify HTML element and display specific object information
    document.getElementById("constructors").innerHTML = "Erik drives a " +
    Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in "
    + Erik.vehicle_year + ".";
}

//NEW KEYWORD ASSIGNMENT
function dinner(Entree, sideOne, sideTwo, Drink) { //Creating object constructor
    this.dinner_entree = Entree;
    this.dinner_sideOne = sideOne;
    this.dinner_sideTwo = sideTwo;
    this.dinner_drink = Drink;
}
var Kylie = new dinner("Roasted Chicken", "Rice", "Roasted Potatoes", "Chardonnay"); //Creating objects from the dinner function
var Cassie = new dinner("Medium Rare Steak", "Mashed Potatoes", "Asparagus", "Pepsi");
function dinnerOrder() { //Using objects to modify HTML element and display specific object information
    document.getElementById("newAndThis").innerHTML = "Kylie decided to order the "
    + Kylie.dinner_entree + " with the " + Kylie.dinner_sideTwo + " and a side of "
    + Kylie.dinner_sideOne + ". She paired it with her favorite drink - " + Kylie.dinner_drink + ".";
}
//RESERVED KEYWORD CHALLENGE
var trueDinner = new dinner("Turkey Sandwich", "Barbeque Chips", "Pickle", "Lemonade"); //Cannot use true as a variable name because true already has another meaning
function dinnerOrderTrue() {                                                            //None of the elements on the webpage will work properly if I try to use true as the variable
    document.getElementById("trueOrder").innerHTML = "true decided to have a " +
    trueDinner.dinner_entree + " for dinner with " + trueDinner.dinner_sideOne + ".";
}

//NESTED FUNCTIONS ASSIGNMENT
function nestedFunction() { //Functions inside functions that are all connected
    document.getElementById("nestedFunction").innerHTML = nest(); //Modify HTML element with the return value of nest function
    function nest() { //Define nest function within nestedFunction function
        var count = 3;
        function countNest() {count += 2;}  //Has access to count variable above it, and adds 2
        countNest();
        return count; //Return value 5
    }
}

