function isSameLength(word1,word2){
    if(word1 !== undefined & word2 !== undefined){
        if(word1.length == word2.length){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
    else{
        console.log(false);
    }
}

isSameLength("GUVI","GEEK");