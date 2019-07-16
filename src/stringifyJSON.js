// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //define variable result to hold output 
  let result = '';
  //check for strings, numbers, booleans, undefined, function, null, arrays, objects 
  //slice out first and last item in obj
  
  
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  
  if (typeof obj === 'number') {
    let num = obj; 
    return num.toString(); 
  }
  
  if (obj === null) {
    return 'null'; 
  }
  
  if (typeof obj === 'undefined'){
    return undefined;
  }
  
  if (typeof obj === 'function'){
    return '{}';
  }
  
  if (typeof obj === 'boolean') {
    return obj.toString(); 
  }
  
  
  if (Array.isArray(obj)) {
   let memo = obj.map(function(item) {
      return stringifyJSON(item); 
    });
    return '[' + memo + ']';
  } else {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      // for (let key in obj) {
        for (let key in obj) {
          if (typeof obj[key] === "function" || typeof obj[key] === "undefined") {
            continue; //skip and jumps loop 
          } else {
          result += '"' + key + '"' + ":" + stringifyJSON(obj[key]) + ',';
        }
      }
      // var entries = Object.entries(obj)
      // for (let i = 0 ; i < entries.length ; i++) {
      //   if (!typeof entries[i][0] === 'function' || !typeof entries[i][1] === 'undefined') {
      //     result += '"' + entries[i][0] + '"' + ":" + stringifyJSON(entries[i][1]) + ',';
      //   }
        // result += stringifyJSON(obj[key]);
      }
    }
  return '{' + result.slice(0, result.length -1) + '}'; 
  //if strings, we add quotations 
  //if numbers, booleans, null, toString()
  //undefined stays the same 
  //arrays
    //add []
      //check inside array via recursion 
  //objects 
    //add {}
      //check inside object via recursion 
  //return final output 

};
