var a=require("readline-sync")
var students={}
for (var i=0;i<10;i++){
    var name=a.question("enter the name")
    var marks=a.question("enter the marks")
    students[name]=marks
}
console.log(students)