(function(Array){

var remove_duplicates_array = Array.filter((ele,index) =>
{
    return (Array.indexOf(ele) === index)
})

console.log(remove_duplicates_array)
})([1,2,3,2,4,3,5,6]);