// var d=10;
// const outerfun=(a)=>{
//     let b=10;
//     const innerfun=()=>{
//         let sum=a+b+d
//         console.log(`the sum is ${sum}`)
//     }
//     return innerfun;
// }
// let inner=outerfun(5)
// console.log(inner)
// inner();


// let a = 4;
// function myFunction() {
//   return a * a;
// }
// console.log(myFunction())



const outer=((list)=>{
    var i=0
    var sum=0
    while(i<list.length){
        sum=sum+list[i]
        i=i+1
    }
    const ininer=((list1)=>{
        var m=1
        var i=0
        while(i<list1.length){
            m=m*list1[i]
            i++
        }
        // console.log(sum,"sum")
        console.log(m,"mul")
    })
    ininer([2,4,5,6,7])
})
outer([2,3,4,5,6])





// function outer(list){
//     var i=1
//     var sum=0
//     while(i<list.length){
//         sum=sum+list[i]
//         i=i+1
//     }
//     function ininer(list1){
//         var i=1
//         var m=1
//         while(i<list1.length){
//             m=m*list1[i]
//             i++
//         }
//         console.log(m,"mul",sum,"sum")
//     }
//     ininer([1,4])
// }
// outer([2,3,4,5,6])
