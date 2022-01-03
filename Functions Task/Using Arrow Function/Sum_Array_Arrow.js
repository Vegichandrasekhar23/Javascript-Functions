var numarr = [5,15,20,25,30]

var sum_numarr =(arr)=>{
    var sum_arr = arr.reduce((result,item)=>
    {
        return result+item
    })
    return (`sum : ${sum_arr}`);
}

console.log(sum_numarr(numarr))