var numarr = [1,2,3,4,5]
var rotate_num = 2

var rotated_array = (Array,num) =>
{
    var arr1 = []
    len = Array.length
    if(len%num === 0)
    {
        return Array
    }
    else
    {
        for (i=(len-num);i<len;i++)
        {
            arr1.push(Array[i])
        }
        for(j=0;j<(len-num);j++)
        {
            arr1.push(Array[j])
        }
    }
    return arr1
}
console.log(rotated_array(numarr,rotate_num))
