function areBothOdd(a,b){
    if( a%2 !== 0 && b%2 !== 0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

areBothOdd(1, 3);
areBothOdd(1, 4);
areBothOdd(2, 3);
areBothOdd(0, 0);