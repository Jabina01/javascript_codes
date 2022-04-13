let readlineSync=require("readline-sync")
var age=readlineSync.questionInt("enter the age:")
if (age>=5){
    console.log("go to school")
}
if (age>=18){
    console.log("can vote")
}
if (age>=21){
    console.log("can drive a car")
}
if (age>=24){
    console.log("can marry")
}
else {

    console.log("can legally drink")
}



