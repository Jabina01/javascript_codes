let readlineSync=require("readline-sync")
var water = readlineSync.question("enter the number:")
if (water<1){
    console.log(" more water needs to be filled")
}
else if (water>=1 && water<=10){
    console.log("there is no need to fill water")
}
else{
    console.log("overflow.")
}