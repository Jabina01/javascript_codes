var a=require("readline-sync")
var atm=a.questionInt("enter the number")
note500=note100=note50=note20=note10=note5=note2=note1=note=0
if (atm>=500){
    note500=Math.floor(atm/500)
    atm=atm-note500*500
if (atm>=100){
    note100=Math.floor(atm/100)
    atm=atm-note100*100
if (atm>=50){
    note50=Math.floor(atm/50)
    atm=atm-note50*50
}
}
}
console.log("500\t=\t","=",note500)
console.log("100\t=\t","=",note100)
console.log("50\t=\t","=",note50)
