// let sum = [0, 1, 2, 3].reduce(function (accomulator, currentValue) {
//     return accomulator + currentValue
//   }, 0)
//   console.log(sum)
//   // sum is 6
  


// let sum = [0, 1, 2, 3]
// a=sum.reduce(function (previousValue, currentValue) {
//   return previousValue + currentValue
// }, 0)
// console.log(a)
// // sum is 6



// let total = [ 0, 1, 2, 3 ]
// a=total.reduce(( previousValu, currentValue ) => previousValu + currentValue,
// 0
// )
// console.log(a) 



// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue.x
// }, initialValue)
// console.log(sum) // logs 6



// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(previousValue, currentValue) {
//       return previousValue.concat(currentValue)
//     },
//     []
//   )
//   console.log(flattened)
  // flattened is [0, 1, 2, 3, 4, 5]
  


// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
// ( previousValue, currentValue ) => previousValue.concat(currentValue),
// []
// )
// console.log(flattened)



// function l(a){
//     return a
// }    
// console.log([1,2,3,4,5].concat([2,3,4,6]))


// dict=[
//     {khushboo:"kumari"},
//     {rutuja:"patil"},
//     {ankita:"kumari"}
// ]
// fs=require("fs")
// fs.writeFileSync("seeat.json",JSON.stringify(dict,null,2))
// var data=fs.readFileSync("seeat.json","utf8")
// console.log(data)
// array=data.filter(function(e){
//     return e.khushboo=="kumari"
// });
// console.log(array)
    



// dict=[
//     {khushboo:"kumari"},
//     {rutuja:"patil"},
//     {ankita:"kumari"}
// ]
// array=dict.filter(function(e){
//     return e.khushboo=="kumari"
// });
// console.log(array)
    





// const fs=require('fs')
// const a=require("readline-sync")
// var sum=0
// for (i=0;i<=3;i++){
// let num=a.questionInt("enter the number:")
//   sum=sum+num
// fs.writeFileSync("jabu.txt",sum)}