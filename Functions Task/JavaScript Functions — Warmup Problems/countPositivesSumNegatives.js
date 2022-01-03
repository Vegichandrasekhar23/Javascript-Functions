var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives(arr){
    console.log([arr.filter(num => num>0).reduce((sum,e) => (sum+e), 0),arr.filter(num => num<0).reduce((sum,e) => (sum+e), 0)]);    
}
countPositivesSumNegatives(arr);

