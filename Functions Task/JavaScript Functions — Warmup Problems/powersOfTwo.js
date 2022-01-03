function powersOfTwo(num){
    var arr1 = []
    for(i=0;i<=num;i++){
        arr1.push(Math.pow(2,i));
    }
    console.log(arr1.join(","));
}

powersOfTwo(0);
powersOfTwo(1);
powersOfTwo(2);