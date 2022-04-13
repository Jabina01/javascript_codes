// async function test(){
//     console.log("2:message");
//     const response=await fetch("");
//     console.log("3:message");
//     const students=await response.json();
//     return students
// }
// console.log("1:message");
// let a=test();
// console.log("4:message")
// console.log(a)


// async function test(){
//     const response=await fetch("");
//     const students=await response.json();
//     return students;
// }
// test().then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// });




// const pobj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let rollno=[1,2,3,4,5]
//       resolve(rollno)
//     },2000)
//   });
//   const getbiodata=(indexdata)=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout((indexdata)=>{
//         const bio_data={
//             name:"jabu",
//             age:17
//         }
//         resolve(`my roll_no is ${indexdata}. my name is ${bio_data.name} and i m ${bio_data.age} years old.}`)
//       },2000,indexdata)
//     })
//   }
// async function getdata(){
//   try{
//     const rollnodata=await pobj1;
//     console.log(rollnodata)
//     const biodatas=await getbiodata(rollnodata[1])
//     console.log(biodatasa)
//   }catch(error){
//     console.log(`the error is ${error}`)
//   }
// }
// getdata()



// function prom(a,b){
//   return new Promise(function(resolve,reject){
//       console.log("fetching data,please wait")
//       var c=a+b
//       setTimeout(()=>{
//           if (a,b){
//               resolve(`your answer: ${c}`)
//           }
//           else{
//               reject("failed to calculate.")
//           }
//       },2000)
//   })
// }
// async function getdata(){
//   const sum=await prom(4,8)
//   console.log(sum)
// }
// getdata()


// function prom(complete){
//     return new Promise(function(resolve,reject){
//         console.log("fetching data,please wait")
//         setTimeout(()=>{
//             if (complete){
//                 resolve("i m sucessful.")
//             }
//             else{
//                 reject("i m failed.")
//             }
//         },2000)
//     })
// }
// async function getdata(){
//   var a=await prom(true);
//   console.log(a)
// }
// getdata()




// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise resolved')
//     }, 1000); 
// });
// async function asyncFunc() {
//     try { 
//         let result = await promise; 

//         console.log(result);
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }
// asyncFunc();



// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve('Promise resolved')
//     }, 1000); 
// });
// async function asyncFunc() {
//     try { 
//         let result = await promise; 

//         console.log(result);
//     }   
//     catch(error) {
//         console.log(error);
//     }
// }
// asyncFunc();


let prom=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("promise return")
    },1000)    
});
async function asyncFunc(){
    try{
    let result=await prom;
    console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
asyncFunc()
