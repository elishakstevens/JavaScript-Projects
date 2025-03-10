function voterAge() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age > 17) ? "You are old enough":"You are not old enough";
    document.getElementById("vote").innerHTML = canVote + " to vote!";
}