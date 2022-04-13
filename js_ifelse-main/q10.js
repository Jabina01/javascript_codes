let readlineSync=require("readline-sync")
var varx = readlineSync.questionInt("enter the number1:")
var vary = readlineSync.questionInt("enter the number2:")
if (varx%vary==0){
    console.log("divisible")
}
else{
    console.log("not divisible")
}