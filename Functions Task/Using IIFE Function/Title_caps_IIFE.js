(function(Array){ 
    let titleCapArray = []  
    Array.map((item)=>{
        let str2 = item.split("");
        
        for (var i =0; i<str2.length;i++)
        {
            if (i === 0)
            {
                str2[0] = str2[0].toUpperCase()
            }
            else
            {
                str2[i] = str2[i].toLowerCase()
            }           
            
        }
        titleCapArray.push(str2.join(""));            
    })
    console.log(titleCapArray);
})(["guVi", "haS","vAriouS","coURSes"]);

