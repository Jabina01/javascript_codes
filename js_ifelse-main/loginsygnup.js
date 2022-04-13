console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
if (user=="signup"){
    user_name=a.question("enter the user_name ")
    password1=a.question("enter ur password")
    if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
        password2=a.question("confirm ur password")
        if (password1==password2){
            console.log("congrates")
            description=a.question("enter ur descriptinon")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            dob=a.question("enter ur dob")
            hobbies=a.question("enter ur hobbies")
            gender=a.question("enter ur gender f/m ")
            console.log("congrates",user,"u r sucessfully signupped")
        }
        else{
            console.log("Passwords didn't match.")
        }
            
    }
    else{
        console.log("weak password")
    }    
}
else{
    if (user=="login");
    Name=a.question("enter the usee_name")
    password=a.question("enter the password")
    if (password==password){
        console.log("congrates",Name,"u have logged sucessfully")
        console.log("ur information is correct")
        
    }
}







