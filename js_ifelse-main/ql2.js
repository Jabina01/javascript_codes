let readlineSync=require("readline-sync")
var number=readlineSync.questionInt("enter the number:")
if (number%3==0 && number%7==0) {
    console.log("Chocolate")
    }
else if(number%3 === 0){
   console.log("choco")
}
else if (number % 7==0){
   console.log("late")
}
else {
   console.log("Not divisible by 3 , 7")
}
