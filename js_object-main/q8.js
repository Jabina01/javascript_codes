var list1=["one","two","three","four","five"]
var list2=[1,2,3,4,5,]
var list3={}
for (var i in list2){
    list3[list1[i]]=list2[i]
}
console.log(list3)

