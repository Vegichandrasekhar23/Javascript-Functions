var numarr = [1,2,3,4,5,6,7]
var oddNumArray = (arr)=>{
    var oddnums = arr.filter((item)=>{
    return item%2 !==0;
})
return oddnums
}
console.log(oddNumArray(numarr))