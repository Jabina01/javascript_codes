let readlineSync=require("readline-sync")
var varx = readlineSync.questionInt("enter the number:")
if (varx%2==0){
    console.log("divisible ha")
}
else{
    console.log("divisible nhi ha")
}
