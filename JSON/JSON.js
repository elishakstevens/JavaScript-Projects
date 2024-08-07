var obj = {
    "name":"Elisha",
    "age": 27,
    "city": "Portland"
};
var myJSON = JSON.stringify(obj);
document.getElementById("string").innerHTML = myJSON;