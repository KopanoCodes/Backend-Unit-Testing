export default function countRegNumber(regList) {
    var list = regList.split(",");
    return list.length;
  }
  
  var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
  console.log(regCount);