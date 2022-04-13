var dict = {
    'Alex': ['subj1', 'subj2', 'subj3'],
    'David': ['subj1', 'subj2']
    }
var count=0;
for (var i in dict){
    for (var i in dict[i]){
        count++
    }
}
console.log(count) 
    