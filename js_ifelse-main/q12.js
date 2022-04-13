let readlineSync=require("readline-sync")
var num=readlineSync.questionInt("enter the number")
if (num%5==0 && num%15==0){
    console.log("Divisible by both")
}
else{
    console.log("Not divisible by both")
}