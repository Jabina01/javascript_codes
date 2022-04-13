// take n as 2 and tell the output

var n=require("readline-sync");

var num=n.question("enter number: ");

for (var i=1;i<=10;i++) {

       multi=num*i;

       console.log(num + " *" + i + "=" + multi)

   }