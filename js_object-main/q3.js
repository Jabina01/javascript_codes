var mainString=["My" ,"name ","is", "kumar"," and", "my ","friend’s","name ","is","dhanu"]
var substring="is"
count=0;
for (let i in mainString){
    if (mainString[i]=="is"){
        count=count+1
    }
}
console.log("the substring",count,"times in mainstring");