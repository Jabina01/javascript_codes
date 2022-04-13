var sum=0;
for (var i=1;i<=10;i++){
    var a=require("readline-sync")
    var number=a.questionInt("enter the number") 
    sum=sum+number
}
console.log(sum)