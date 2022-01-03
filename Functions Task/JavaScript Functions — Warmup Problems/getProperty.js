
var obj = {
    mykey: "value"
};

function getProperty(obj1,key1){
    console.log(obj1[key1]);
}

getProperty(obj,'mykey');
getProperty(obj,'dummykey');

