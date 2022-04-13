var i=50
sum=0
while (i>40){
    var a =require("readline-sync")
    var num=a.questionInt("enter the number")
    sum=sum+num
    i--
    // console.log(sum)
}
console.log(sum)