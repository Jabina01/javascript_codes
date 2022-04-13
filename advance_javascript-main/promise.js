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
// prom(true).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });


// function prom(complete){
//     return new promise(function(resolve,reject){
//         console.log("hellow")
//         setTimeout(()=>{
//             if (complete){
//                 resolve("i am completed")
//             }
//             else{
//                 reject("i am failed")
//             }
//         },2000)
//     })

// }
// prom(true).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })




// function prom(a,b){
//     return new Promise(function(resolve,reject){
//         console.log("fetching data,please wait")
//         var c=a+b
//         setTimeout(()=>{
//             if (a,b){
//                 resolve(`your answer: ${c}`)
//             }
//             else{
//                 reject("failed to calculate.")
//             }
//         },2000)
//     })
// }
// prom(5,2).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });




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
//       },1000)
//   })
// }
// prom(5,2).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });

// // let onfulfiltime=(result)=>{
// //   console.log(result)
// // }
// // let onrejectiontime=(error)=>{
// //   console.log(error)
// // }
// // prom(5,2).then(onfulfiltime)
// // prom(5,2).catch(onrejectiontime)




// const pobj1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let rollno=[1,2,3,4,5]
//     resolve(rollno)
//     reject("error while communicating")
//   },2000)
// });
// pobj1.then((rollno)=>{
//   console.log(rollno)
// }).catch((error)=>{
//   console.log(error)
// });



// const pobj1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let rollno=[1,2,3,4,5]
//     resolve(rollno)
//   },2000)
// });
// const getbiodata=(indexdata)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout((indexdata)=>{
//       const bio_data={
//           name:"jabu",
//           age:17
//       }
//       resolve(`my roll_no is ${indexdata}. my name is ${bio_data.name} and i m ${bio_data.age} years old.}`)
//       reject("nothing")
//     },2000,indexdata)
//   })
// }
// pobj1.then((roll_no)=>{
//   console.log(roll_no)
//   return getbiodata(roll_no[1])
// }).then((kuchb)=>{
//   console.log(kuchb)
// })
// // }).catch((error)=>{
// //   console.log(error)
// // });



// const count = true;
// let countValue = new Promise(function (resolve, reject) {
//     if (count) {
//         resolve("There is a count value.");
//     } else {
//         reject("There is no count value");
//     }
// });
// console.log(countValue);


// function prom(list){
//     return new Promise(function(resolve,reject){
//         console.log("fetching data,please wait")
//         i=0;
//         sum=0;
//         while (i<list.length){
//             var sum=sum+list[i]
//             setTimeout(()=>{
//                 if (sum){
//                     resolve(`your answer: ${sum}`)
//                 }
//                 else{
//                     reject("failed to calculate.")
//                 }
//             },2000)
//             i++
//         }
//         })
// }
// prom([5,2,3,4]).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// });



