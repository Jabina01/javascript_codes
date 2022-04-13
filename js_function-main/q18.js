function showNumbers(limit){
    for (var i=0;i<limit;i++){
        if (i%2==0){
            console.log(i,"is an even number")
        }
        else{
            console.log(i,"is an odd number")
        }
    }

} 
showNumbers(10)