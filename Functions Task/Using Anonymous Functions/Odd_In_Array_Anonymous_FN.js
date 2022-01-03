let inputArray = [1,2,3,4,5,6,7];
let OddNumArray = function(Array){    
    var odd_nums = Array.filter((item)=>{
        return item%2 !==0;
    })
    console.log(odd_nums)
}

OddNumArray(inputArray);


