export default function countAllFromTown(param1, param2) {
    var split = param1.split(",");
    var count = 0;
  
    for (var i = 0; i < split.length; i++) {
      var iterate = split[i].trim()
  
      if (iterate.startsWith(param2)) {
        count++;
      }
    }
    return count;
  }

