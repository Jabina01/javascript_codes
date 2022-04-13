// let arr = [3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++){
//   arr[i] = arr[i] * 3;
// }
// console.log(arr); // [9, 12, 15, 18]



// let arr = [3, 4, 5, 6];
// let modifiedArr = arr.map(function(element){
//     return element *3;
// });
// console.log(modifiedArr); // [9, 12, 15, 18]




// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
//   let userFullnames = users.map(function(element){
//       return element.firstName +" "+element.lastName;
//   })
//   console.log(userFullnames);
//   // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]



// const array=[2,3,4,5,6,7,8,9];
// const new_array=array.map((a)=>(a%2===0));
// console.log(new_array)



// const arr=[1,4,5,7,8,9,3,4]
// let newarr=arr.map((index,currentValue,arr)=>{
//   return `index no ${currentValue} is value ${index} of arr ${arr}`
// })
// console.log(newarr)


// const array=[25,36,49,64,81,100]
// const newarray=array.map((currentValue)=>{
//   return Math.sqrt(currentValue)
// })
// console.log(newarray)


// const array=[25,36,49,64,81,100]
// const newarray=array.map((currentValue)=>Math.sqrt(currentValue))
// console.log(newarray)


// // chaining
// let arr1=[1,2,3,6,7,8,9]
// let arr2=arr1.map((currentelement)=>currentelement*2).filter((currentelement)=>currentelement>10).reduce((accumulator,currentelement)=>{
//   return accumulator*=currentelement
// })
// console.log(arr2)