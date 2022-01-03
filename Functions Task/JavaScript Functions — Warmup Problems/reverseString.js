function reverseString(str1){
    let arrStr = [...str1];
    let reverseStr = []
    if(str1.length === 0){
        return str1;
    }
    for(i=arrStr.length;i>0;i--){
        reverseStr += arrStr[i-1];
    }
    console.log(reverseStr);
}

reverseString("JavaScript");