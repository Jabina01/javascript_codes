function checknumberslist(a,b){
    var i=0;
    while(i<a.length){
        if (a[i]%2==0 && b[i]%2==0){
            console.log("dono even hai")
        }
        else if (a[i]%2==0 && b[i]%2!=0){
            console.log("odd even")
        }
        else{
            console.log("dono odd hai")
        }
        i++
    }
}
checknumberslist([2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87])




