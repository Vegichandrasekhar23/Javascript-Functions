(function(Array){
    var prime = Array.filter((item)=>
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
    console.log("Prime Numbers in Array are: "+prime);
})([11,12,13,14,15,16,17]);
    