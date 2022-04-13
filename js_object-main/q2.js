var a=require("readline-sync")
var num=a.questionInt("enter the number")
d={}
for (var i=0;i<=num;i++){
d[i]=i**2;
}console.log(d)