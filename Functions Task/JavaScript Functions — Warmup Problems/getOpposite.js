function getOpposite(e){
    if (typeof(e) == "number"){
        if(e==0){
            console.log(0);
        }
        else if(e%1 == 0){
            console.log(-e);
        }
        else{
            console.log(-1)
        }        
    }
    else{
        console.log(-1);
    }
}

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5);