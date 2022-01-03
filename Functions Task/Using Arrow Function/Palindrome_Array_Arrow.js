var numarr = [121,252,244,237]

var palindromeArray = (arr)=>{
    var palindrome = arr.map((item) =>{
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
    return palindrome
}

console.log(palindromeArray(numarr))