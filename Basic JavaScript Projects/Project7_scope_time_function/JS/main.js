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