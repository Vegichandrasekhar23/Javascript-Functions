let inputArray = [1,2,3,4,5];
let rotateNum = 2


let roatedArray = function(Array,num){
    var arr1 = []
    len = Array.length
    let k = num%len;
    for(i=0;i<len;i++){
        if(i<k){
            arr1.push(Array[len+i-k]);
        }
        else{
            arr1.push(Array[i-k]);
        }
    }
    console.log(arr1);    
}

roatedArray(inputArray,rotateNum)