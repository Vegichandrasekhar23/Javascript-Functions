function getPrimes(nPrimes, startAt)
{
    let arr = [];
    let i = startAt;
    while(arr.length < nPrimes)
    {
    if (isPrime(i))
    {
    arr.push(i);
    }
    
    i++;
    }
    console.log(arr);
}
// Returns true if a number is prime
function isPrime(n)
{
    for(let i=2 ; i<=n/2; i++){
        if(n%i == 0){
            return false;
        }
    };
    return true;
}

getPrimes(10,100);