function multiplesOfNumbers(limit){
    for (var i=0;i<=limit;i++){
        if (i%3==0 ){
            console.log(i)
        }
        else{
           if (i%5==0){
               console.log(i)
           }
        }
    }
}
console.log(multiplesOfNumbers(10))



