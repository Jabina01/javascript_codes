var a=require("readline-sync")
var num=a.questionInt("enter the number")
var n=num
rem=sum=0;
while (num>0){
    var rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
}
if (n%sum==0){
    console.log(String(n)+"is a harshad number")
}
else{
    console.log(String(n)+"is not a harshad number")
}


// var i=0;
// while (i<100){
//     var a=i%10;
//     var b=(i%10)%10;
//     var c=(Math.floor(i/10))Math.floor(/10
//     var d=a+b+c
//     i++
// }
// if (i%d==0){
//     console.log(i,"it is a harshad number")
// }
// else{
//     console.log(i,"it is not a harshad number")
// }
