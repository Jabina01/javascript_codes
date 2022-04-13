let readlineSync=require("readline-sync")
var x = readlineSync.questionInt("enter the first_number:")
var y = readlineSync.questionInt("enter the second_number:")
if (x<y){
    console.log(y,"y is greater")
}
else{
    console.log(x," x is greater")
}