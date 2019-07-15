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
    return '"' + obj + '"';
  }
  // string
  // boolean
  // array
  // object
  // undefined
  // functions
};
