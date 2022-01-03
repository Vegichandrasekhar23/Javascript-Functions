var numarr1 = [11,24,36,47,52]
var numarr2 = [63,75,89,91,10]

var median_sorted_array = (arr1,arr2) =>{    
    var merged_arr = arr1.concat(arr2).sort(function(a,b)
    {
        return a-b
    });
    var len = merged_arr.length
    if (len%2 === 0)
    {
        return(`Median : ${((merged_arr[(len/2)-1]+merged_arr[len/2])/2)}`);
    }
    else{
        return (`Median : ${merged_arr[Math.floor(len/2)]}`);
    }
}
console.log(median_sorted_array(numarr1,numarr2))
