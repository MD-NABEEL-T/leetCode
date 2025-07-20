// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

var mergeAlternately = (word1, word2) => {
    let finWord = "";
    let i = 0;
    for(i;i<word1.length && i<word2.length; i++){
        finWord += word1[i] + word2[i];
    }   
    if(i === word2.length) {
        for(i;i<word1.length; i++){
            finWord += word1[i];
        }
    }
    else if(i === word1.length) {
        for(i;i<word2.length; i++){
            finWord += word2[i];
        }
    }   
    return finWord;
}
let word1="abcwe";
let word2="pqr";
let result = mergeAlternately(word1,word2);
console.log(result);