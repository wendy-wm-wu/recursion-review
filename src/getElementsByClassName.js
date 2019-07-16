// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // Initialize empty var result = []
  // return inner function, one parameter
  // within inner function, check Element.classList if exists, and if it contains that className, push className into result
  // check if it has childNodes, iterate through all children recursively
  // outside of the inner function, invoke inner function, return result
  
  var result = [];
  function inner(node) {
    if (node.classList && node.classList.contains(className)){
      result.push(node);
    }
    if (node.hasChildNodes()){
      for (var i = 0 ; i < node.childNodes.length ; i++){
        inner(node.childNodes[i]);
      }
    }
  }
  
  inner(document.body);
  return result; 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
};
