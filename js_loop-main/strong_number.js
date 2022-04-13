var a=require("readline-sync")
var num=a.questionInt("enter the number")
var sum1=0
var temp=num
while(num>0){
        var i=1
        var f=1
        var r=num%10
        while(i<=r){
            var f=f*i
            var i=i+1
        }
        var sum1=sum1+f
        var num=Math.floor(num/10)
}
if(sum1==temp){
    console.log("it is a strong number")
}
else{
    console.log("it is not a strong number")
}
