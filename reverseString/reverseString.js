const reverseString = function(str) {
      let strArray = [...str];
      let reversedStr = "";
      for(let i = strArray.length - 1; i >= 0; i--){
            reversedStr += strArray[i];
      }
      return reversedStr;
}

module.exports = reverseString
