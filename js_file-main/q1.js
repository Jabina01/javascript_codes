// write file
const fs = require('fs')
fs.writeFileSync("json.txt","i m jabeena");


// read file
// fs.readFileSync("json.txt");
// var buf_data=fs.readFileSync("json.txt","utf8");
// // var org_data=buf_data.toString();
// console.log(buf_data)



// append file
// fs.appendFileSync("json.txt", " i m kirti")


// rename file
// fs.renameSync("json.txt","khushboo.txt")



// Delete file
// var fs = require('fs');

// fs.unlink('khushboo.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// }); 



// open file
var fs = require('fs');

fs.open('myfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('saved!');
}); 


// update file
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// }); 
