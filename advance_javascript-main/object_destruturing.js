// const biodata={
//     name:"jabu",
//     age:18,
//     deg:"12th"
// }
// let {name,age,deg}=biodata
// console.log(`my name is ${name}`)


const biodata={
    name:"jabu",
    age:18,
    deg:"12th",
    hobbies:{
        first:"painting",
        second:"dancing"
    }
}
let {name:myname,age:ages,deg,hobbies}=biodata
console.log(`my name is ${myname}.my age is ${ages}.and i love ${hobbies.second}`)
