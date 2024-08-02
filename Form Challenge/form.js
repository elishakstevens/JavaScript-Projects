function validateForm() {
    let x = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Please provide a valid phone number");
        return false;
    }
}