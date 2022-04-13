// // Javascript program to convert a decimal
// // number to binary number
// function decToBinary(n)
// {
//     let binaryNum = new Array(32);
//     let i = 0;
//     while (n > 0) {
//         binaryNum[i] = n % 2;
//         n = Math.floor(n / 2);
//         i++;
//     }
//     for (let j = i - 1; j >= 0; j--)
//         console.log(binaryNum[j]);
// }
// let n = 17;
// decToBinary(n); 





// JavaScript program to convert binary to decimal
// function binaryToDecimal(n)
// {
//     let decvalue = 0;
//     let base = 1;
//     // let temp = n;
//     while (n) {
//         let last_digit = n % 10;
//         n = Math.floor(n / 10);
//         decvalue += last_digit * base;
//         base = base * 2;
//     }
//     console.log(decvalue);
// }
//     let n = 10101001;
// binaryToDecimal(n)



// const binary = '101101';
// const decimal = Number.parseInt(binary, 2);
// console.log(decimal); // 45


const num = 125;
const expandedForm = num => {
   const numStr = String(num);
   let res = '';
   for(let i = 0; i < numStr.length; i++){
      const placeValue = (numStr[i]) * Math.pow(10, (numStr.length - 1 - i));
      if(numStr.length - i > 1){
         res += `${placeValue}+`
      }else{
         res += placeValue;
      };
   };
   return res;
};
console.log(expandedForm(num));