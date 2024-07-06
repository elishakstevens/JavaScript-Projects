function My_First_Function() {
    var str = "This is the first string."; //Assign str variable
    var str2 = " This is the second string."; //Assign str2 variable
    document.getElementById("button_text").innerHTML = str + str2; //Modifying the HTML element at this id with the concatenated strings
}

function favPodcast() {
    var sentence = "My favorite podcast is "; //Assign sentence variable
    sentence += "Small Town Murder!"; //Concatenating strings
    document.getElementById("podcast").innerHTML = sentence; //Modify HTML element of this id with completesentence string
}
