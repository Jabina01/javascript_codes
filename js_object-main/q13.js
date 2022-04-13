var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':40,
    'e':100,
    'f':20
    }
max_keys=[];
var i=0;
while (i<=3){
    max=0;
    for (x in my_dict){
        if (max<my_dict[x]){
            max=my_dict[x]
            keys=x
    max_keys.push(max)
    }
    i++;
    }
}
console.log(max_keys)



