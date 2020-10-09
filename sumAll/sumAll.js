const sumAll = function(a, b) {
      let sum = 0;
      // If a or b is negative or if a or b is NaN: return "ERROR"
      if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
            return "ERROR";
      } else if(a < b){
            for(let i = a; i <= b; i++){
                  sum += i;
                  
            }
      } else {
            for(let i = b; i <= a; i++){
                  sum += i;    
            }
      }
      return sum;
}

module.exports = sumAll
