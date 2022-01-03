var numarr = [11,12,13,14,15,16,17]
var primeNumberArray = (arr) =>{
    var prime = arr.filter((item)=>
    {    
        for(i=2;i<item;i++)
            {
                if(item ===1)
                {
                    return false;
                }
                else if (item%i === 0)
                {
                    return false
                }
                else
                {
                    return true
                }
                
            }
    })
    return prime;
}
console.log(primeNumberArray(numarr))
