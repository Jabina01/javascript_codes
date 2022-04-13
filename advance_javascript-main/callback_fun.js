// function sum(a,b){
//     return a+b;
// }
// function calc(fx,a,b){
//     return fx(a,b)
// }
// console.log(sum(sum,4,5))



// function differ(a,b){
//     return a-b;
// }
// function calc(fx,a,b){
//     return fx(a,b)
// }
// console.log(calc(differ,4,5))



// const persone=(friend)=>{
//     console.log(`i m busy right now. i m talking to ${friend}.i will call u back`)
//     pertwo();
// }
// const pertwo=()=>{
//     console.log(`hey whatsapp`)
// }
// persone("thapa",pertwo)




// const funA=()=>{
//     setTimeout(function(){
//         console.log(`welcome to funA`)
// },3000);
// }
// const funB=()=>{
//     console.log(`welcome funB`);
// }
// funA();
// funB();





//function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}
// passing function as an argument
greet('Peter', callMe); 



// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');
//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }
// // callback function
// function sayName(name) {
//     console.log('Hello' + ' ' + name);
// }
// // calling the function after 2 seconds
// greet('John', sayName);



// function greet() {
//     console.log(`Hello world!`)
// }
// function sayName(name) {
//     console.log(`Hello ${name}!`)
// }
// // Calling the function
// setTimeout(greet, 2000)
// sayName('Oliver')




// function greet(name,call){
//     console.log(`good morning ${name}`)
//     call()
// }
// function description(){
//     console.log(`i am a student`)
// }
// greet("jabeena",description)




// const greet=((name,call)=>{
//         console.log(`good morning ${name}`)
//         call()
//     })
// const description=(()=>{
//         console.log(`i am a student`)
//     })
// greet("jabeena",description)
    


