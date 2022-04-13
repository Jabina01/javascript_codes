// let a=require("readline-sync")
// var fb =a.question("do you want to create new account")
// if (fb=="no"){
//     console.log("login")
//     number=a.question("enter your number or email address")
//     if (number>=9999999999 || number<=9999999999){
//         console.log("connecting")
//         password=a.question("enter your password")
//         if (password=="a1b2c3d4"){
//            console.log("you are logged in")
//         }
//         else{
//             console.log("wrong password")
                        
//         }
//     } 
//     else{
//         console.log("invailed connection")
//     }       
// }
// else{
//     console
// }



let a=require ("readline-sync")
var name=a.question("enter the name")
if (name==name){
    var language=a.question("enter ur language:")
    if (language=="hindi" || "english"){
    var email=a.question("enter ur email id:")
    if (email=="jabeena20@gmail.com"){
        console.log("correct")
        var num=a.question("enter ur number:")
        if (num>1000000000 || num<10000000000){
            console.log("next")
            var password1=a.question("enter ur password")
            if (password1>="letters" && "other symbols" && "number"){
                console.log("submit")
                var login=a.question("enter the login button")
                if (login=="yes"){
                    console.log("next")
                    var Name=a.question("enter ur name")
                    if (Name==Name){
                        console.log("ok")
                        var password2=a.question("enter ur password")
                        if (password1==password2){
                            console.log("u r logged in")
                        }
                        else{
                            console.log("nothing")
                        }
    2
                    }
                    else{
                        console.log("nothing")
                    }

                }
                else{
                    console.log("nothing")
                }
            }
            else{
                console.log("nothin")
            }
        }
        else{
            console.log("nothing")
        }
    }
    else{
        console.log("nothin")
    }
    }
    else{
    console.log("nothin")
    }
}


