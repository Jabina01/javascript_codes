// enter name: kumar and tell us the what is the output will come
// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
// string=string+name[i]
// }
// if (store===string) {
// console.log("its palindrome string")
// }
// else {
// console.log("it's not a palindrome string")
// }


const n=require("readline-sync")
var name=n.question("enter the name:")
var string="";
for (var i=name.length-1;i>=0;i--){
    string=string+name[i]
}
if (name===string){
    console.log("its palindrome string")
}
else{
    console.log("its not palindrome string")
}