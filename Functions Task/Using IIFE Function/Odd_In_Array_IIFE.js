(function(Array){    
    var odd_nums = Array.filter((item)=>{
        return item%2 !==0;
    })
    console.log("Odd Numbers in Array : "+odd_nums)
})([1,2,3,4,5,6,7]);
