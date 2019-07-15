// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // var arr = [1, {a: 1}, 3, 4, 5,];
  // null
  if (obj === null) {
    return 'null';
  }
  // number
  if (typeof obj === 'number') {
    return obj.toString();
  }
  // string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // boolean
  if (typeof obj === 'boolean') {
    if (obj) {
      return 'true';
    } else {
      return 'false';
    }
  }
  // array
  if (Array.isArray(obj)) {
    // if (obj.length === 0) {
    //   return '[]';
    // }
    // var item = '[';
    // for (var i = 0; i < obj.length; i++) {
    //   item += stringifyJSON(obj[i]) + ',';
    // }
    // console.log(item);
    // // if (obj.length === 1) {
    //   var sliced = item.slice(0, item.length - 2) + ']';
    //   return sliced;
    // return item + ']';
    var output = [];
    for (var i = 0; i < obj.length; i++) {
      output.push(stringifyJSON(obj[i]));
    }
    return '[' + output.join(',') + ']';
  }
  // object
  // if (obj === undefined || typeof obj === 'function') {
  //   return '{}';
  // } else {
  //   if (typeof obj === 'object') {
  //     var output = [];
  //     for (var key in obj) {
  //       output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  //     }
  //   return '{' + output.join(',') + '}';
  //   }
  
  // }
  //var stringifiable = false;
  if (typeof obj === 'object') {
    //if (obj === undefined || typeof obj === 'function') {
     // return '{}';
    //} else {
      var output = [];
      for (var key in obj) {
        var o = stringifyJSON(obj[key]);
        if(o === undefined || typeof o === 'function') {
          return '{}';
        }
        output.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      return '{' + output.join(',') + '}';
    //}
  }
  // undefined
  // functions
};
