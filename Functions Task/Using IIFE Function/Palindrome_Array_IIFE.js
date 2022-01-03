(function(Array){
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
console.log(`Palindrome in Array are: ${palindrome}`);
})([121,252,244,237]);