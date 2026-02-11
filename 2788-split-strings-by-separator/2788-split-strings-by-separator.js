/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let result = []

     for(let word of words){
        let parts = word.split(separator)
       
        for(let part of parts){
            if(part.length > 0){
                result.push(part)
            }
        }
    
     }
   return result
};