function myDictionary() { //Create a dictionary of a cat
    var animal = {
        Species: "Cat",
        Color: "Orange",
        Breed: "Domestic Short-Hair",
        Age: 3,
        Sound: "Meow"
    };
    delete animal.Breed; //Delete the breed KVP from the dictionary
    document.getElementById("dictionary").innerHTML = animal.Breed; //Modify HTML element with the value of the specified key
}

function colorDictionary() { //Create a dictionary where all the keys are the same
    var colors = {
        color: "black",
        color: "red",
        color: "blue"
    };
    document.getElementById("challenge").innerHTML = colors.color; //Modify HTML element - will display the last value with this same key
}