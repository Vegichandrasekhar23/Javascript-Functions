var obj = {
    mykey: "value",
    name:"xyz"
};


function removeProperty(obj1,key1){
    if(obj1[key1] !== undefined){
        delete obj[key1];
        console.log(obj1);
    }
    else{
        console.log("No Key Found")
    }
}

removeProperty(obj,"name")