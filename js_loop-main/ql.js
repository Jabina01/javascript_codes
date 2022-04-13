var n=require("readline-sync");

var choose_ascii=(n.question("enter number: "));

var ascii_char=97+choose_ascii

for (var i=97;i<=ascii_char;i++) {

       console.log(i,end="");

}