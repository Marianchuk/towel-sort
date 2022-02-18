
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0) return []
    if (Array.isArray(matrix)){
        if (matrix.length === 0) return []
    }
   
        let arr = [];

        for (let i = 0; i < matrix.length; i++) {
          
          if (i % 2 !== 0) {
            let m = i
            arr.push(matrix[m].reverse())
            
            
          } else {
             arr.push(matrix[i])
            
          } 
        
          
        
        } return arr.flat();
}

