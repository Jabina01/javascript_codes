var fs=require('fs')
const path="/home/jabeena/Desktop/js_json/data.json";
const file_exist=(fs.existsSync(path));
console.log("welcome to login and sign up page")
var a=require("readline-sync")
var user=a.question("what u want to do login or sign up:")
if (file_exist==false){
    if (user=="signup"){
        var user_name=a.question("enter the user_name :")
        var password1=a.question("enter ur password:")
        if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
            var password2=a.question("confirm ur password:")
            if (password1==password2){
                console.log("congrates")
                var description=a.question("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                var dob=a.question("enter ur dob:")
                var hobbies=a.question("enter ur hobbies:")
                var gender=a.question("enter ur gender f/m :")
                console.log("congrates",user,"u r sucessfully signupped")
                l1=["name","password","describtion","DOB","Hobbies","Gender"]
                l2=[user_name,password1,description,dob,hobbies,gender]
                var list1=[]
                dic2={}
                dic1={}
                for (i in l1){
                dic2[l1[i]]=l2[i]
                }
                list1.push(dic2)
                dic1[password2]=list1
                fs.writeFileSync("data.json",JSON.stringify(dic1,null,2));
            }
            else{
                console.log("Passwords didn't match.")
            }   
        }
        else{
            console.log("weak password")
        }
    }
}
else if (file_exist==true){
    if (user=="signup"){
        var user_name=a.question("enter the user_name: ")
        var password1=a.question("enter ur password:")
        var buf_data=fs.readFileSync("data.json","utf8");
        var org_data=JSON.parse(buf_data);
        // console.log(org_data)}}
        if(buf_data.includes(user_name,password1)){
            console.log("this account is already exist");
        }
        else if (password1.match(/[A-Z]/m) && password1.match(/[a-z]/m) && password1.match(/[0-9]/m) &&  password1.match(/[$#&@]/m)){
            var password2=a.question("confirm ur password:")
            if (password1==password2){
                console.log("congrates:")
                var description=a.question("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                var dob=a.question("enter ur dob:")
                var hobbies=a.question("enter ur hobbies:")
                var gender=a.question("enter ur gender f/m :")
                console.log("congrates",user,"u r sucessfully signupped")
                l1=["name","password","describtion","DOB","Hobbies","Gender"]
                l2=[user_name,password1,description,dob,hobbies,gender]
                dic2={}
                var list1=[]
                for (i in l1){
                    dic2[l1[i]]=l2[i]
                    }
                list1.push(dic2)
                org_data[password2]=list1
                fs.writeFileSync("data.json",JSON.stringify(org_data , null,6));   
                }
            else{
                console.log("Passwords didn't match.")
                }   
            }
        }
else {
    if (user=="login"){
        var Name=a.question("enter the usee_name:")
        var password=a.question("enter the password:")
        var buf_data=fs.readFileSync("data.json","utf8");
        var org_data=buf_data.toString();
        console.log(org_data)
            if(buf_data.includes(user_name,password)){
                console.log("congrates",Name,"u have logged sucessfully")
                console.log("ur information is correct")
            }
            else{
                console.log("ur pas is wrong")
            }  
        } 
    }
}