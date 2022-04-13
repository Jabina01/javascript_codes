var list=[{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
var unique_list=[]
for (i of list){
    for (j in i){
        if (!unique_list.includes(i[j])){
        unique_list.push(i[j])
        }
    }
}
console.log(unique_list)