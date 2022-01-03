(function(Array){
    
    let sum = 0;
    for (i=0;i<Array.length;i++){
        sum += Array[i];
    }
    console.log("Sum is: "+sum);
    
})([5,15,20,25,30]);
