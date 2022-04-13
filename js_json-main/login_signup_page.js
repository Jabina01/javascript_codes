var fs=require('fs')
console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
if (user=="signup"){
    var user_name=a.question("enter the user_name ")
    var password1=a.question("enter ur password")
    if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
        var password2=a.question("confirm ur password")
        if (password1==password2){
            console.log("congrates")
            var description=a.question("enter ur descriptinon")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            var dob=a.question("enter ur dob")
            var hobbies=a.question("enter ur hobbies")
            var gender=a.question("enter ur gender f/m ")
            console.log("congrates",user,"u r sucessfully signupped")
            var user_details=[{"user_name":user_name,
            "password2":password2,
            "description":description,
            "dob":dob,
            "hobbies":hobbies,
            "gender":gender}]
            fs.writeFileSync("data.json",JSON.stringify(user_details));
        }
        else{
            console.log("Passwords didn't match.")
        }   
    }
    else{
        console.log("weak password")
    }    
}
else {
    if (user=="login"){
    var Name=a.question("enter the usee_name")
    var password=a.question("enter the password")
    var buf_data=fs.readFileSync("data.json");
    var org_data=buf_data.toString();
    console.log(org_data)
    if (password==password){
        console.log("congrates",Name,"u have logged sucessfully")
        console.log("ur information is correct")
    }
}
}
