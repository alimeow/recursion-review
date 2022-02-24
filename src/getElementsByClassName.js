// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var content = document.body;
  var result = [];

  var checkClass = function(element) {
    if (element.classList !== undefined && element.classList.contains(className)) {
      result.push(element);
    }

    if (element.hasChildNodes() === true) {
      for (var i = 0; i < element.childNodes.length; i++) {
        checkClass(element.childNodes[i]);
      }
    }
  };
  checkClass(content);
  return result;
};
