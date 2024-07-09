//RIDER HEIGHT ASSIGNMENT
function rideFunction() {
    var height, canRide;
    height = document.getElementById('height').value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById('ride').innerHTML = canRide + " to ride.";
}

//VEHICLE CONSTRUCTOR ASSIGNMENT
function vehicle(Make, Model, Year, Color) {
    this.vehicle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function carFunction() {
    document.getElementById("constructors").innerHTML = "Erik drives a " +
    Erik.vehicle_color + "-colored " + Erik.vehicle_model + " manufactured in "
    + Erik.vehicle_year + ".";
}

//NEW KEYWORD ASSIGNMENT
function dinner(Entree, sideOne, sideTwo, Drink) {
    this.dinner_entree = Entree;
    this.dinner_sideOne = sideOne;
    this.dinner_sideTwo = sideTwo;
    this.dinner_drink = Drink;
}
var Kylie = new dinner("Roasted Chicken", "Rice", "Roasted Potatoes", "Chardonnay");
var Cassie = new dinner("Medium Rare Steak", "Mashed Potatoes", "Asparagus", "Pepsi");
function dinnerOrder() {
    document.getElementById("newAndThis").innerHTML = "Kylie decided to order the "
    + Kylie.dinner_entree + " with the " + Kylie.dinner_sideTwo + " and a side of "
    + Kylie.dinner_sideOne + ". She paired it with her favorite drink - " + Kylie.dinner_drink + ".";
}
//RESERVED KEYWORD CHALLENGE
var trueDinner = new dinner("Turkey Sandwich", "Barbeque Chips", "Pickle", "Lemonade");
function dinnerOrderTrue() {
    document.getElementById("trueOrder").innerHTML = "true decided to have a " +
    trueDinner.dinner_entree + " for dinner with " + trueDinner.dinner_sideOne + ".";
}