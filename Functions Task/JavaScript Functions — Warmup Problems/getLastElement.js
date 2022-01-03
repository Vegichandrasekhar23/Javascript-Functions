function getLastElement(arr){
    if(typeof(arr) !== "object"){
        console.log(-1);
    }
    else{
        console.log(arr[arr.length-1]);
    }
}

getLastElement([1,2,3,4]);