const ftoc = function(tempF) {
// (F - 32)*5/9 = C
  let tempC = (tempF - 32)*(5/9);
  tempC = tempC.toFixed(1);
  return parseFloat(tempC);
}

const ctof = function(tempC) {
// 9/5*C + 32 = F
  let tempF = (9/5)*tempC + 32;
  tempF = tempF.toFixed(1);
  return parseFloat(tempF);
}

module.exports = {
  ftoc,
  ctof
}
