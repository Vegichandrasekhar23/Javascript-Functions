var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

function mergeArrays(arr1,arr2){
    var result = []
    for(el of arr1){
        result.push(el);
    }
    for(el of arr2){
        result.push(el);
    }
    console.log(result);
}

mergeArrays(arr1,arr2);5