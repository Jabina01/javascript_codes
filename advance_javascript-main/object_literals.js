// let name="yahoo baba"
// let course="btech"
// var object={
//     name,
//     course
// };
// console.log(object)


// let n="student"
// var Object={
//     [n+"name"]:"jabeena",
//     course:"btech",
//     details:function(){
//         return `${this.studentname} is a ${this.course} student`
//     }
// }
// console.log(Object)
// console.log(Object.details())


// let fname="yahoo"
// let lname="baba"
// let course="btech"
// function student(fname,lname,course){
//     let fullname=fname+" "+lname
//     return {fullname,course}
// }
// console.log(student(fname,lname,course))


let fname="yahoo"
let lname="baba"
let course="btech"
function student(fname,lname,course){
    let fullname=fname+" "+lname
    return {fullname,course}
}
let s=student(fname,lname,course);
console.log(s.fullname)
console.log(s.course)