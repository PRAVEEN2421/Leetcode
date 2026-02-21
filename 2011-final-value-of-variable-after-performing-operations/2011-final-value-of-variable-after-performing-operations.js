/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0

      for(let i=0;i<operations.length;i++){
         let op = operations[i]

          if(op[0] === "+" || op[1] === "+"){
            x++
         }else{
            x--
         }
      }
      return x
};