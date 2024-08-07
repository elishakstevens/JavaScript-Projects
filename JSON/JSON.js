var obj = {
    "name":"Elisha",
    "age": 27,
    "city": "Portland"
};
var myJSON = JSON.stringify(obj);
document.getElementById("string").innerHTML = myJSON;

var obj2 = JSON.parse(myJSON);
document.getElementById("string2").innerHTML = obj2.name + " lives in " + obj2.city;