var a=require("readline-sync")
var num=a.questionInt("enter the number")
var sum=0
var i=1
while (i<num){
    if (num%i==0){
        sum=sum+i
    }
    i++
}
if (num==sum){
    console.log(num,"is a perfect number")
}
else{
    console.log(num,"is not a perfect number")
}



