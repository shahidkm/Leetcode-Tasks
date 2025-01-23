var mergeAlternately = function(word1, word2) {
    let merged=""
    i=0
    for(i;i<word1.length || i<word2.length ;i++){
        if(i<word1.length){
            merged+=word1[i]
        }
        if(i<word2.length){
            merged+=word2[i]
        }
      
    }
    return merged
};