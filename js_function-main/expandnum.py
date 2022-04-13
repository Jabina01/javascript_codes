# number=input("enter the number:")
# b=' '
# i=0
# while i<len(number):
#     b+=number[i]
#     j=1
#     while j<=len(number)-(i+1):
#         b+="0"
#         j+=1
#     if i==(len(number)-1):
#         break
#     else: 
#         b+='+'
#     i+=1
# print(b)



# atm=int(input("enter the number"))
# note500=note100=note50=note20=note10=note5=note2=note1=note=0
# if atm>=500:
#     note500=atm//500
#     atm=atm-note500*500
# if atm>=100:
#     note100=atm//100
#     atm=atm-note100*100
# if atm>=50:
#     note50=atm//50
#     atm=atm-note50*50
# print("500\t=\t","=",note500)
# print("100\t=\t","=",note100)
# print("50\t=\t","=",note50)



import json
import re
import os
file=os.path.exists("user.json")
print(file)
if file==False:
    dic2={}
    list1=[]
    dic1={}
    print("**welcome to login and sign up page**")
    user=input("what u want to do login or sign up:")
    if user=="signup":
        user_name=input("enter the user_name :")
        password1=input("enter ur password:")
        if re.search("[A-Z]",password1) and re.search("[a-z]",password1) and re.search("[0-9]",password1) and  re.search("[#$%&@]",password1):
            password2=input("confirm ur password:")
            with open("user.json","r")as file :
                data=json.load(file)
            if password1==password2:
                print("congrates",user_name)
                description=input("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                dob=input("enter ur dob:")
                hobbies=input("enter ur hobbies:")
                gender=input("enter ur gender f/m: ")
                l1=["name","password","describtion","DOB","Hobbies","Gender"]
                l2=[user_name,password1,description,dob,hobbies,gender]
                for i in range(0,len(l1)):
                    dic2.update({l1[i]:l2[i]})
                list1.append(dic2)
                dic1.update({password2:list1})
                with open("user.json","w")as injson :
                    json.dump(dic1, injson,indent=4)
            else:
                print("Passwords didn't match.")                                                                                                                                    
        else:
            print("weak password")
if file==True:
    list1=[]
    user=input("what u want to do login or sign up:")
    if user=="signup":
        user_name=input("enter the user_name: ")
        password1=input("enter ur password:")
        with open("user.json","r")as n :
            data=json.load(n)
        for i in data:
            if i==password1:
                print("this account is areleay existst")
                print(data[i])
                break
            if re.search("[A-Z]",password1) and re.search("[a-z]",password1) and re.search("[0-9]",password1) and  re.search("[#,$,%,&,@]",password1):
                password2=input("confirm ur password:")
                if password1==password2:
                    print("congrates",user_name)
                    description=input("enter ur descriptinon:")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    dob=input("enter ur dob:")
                    hobbies=input("enter ur hobbies:")
                    gender=input("enter ur gender f/m :")
                    print("congress",user_name,"u have successfully signup")
                    l1=["name","password","describtion","DOB","Hobbies","Gender"]
                    l2=[user_name,password2,description,dob,hobbies,gender]
                    dic2={}
                    for i in range(0,len(l1)):
                        dic2.update({l1[i]:l2[i]})
                    list1.append(dic2)
                    data.update({password2:list1})
                    with open("user.json","w")as injson :
                        json.dump(data, injson,indent=2)
                else:
                    print("Passwords didn't match.")                                                                                                                                    
            else:
                print("weak password")

    elif user=="login":
        name=input("enter the usee_name:")
        password=input("enter the password:")
        with open("user.json","r")as file :
            data=json.load(file)
        for i in data:
            if i==password:
                print("ur given information is correct")
                print(data[i])
                break
        else:
            print("sorry ur password is wrong")

