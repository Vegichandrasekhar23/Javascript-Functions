var numarr = [1,2,3,2,4,3,5,6]

var remove_duplicates_array =(arr) =>{
    var removeDuplicates = arr.filter((ele,index) =>
    {
        return (numarr.indexOf(ele) === index)
    })
    return removeDuplicates;
}
console.log(remove_duplicates_array(numarr))