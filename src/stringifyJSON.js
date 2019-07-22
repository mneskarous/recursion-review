// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  }
  if (Array.isArray(obj)) {
    var output = [];
    for (var i = 0; i < obj.length; i++) {
      output.push(stringifyJSON(obj[i]));
    }
    return '[' + output.join(',') + ']';
  }
  if (typeof obj === 'object') {
      var output = [];
      for (var key in obj) {
        var o = stringifyJSON(obj[key]);
        if(o === undefined || typeof o === 'function') {
          return '{}';
        }
        output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + output.join(',') + '}';
  }
};
