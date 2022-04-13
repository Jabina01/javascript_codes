// function addnumberslist(list1,list2){
//     var i=0;
//     sum=0;
//     while (i<list1.length){
//         sum=sum+list1[i]+list2[i]
//         i++
//     }
//     console.log(sum)
// }
// addnumberslist([1,2,3] , [1, 2, 3])




// function WordCount(str) { 
//     return str.split(" ").length;
//   }
//   console.log(WordCount("hello to the world"));
  


// function WordCount(str) { 
//     var count=0
//     list=[]
//     for (var i=0;i<str.length;i++){
//         count=count+1
//     }
//     list.push(str)
//     console.log(count)
// }
// WordCount("hellow to the world")



// sentence="my ame is jabeena";
// split_value=[]
// tmp=' '
// for (var c=0;c<sentence.length;c++){
//     if (c==' '){
//         split_value.push(tmp)
//         tmp==' '
//     }
//     else{
//         tmp+=c
//     }
// }
// split_value.push(tmp)    
// console.log(split_value)


// const splitString = (str) => {
//     let resultArray = [];              
//     let tempString = '';               
//     for(var i = 0; i<= str.length;i++){ 
//         if(str[i] !== ' '){            
//           tempString += str[i];        
//          } else{                       
//           resultArray.push(tempString);
//           tempString = "";             
//         }
//     }
//     return resultArray;                
//  }
// console.log(splitString("hellow all the world"))


// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// reverse=[]
// for(var i=numbers.length-1; i>=0;i--){
//     reverse.push(numbers[i])
// }
// console.log(reverse)


// function splitString(str) {
//     var array = [] 
//     var string = '' 
//     count=0            
//     for(var i = 0; i<=str.length;i++){ 
//         if(str[i] !== ' '){            
//           string += str[i]       
//         } 
//         else{                       
//           array.push(string)
//           string = ""
//           count++             
//         }
//     }
//     console.log (array)
//     console.log("count is","=",count)         
// }
// splitString("i m jabeena from kashmir")



// function reverseString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) { 
//       newString += str[i]; // or newString = newString + str[i];
//   }
//   return newString; // "olleh"
// }
// console.log(reverseString('hello'));


var string="my name is jabu";
var array=[]
var str=" "
var count=0;
for (var i=string.length-1;i>=0;i--){
  if (string[i]!==' '){
    str+=string[i]
    count++
  }
  else{
    array.push(str)
    str=""
    // count++
  }
}
// a=array.reverse()
console.log(array)
console.log("count is =",count)





// number=input("enter the number:")
// b=' '
// i=0
// while i<len(number):
//     b+=number[i]
//     j=1
//     while j<=len(number)-(i+1):
//         b+="0"
//         j+=1
//     if i==(len(number)-1):
//         break
//     else: 
//         b+='+'
//     i+=1
// print(b)



// var a=require("readline-sync")
// var Number=a.questionInt("enter the number:")
// var b=' '
// var i=0
// while (i<Number.length){
//     b+=Number[i]
//     var j=1
//     while ((j<=Number.length)-(i+1)){
//         b+='0';
//         j+=1
//     }
//     if (i==(Number.length)-1){
//         break
//     }
//     else{
//         b+='+'
//     }
//     i++
// }
// console.log(b)




