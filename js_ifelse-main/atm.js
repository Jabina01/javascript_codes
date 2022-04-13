console.log("WELCOME TO ATM")
let a=require("readline-sync")
var bank=a.question("insert ur atm:")
if (bank=="indian atm bank"){
    console.log("welcome to atm")
    var card=a.question("enter ur card")
    if (card=="debitcard" || "creditcard"){
        console.log("plz wait")
        var language=a.question("select ur language")
        if (language=="english" || "hindi"){
            console.log("processing")
            var password=a.question("please enter your atm pin")
            if (password==9858){
                console.log("please wait.. we are chacking the password")
                var account=a.question("choose your account")
                if (account=="saving" || "reserve"){
                    console.log("to be continue with saving account")
                    cash=a.question("select transaction option")
                    if (cash== "withdraw"){
                        console.log("proceeding") 
                        money =a.question("enter the ammount")
                        if (money>99 && money<10001){
                            console.log("please wait transaction is proceeding")
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
                    console.log("nothing")  
                }           
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
        console.log("nothing")
    }
}
else{
    console.log("nothing")
}
