// var a=new String("jabeena")
// console.log(typeof(a))


// var a=new Boolean(true)
// console.log(typeof(a))


// var a=new Number(2)
// console.log(typeof(a))



// var obj1 = { a: 10, b:20 };
//    var obj2 = { c: 30, d:40 };
//    var obj3 = { e: 50 };
//    var obj = Object.assign({}, obj1, obj2, obj3);
//    console.log(obj);




// const person = {
//    name: 'John',
//    age: 30,
//    // accessing name property by using this.name
//    greet: function() { console.log('The name is' + ' ' + this.age); }
// };
// person.greet();


// const person = {
//    name: 'John',
//    age: 30,
//    greet: function() {
//        let surname = 'Doe';
//        console.log('The name is' + ' ' + this.name + ' ' + surname); }
// };
// person.greet();




// let Student = {
//    name: "Lisa",
//    age: 24,
//    marks: 78.9,
//  };
//  // get all keys of Student
//  let std1 = Object.values(Student);
//  console.log(std1);



// // Array objects
// const arr = ["A", "B", "C"];
// console.log(Object.keys(arr)); // ['0', '1', '2']


// // array-like objects
// const obj = { 65: "A", 66: "B", 67: "C" };
// console.log(Object.keys(obj)); // ['65', '66', '67']


// // random key ordering
// const obj1 = { 42: "a", 22: "b", 71: "c" };
// console.log(Object.keys(obj1)); // ['22', '42', '71']


// // string => from ES2015+, non objects are coerced to object
// const string = "code";
// console.log(Object.keys(string)); // [ '0', '1', '2', '3' ]




// dict={}
// l=0
// for (var c = 1; c <= 5; c++) {
//     var notPrime = false;
//     for (var i = 2; i <= c; i++) {
//         if (c%i===0 && i!==c) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//         console.log(c);
//             }
//             dict[l]=c;
//         l++
//     }
// console.log(dict);



// dict={1:["a","b"],2:["c","d"]}
// v=Object.values(dict)
// for (i of v[0]){
//     for (j of v[1]){
//         console.log(i+j)
//     }
// }




// dict={"c1":[1,2,3],"c2":[5,6,7],"c3":[9,10,11]}
// k=Object.keys(dict)
// console.log(k)
// v=Object.values(dict)
// console.log(v)
// for (i of v[0]){
//     for (j of v[1]){
//         for (k of v[2])
//         console.log(i,j,k)
//     }
// }


var string="qwertyuiuqwer";
let count={};
var list=[]
for (var i of string){
    if (list.includes(i)){
        count[i]=count[i]+1;
    }
    else{
        list.push(i)
        count[i]=1
    }
}
console.log(count)