// let a = 2;
// switch (a) {
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     case 3:
//         a='three';
//         break
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is`,a);



// program using switch statement
// let a = 1;
// switch (a) {
//     case "1":
//         a = 1;
//         break;
//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);






var a=require("readline-sync")
var operator = a.question('Enter operator ( either +, -, * or / ): ');
var result;
var number1 = a.questionInt('Enter first number: ');
var number2 = a.questionInt('Enter second number: ');
switch(operator) {
    case '+':
        result = parseFloat(number1) + parseFloat(number2);
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
    default:
        console.log('Invalid operator');
        break;
}