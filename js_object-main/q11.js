var string="MISSISSIPPI"
let count={};
var list=[]
for (var i of string){
    if (list.includes(i)){
        count[i]=count[i]+1;
    }
    else{
        list.push(i)
        count[i]=1
    }
}
console.log(count)