var a=require("readline-sync")
var n=a.question("enter the prop")
dict={name:'Raju',marks:56}
for (i in dict){
    if (i==n){
        console.log("exists")
    break
    }
    else{
        console.log("not exists")
    break
    }
}
    

