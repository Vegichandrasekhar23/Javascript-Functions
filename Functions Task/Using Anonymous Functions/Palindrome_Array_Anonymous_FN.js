let inputArray = [121,252,244,237];
let palindromeArray = function(Array){
    var palindrome = Array.map((item) =>{
        return String(item)
    }).filter(function(item)
    {
        if(item ===  item.split("").reverse().join(""))
        {
            return true
        }
    }).map(function(item){
        return parseInt(item)
    })
console.log(palindrome);
}

palindromeArray(inputArray)

