// right triangle
// var i=0;
// var string="";
// while(i<=6){
//     j=1
//     while (j<=i){
//         string=string+"*";
//         j++;
//     }
//     i++;
//     string=string+"\n";
// }
// console.log(string)

// let n=6;
// var string=" "
// for (var i=1;i<=n;i++){
//     for (j=1;j<=n-i;j++){
//         string=string+"";
//     }
//     for (k=0;k<i-1;k++){
//         string=string+"*"
//     }
//     string=string+"\n"
// }
// console.log(string)



// var i=0;
// var string="";
// while(i<=6){
//     j=1
//     while (j<=i){
//         string=string+"*";
//         j++;
//     }
//     i++;
//     string=string+"\n";
// }
// console.log(string)




// FILTER
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)



// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);


// function isBigEnough(value) {
//     return value >= 10
//   }
//   let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
//   console.log(filtered)
// filtered is [12, 130, 44]
  

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function irime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(irime)); // [2, 3, 5, 7, 11, 13]
