function conversionFeetToMiles() {
    let feet = document.getElementById("number").value;
    let miles = parseFloat(feet/3);
    document.getElementById("miles").innerHTML = miles;
}
