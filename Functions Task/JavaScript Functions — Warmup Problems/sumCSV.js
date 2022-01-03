function sumCSV(str1){
    let arr1 = str1.split(",")
    let sum = 0;
    for (i= 0;i<arr1.length;i++){
        sum += parseFloat(arr1[i]);
    }
    console.log(sum);
}
sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")