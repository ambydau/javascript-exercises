const repeatString = function(str, num) {
      let repeatedString = "";
      if(num < 0){
            repeatedString = "ERROR";
      }
      while(num > 0) {
            repeatedString += str;
            num--;
      }
      return repeatedString;
}

module.exports = repeatString
