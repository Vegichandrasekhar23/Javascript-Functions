(function (numarr1,numarr2){   
  var merged_arr = numarr1.concat(numarr2).sort(function(a,b)
  {
      return a-b;  
  });
  var len = merged_arr.length;
  if (len%2 === 0)
  {
      console.log("Median: "+(merged_arr[(len/2)-1]+merged_arr[len/2])/2)
  }
  else{
      console.log("Median: "+merged_arr[Math.floor(len/2)])
  }
})([11,24,36,47,52],[63,75,89,91,10]);

