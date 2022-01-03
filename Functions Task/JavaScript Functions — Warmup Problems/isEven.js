function isEven(e){
    if(typeof(e) == "number"){
        if(e%2==0){
            console.log(true);
        }
        else{
            console.log(false);
        }        
    }
    else{
        console.log(-1);
    }
    
}

isEven(12);
isEven(0);
isEven(11);
isEven("11h");