function getDistance(x1,y1,x2,y2){
    var result = Math.sqrt((Math.pow((x2-x1),2)+Math.pow((y2-y1),2)));
    console.log(result);
}

getDistance(100, 100, 400, 300);